import styles from "./styles.module.scss";

declare type ContentCardProps = {
  title: string;
  children: any;
  separator?: any;
};
export default function _View({
  title,
  children,
  separator,
}: ContentCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.contentContainer}>
        <div className={styles.wrapperConent}>
          {separator}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}
