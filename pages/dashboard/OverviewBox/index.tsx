import styles from "./styles.module.scss";

declare type OverviewBoxProps = {
  number: number;
  title: string;
  subTitle?: string;
};

function formatNumber(number: number) {
  if (number >= 10) return number + "";
  return `0${number}`;
}

export default function _View({
  number,
  title,
  subTitle = "",
}: OverviewBoxProps) {
  return (
    <div className={styles.overviewBox}>
      <div className={styles.number}>{formatNumber(number)}</div>
      <div className={styles.wrapperTitle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
}
