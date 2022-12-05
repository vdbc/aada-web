import styles from "./styles.module.scss";

declare type ProcessStatusProps = {
  percent: number;
};

export default function _View({ percent }: ProcessStatusProps) {
  return (
    <div className={styles.processBackground}>
      <div style={{ width: `${percent}%` }} className={styles.processPercent} />
    </div>
  );
}
