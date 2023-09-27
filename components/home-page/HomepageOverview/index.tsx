import styles from "./styles.module.scss";
import Image from "next/image";
export default function _View() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="Logo" className={styles.logoTop} />

        <div className={styles.logo}>
          <Image src="/logo_2024_old.svg" alt="Logo" fill />
        </div>

      </div>
      <div className={styles.content}>
        <p>
          AADA’s vision is to curate and elevate the endeavors of exceptionally talented designers and innovative companies<br /> within the rapidly growing architecture and design sector of emerging Asia.
        </p>
        <p>
          By providing an exceptional platform, the award aims to present their remarkable work on an international scale, <br /> fostering global recognition and appreciation.
        </p>
      </div>
    </div>
  );
}