import Image from "next/image";
import { useAppSelector } from "../../../../store";
import styles from "./styles.module.scss";
import { selectWinnerNewsDetail } from "../../../../store/modules/winnersNews";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const { wallpaper, projectName, nominateName } =
    useAppSelector(selectWinnerNewsDetail(id)) || {};

  const title = nominateName?.includes("2023 BEST")
    ? nominateName.replace("2023 BEST", "")
    : nominateName;
  return (
    <div className={styles.container}>
      <Image src={wallpaper || "/wallpaper.jpg"} alt="Wallpaper" fill />
      <div className={styles.box}>
        <h3 className={styles.best}>2023 BEST</h3>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.desc}>{projectName}</div>
      </div>
    </div>
  );
}