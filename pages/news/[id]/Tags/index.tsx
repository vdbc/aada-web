import styles from "./styles.module.scss";

const tags = ["Hermes", "Xu hướng", "Milan Fashion Week"];

export default function _View() {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>Tags</h3>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button key={tag} className={styles.tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
