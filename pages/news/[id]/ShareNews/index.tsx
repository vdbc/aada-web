import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import styles from "./styles.module.scss";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
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
      <div className={styles.ref}>by Asia Architecture and Design Awards</div>
    </div>
  );
}
