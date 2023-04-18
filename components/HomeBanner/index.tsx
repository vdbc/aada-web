import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

declare type TopBannerProps = {
  backgroundUrl: string;
  children: any;
};

function _Header({ children }: any) {
  return (
    <div className={styles.headerContainer}>
      <Image src="/favicon.svg" alt="Logo" width={38} height={49} />
      <div>{children}</div>
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

export function TheAwardHomeBanner() {
  return (
    <div className={styles.theAwardHomeBannerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Logo"
            width={239}
            height={79}
          />
          <h2 className={styles.title}>2023 AADA Categories</h2>
          <div className={styles.description}>
            AADA aspires to curate and promote the efforts of talented designers
            and companies in emerging Asia architecture and design industry,
            provides an excellent platform to present their work on an
            international level.
          </div>
        </div>
      </div>
    </div>
  );
}

export function GetInvolvedHomeBanner() {
  return (
    <HomeBannerRightContent backgroundUrl="/home/backgroundRegister.jpg">
      <_Header>GET INVOLVED</_Header>
      <div style={{ height: 60 }} />
      <h2>ELEVATING</h2>
      <h2>VISIONARY</h2>
      <h2>ARCHITECTURE</h2>
      <div style={{ height: 60 }} />
      <div className={styles.titleRegister}>
        Elevate your understanding of visionary architecture’s role in driving
        real estate investment in Vietnam by joining the Asia Awards
        Organization for the <b>Elevating Visionary Architecture</b> event.
      </div>
      <div>
        Join investors, architects, and enthusiasts for an afternoon of
        insightful presentations, networking, and discussions!
      </div>
      <div style={{ height: 20 }} />
      <div className={styles.wrapperLink}>
        <_ButtonLink href={"/elevatingvisionaryarchitecture"}>
          REGISTER NOW
        </_ButtonLink>
        <div className={styles.spacer} />
      </div>
      <div style={{ height: 10 }} />
    </HomeBannerRightContent>
  );
}

export function HomeBannerLeftContent({
  backgroundUrl,
  children,
}: TopBannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={backgroundUrl} alt="Background" fill />
      </div>
      <div className={styles.spacer}>
        <div className={styles.spacer} />
        <div className={styles.contentBox}>{children}</div>
        <div className={styles.spacer} />
      </div>
      <div className={styles.spacer} />
    </div>
  );
}

export function HomeBannerRightContent({
  backgroundUrl,
  children,
}: TopBannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={backgroundUrl} alt="Background" fill />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.contentBox}>{children}</div>
      </div>
    </div>
  );
}

export default HomeBannerRightContent;
