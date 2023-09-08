import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdExpandMore } from "react-icons/md";
import ButtonLink from "../ButtonLink";
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
    <_View bgUrl="/bg_the_award.webp">
      <h1>Registration</h1>
      <div className={styles.subTitle}>
        This part provides the step-by-step registration process for 2024 Asia
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
    <_View bgUrl="/bg_the_award.webp">
      <h1>The awards</h1>
      <div className={styles.subTitle}>
        AADA seeks to promote an Emerging Asia in architecture design and
        construction industry that influences not just within Asian countries
        but also at a global arena.
      </div>
      <ButtonLink href="/categories" className={styles.className}>
        EXPLORE 2024 AADA CATEGORIES
      </ButtonLink>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function GetInvolvedTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>Get Involved</h1>
      <div className={styles.subTitle}>
        Emerging as the winner of the 2024 ASIA ARCHITECTURE DESIGN AWARDS is a
        prestigious achievement that propels businesses onto the international
        stage, significantly enhancing their global presence and reputation.
      </div>
      <_ButtonLink href="/">EXPLORE 2024 AADA</_ButtonLink>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function AdvisorsTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>Board of Advisors</h1>
      <div className={styles.subTitle}>
        Board of Advisors are of prominent profiles who craft the organization’s
        direction to ensure our approaches are aligned with our purposes.
      </div>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}
export function GalleryTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>MEDIA CENTER</h1>
      <div className={styles.subTitle}>Media Center AADA</div>
    </_View>
  );
}

export function CategoriesTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>Categories</h1>
      <div className={styles.subTitle}>
        Step into a realm of exploration and excellence as we invite you to
        uncover the 30 captivating award categories of the 2024 AADA, a tribute
        to outstanding achievements in design and architecture.
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
    <_View bgUrl="/bg_the_award.webp">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function ScoringTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>Scoring Board</h1>
      <h3 className={styles.title}>
        Welcome Esteemed Judges to the prestigious <br /> 2024 Asia Architecture
        Design Awards (AADA)!
      </h3>
      <p className={styles.content}>
        It is with great honor that we welcome you to the Scoring Board where
        this system serves as your indispensable companion in the meticulous
        task of assigning scores to the exceptional nominees, allowing you to
        carefully evaluate and appreciate their architectural prowess, shaping
        the future of the industry and celebrating the pinnacle of design
        excellence in the dynamic world of architecture.
      </p>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function TermsTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>Terms And Conditions</h1>
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}

export function NewsTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>
        LATEST UPDATE
        <div className={styles.headerSmallText}>
          FROM ASIA ARCHITECTURE DESIGN AWARDS
        </div>
      </h1>
      <div style={{ height: 10 }} />
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}
export function WinnersNewsTopBanner() {
  return (
    <_View bgUrl="/bg_the_award.webp">
      <h1>
        <div className={styles.headerSmallText}>Congratulations to all the</div>
        Winners’
        <div className={styles.headerSmallText}>
          ASIA ARCHITECTURE DESIGN AWARDS
        </div>
      </h1>
      <div style={{ height: 10 }} />
      <div className={styles.scrollDown}>
        <MdExpandMore size={15} />
        <div>Scroll down to learn more</div>
      </div>
    </_View>
  );
}
export function HomePageTopBanner() {
  return (
    <div className={styles.homePageTopBanner}>
      <video
        src="https://files.aadawards.com/assets/56edaf59be1ed48d21838443ec4e3eeb.mp4"
        autoPlay
        muted
        loop
      />
    </div>
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
      <div className={styles.logo}>
        <Image src="/2024_logo.svg" alt="Logo" fill />
      </div>
      {children}
    </div>
  );
}
