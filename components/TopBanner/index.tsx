import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdExpandMore } from "react-icons/md";
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

export function RegistrationTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.jpg">
      <h1>Registration</h1>
      <div className={styles.subTitle}>
        This part provides the step-by-step registration process for 2023 Asia
        Architecture Design Awards. By carefully preparing all documents needed,
        you can easily finish your submission within 5 minutes.
      </div>
      {/* <_ButtonLink href="/categories">EXPLORE 2023 AADA CATEGORIES</_ButtonLink> */}
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function TheAwardTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.jpg">
      <h1>The awards</h1>
      <div className={styles.subTitle}>
        AADA seeks to promote an Impactful Asia in architecture design and
        construction industry that influences not just within Asian countries
        but also at a global arena.
      </div>
      <_ButtonLink href="/categories">EXPLORE 2023 AADA CATEGORIES</_ButtonLink>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function GetInvolvedTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.jpg">
      <h1>Get Involved</h1>
      <div className={styles.subTitle}>
        Winning the 2023 ASIA ARCHITECTURE DESIGN AWARDS is a prestigious
        accolade, giving businesses a springboard on an international level and
        augmenting their global profile.
      </div>
      <_ButtonLink href="/categories">EXPLORE 2023 AADA</_ButtonLink>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function CategoriesTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.jpg">
      <h1>Categories</h1>
      <div className={styles.subTitle}>
        The Asia Architecture Design Awards (AADA) is born with a desire to
        honor excellences and creativities in a varied range of Architecture &
        Design works, from regional to international scale.
      </div>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function FAQsTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.jpg">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

declare type TopBannerProps = {
  bgUrl: string;
  children: any;
};

export default function _View({ bgUrl, children }: TopBannerProps) {
  return (
    <div className={styles.topBanner}>
      <div className={styles.background}>
        <div>
          <Image src={bgUrl} alt="Background" fill />
        </div>
      </div>
      <Image src="/2023_logo.svg" alt="Logo" width={613} height={115} />
      {children}
    </div>
  );
}
