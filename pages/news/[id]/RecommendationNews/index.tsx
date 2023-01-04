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

export default function _View() {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>Có thể bạn bỏ lỡ</h3>
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
