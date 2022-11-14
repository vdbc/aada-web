/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footerImg} alt="Footer" src="/home/footer.svg" />
    </footer>
  );
}
