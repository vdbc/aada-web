import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

declare type ButtonLinkProps = {
  href: string;
  children: any;
  className: string;
};

export default function _ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <Link href={href}>
      <div className={[styles.buttonLink, className].join(' ')}>
        <div className={styles.wrapper}>{children}</div>
        <MdArrowForward size={20} />

      </div>
    </Link>
  );
}
