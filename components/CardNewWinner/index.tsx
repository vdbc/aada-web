import { isEmpty } from "lodash";
import Image from "next/image";
import { useAppSelector } from "../../store";

import styles from "./styles.module.scss";
import { selectWinnersDetail } from "../../store/modules/winnersNews";
import Link from "next/link";
import { getNewsFlugId, getWinnersFlugId } from "../../utils/news";

declare type WinnersCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: WinnersCardProps) {
  const winners = useAppSelector(selectWinnersDetail(id)) ?? {};
  const { projectId, thumbnail, wallpaper, projectName, nominateName } = winners;

  if (isEmpty(winners))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );

  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <Link href={`/winners-2023/${getWinnersFlugId(winners)}`}>
        <div className={styles.thumbnail}>
          <div>
            <Image src={thumbnail || "/default-thumbnail.jpg"} alt="Thumbnail" fill />
            <div className={styles.title}>
              <h3>2023 BEST</h3>
              <div>{nominateName}</div>
            </div>
          </div>
          <div className={styles.subTitle}>
            <h5>Project</h5>
            <h3>{projectName}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
