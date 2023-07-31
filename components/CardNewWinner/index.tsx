import { isEmpty } from "lodash";
import Image from "next/image";
import { useAppSelector } from "../../store";

import styles from "./styles.module.scss";
import { selectWinnersDetail } from "../../store/modules/winnersNews";

declare type WinnersCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: WinnersCardProps) {
  const winners = useAppSelector(selectWinnersDetail(id)) ?? {};
  const { projectId, thumbnail, wallpaper, status } = winners;
  console.log("124");
  if (isEmpty(winners))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );


  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <div className={styles.thumbnail}>
        <div>
          <Image src={thumbnail || "/default-thumbnail.jpg"} alt="Thumbnail" fill />
        </div>
        <div className={styles.subTitle}>
          <h5>Project</h5>
          <h1>{projectId}</h1>
        </div>
      </div>
    </div>
  );
}
