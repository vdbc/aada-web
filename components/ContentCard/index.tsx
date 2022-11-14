import styles from "./styles.module.scss";

declare type ContentCardProps = {
  title: string;
  children: any;
};

export default function _View({ title, children }: ContentCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
