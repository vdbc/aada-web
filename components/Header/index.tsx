import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="AADA Logo"
            width={170}
            height={56}
          />
        </Link>
        <div className={styles.spacer} />
        <Link className={styles.link} href="/the-award">
          THE AWARD
        </Link>
        <Link className={styles.link} href="/the-award">
          CATEGORIES
        </Link>
        <Link className={styles.link} href="/the-award">
          REGISTRATION
        </Link>
        <Link className={styles.link} href="/the-award">
          GET INVOLVED
        </Link>
        <Link className={styles.link} href="/the-award">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
