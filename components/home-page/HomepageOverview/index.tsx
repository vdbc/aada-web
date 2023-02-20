import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/logo.svg" alt="Logo" className={styles.logoTop} />

        <div className={styles.highlight}>
          <div className={styles.title}>2023</div>
          <div className={styles.subTitle}>Impactful Asia</div>
        </div>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <p>
          AADA aspires to promote the efforts of talented designers and
          companies in emerging Asia architecture and design industry, provides
          an excellent platform to present their work on an international level.
        </p>
        <p>
          Submissions to AADA opens to Asia and beyond, accepting an unlimited
          number of entries in 30 categories.{" "}
        </p>
      </div>
    </div>
  );
}
