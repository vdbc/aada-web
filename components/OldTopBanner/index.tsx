import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

declare type TopBannerProps = {
  backgroundUrl: string;
  children: any;
};

function _Header() {
  return (
    <div className={styles.headerContainer}>
      <Image src="/favicon.svg" alt="Logo" width={38} height={49} />
      <div>THE AWARD</div>
    </div>
  );
}

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

export function DefaultTopBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <video src="/the_award.mp4" autoPlay muted loop />
      </div>
    </div>
  );
}

export default function _View({ backgroundUrl, children }: TopBannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <video src={backgroundUrl} autoPlay muted loop />
      </div>
    </div>
  );
}
