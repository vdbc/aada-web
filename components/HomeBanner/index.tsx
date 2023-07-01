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
      <h2>THE 2023 AADA</h2>
      <h2>WINNERS’ NIGHT</h2>
      <div style={{ height: 60 }} />
      <div>
      Step into the world of architectural excellence at the highly anticipated <b>Winners’ Night of 2023 Asia Architecture Design Awards</b>, an extraordinary red carpet event set to dazzle at the iconic <b>Marina Bay Sands</b> in Singapore.
      </div>
      <div style={{ height: 20 }} />
      <div>
      Join investors, architects, and enthusiasts for an ceremony of insightful presentations, networking, and celebration!

      </div>
      
      <div style={{ height: 60 }} />
      <div className={styles.wrapperLink}>
        <_ButtonLink href={"/winners-night"}>REGISTER NOW</_ButtonLink>
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
