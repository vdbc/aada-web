import Link from "next/link";
import styles from "./styles.module.scss";

declare type ButtonExploreProps = {
  href: string;
  children: any;
  onClick?: () => void;
};

export function ButtonExplore({ href, children }: ButtonExploreProps) {
  return (
    <Link href={href}>
      <div className={styles.buttonLink}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </Link>
  );
}

declare type ButtonLoadMoreProps = {
  children: any;
  onClick?: () => void;
};
export function ButtonLoadMore({ children, onClick }: ButtonLoadMoreProps) {
  return (
    <div className={styles.button}>
      <div className={styles.wrapperBt} onClick={onClick}>{children}</div>
    </div>

  );
}