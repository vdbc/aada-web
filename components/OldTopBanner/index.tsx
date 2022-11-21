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
    <_View backgroundUrl="/bg_banner_default.jpg">
      <_Header />
      <div style={{ height: 24 }} />
      <h1>2023</h1>
      <h2>{"ASIA ARCHITECTURE\nDESIGN AWARDS"}</h2>
      <div style={{ height: 40 }} />
      <div>
        The Asia Architecture Design Awards (AADA) is born with a desire to
        honor excellences and creativities in a varied range of Architecture &
        Design works, from regional to international scale.
      </div>
      <div style={{ height: 40 }} />
      <div className={styles.wrapperLink}>
        <_ButtonLink href={"/the-award"}>EXPLORE 2023 AADA</_ButtonLink>
        <div className={styles.spacer} />
      </div>
      <div style={{ height: 40 }} />
      <h3>{"WINNERS’ GALA\nFAIRMONT SINGAPORE\nJUNE 2023"}</h3>
    </_View>
  );
}

export function TheAwardTopBanner() {
  return (
    <_View backgroundUrl="/bg_banner_the_award.jpg">
      <_Header />
      <div style={{ height: 24 }} />
      <h1>2023 AADA</h1>
      <h2>IMPACTFUL ASIA</h2>
      <div style={{ height: 40 }} />
      <div>
        AADA seeks to promote an Impactful Asia in architecture design and
        construction industry that influences not just within Asian countries
        but also at a global arena.
      </div>
      <div style={{ height: 40 }} />
      <div className={styles.wrapperLink}>
        <_ButtonLink href={"/categories "}>
          EXPLORE 2023 AADA CATEGORIES
        </_ButtonLink>
        <div className={styles.spacer} />
      </div>
      <div style={{ height: 40 }} />
      <h3>{"WINNERS GALA\nFAIRMONT SINGAPORE\nJUNE 2023"}</h3>
    </_View>
  );
}

export default function _View({ backgroundUrl, children }: TopBannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={backgroundUrl} alt="Background" fill />
      </div>
      <div className={styles.spacer} />
      <div className={styles.spacer}>
        <div className={styles.contentBox}>{children}</div>
        <div className={styles.spacer1} />
      </div>
    </div>
  );
}
