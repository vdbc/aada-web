import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import styles from "./styles.module.scss";

const title =
  "Thấy Gì Về Xu Hướng Thiết Kế Nội Thất Tại Milan Design Week 2022";
const description =
  "Qua Milan Design Week 2022, Hermes đã mang những xu hướng thiết kế nội thất mới bằng các sản phẩm độc đáo. Hãy cùng  tìm hiểu ngay!";

export default function _View() {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Share</div>
      <div className={styles.actions}>
        <button className={styles.icon}>
          <ImFacebook size={13} />
        </button>
        <button className={styles.icon}>
          <BsInstagram size={13} />
        </button>
        <button className={styles.icon}>
          <FaLinkedinIn size={13} />
        </button>
      </div>
      <div className={styles.ref}>
        by Vietnam Design Centrale / @vncentrale.news
      </div>
    </div>
  );
}
