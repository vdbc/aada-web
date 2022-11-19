import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

function _ButtonLink({ href, children }: any) {
  return (
    <Link href={href}>
      <div className={styles.buttonLink}>
        <div className={styles.wrapper}>{children}</div>
        <MdArrowForward size={20} />
      </div>
    </Link>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <h1>AWARD CATEGORIES</h1>
      <div className={styles.subTitle}>
        The appreciation of Architecture & Design works, ranging from
        independent work to full-serviced firms that has substantial
        contribution to the society.
      </div>
      <div className={styles.spacer} />
      <div className={styles.awardCategories}>
        <Image alt="Award Categories" src="/home/award_categories.svg" fill />
      </div>
      <div className={styles.spacer} />
      <_ButtonLink href="/categories">
        EXPLORE ALL AWARDS CATEGORIES
      </_ButtonLink>
    </div>
  );
}
