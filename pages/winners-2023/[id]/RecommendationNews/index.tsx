import Image from "next/image";
import styles from "./styles.module.scss";

function CardItem() {
  return (
    <div className={styles.cardItemContainer}>
      <Image src="/img.jpg" alt="Thumbnail" width={75} height={75} />
      <div className={styles.overview}>
        <div className={styles.time}>Corporate13 October 2022</div>
        <div className={styles.title}>
          Career opportunities for architecture students
        </div>
      </div>
    </div>
  );
}

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>More News From ADDA</h3>
      <div className={styles.items}>
        <div className={styles.row}>
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className={styles.row}>
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className={styles.row}>
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
}
