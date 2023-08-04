import { isEmpty } from "lodash";
import Image from "next/image";
import { useAppSelector } from "../../store";

import styles from "./styles.module.scss";
import { selectWinnersDetail } from "../../store/modules/winnersNews";
import Link from "next/link";
import { getWinnersFlugId } from "../../utils/news";

declare type WinnerNewsCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: WinnerNewsCardProps) {
  const winnerNews = useAppSelector(selectWinnersDetail(id)) ?? {};
  const { thumbnail, projectName, nominateName } = winnerNews;
  const title = nominateName?.includes("2023 BEST")
    ? nominateName.replace("2023 BEST", "")
    : nominateName;

  if (isEmpty(winnerNews))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );

  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <Link href={`/winners-2023/${getWinnersFlugId(winnerNews)}`}>
        <div className={styles.thumbnail}>
          <div>
            <Image src={thumbnail || "/default-thumbnail.jpg"} alt="Thumbnail" fill />
            <div className={styles.title}>
              <h3>2023 BEST</h3>
              <div>{title}</div>
              {nominateName === "2023 BEST RESIDENTIAL ARCHITECTURE DESIGN-LANDED HOUSING" ? (
                <p className={styles.textLanded}>Landed Housing</p>
              ) : null}
            </div>
          </div>
          <div className={styles.subTitle}>
            <h5>Project</h5>
            <h5 className={styles.projectName}>{projectName}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
