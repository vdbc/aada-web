import styles from "./styles.module.scss";

declare type ProcessStatusProps = {
  percent: number;
  className?: string;
};

export default function _View({ percent, className = "" }: ProcessStatusProps) {
  return (
    <div className={[styles.processBackground, className].join(" ")}>
      <div style={{ width: `${percent}%` }} className={styles.processPercent} />
    </div>
  );
}
