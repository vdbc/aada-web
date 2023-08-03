import Image from "next/image";
import { useAppSelector } from "../../../../store";
import { selectNewsDetail } from "../../../../store/modules/news";
import styles from "./styles.module.scss";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const { title, description, wallpaper } =
    useAppSelector(selectNewsDetail(id)) || {};
  return (
    <div className={styles.container}>
      <Image src={wallpaper || "/wallpaper.jpg"} alt="Wallpaper" fill />
      <div className={styles.box}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
