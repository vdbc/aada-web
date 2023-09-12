import Link from "next/link";
import styles from "./styles.module.scss";

declare type ButtonExploreProps = {
  href: string;
  children: any;
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
