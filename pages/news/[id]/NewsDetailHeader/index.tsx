import Image from "next/image";
import styles from "./styles.module.scss";

const title =
  "Thấy Gì Về Xu Hướng Thiết Kế Nội Thất Tại Milan Design Week 2022";
const description =
  "Qua Milan Design Week 2022, Hermes đã mang những xu hướng thiết kế nội thất mới bằng các sản phẩm độc đáo. Hãy cùng  tìm hiểu ngay!";

export default function _View() {
  return (
    <div className={styles.container}>
      <Image src="/wallpaper.jpg" alt="Wallpaper" fill />
      <div className={styles.box}>
        <h1>{title}</h1>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
