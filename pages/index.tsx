/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import AwardCategoriesHomeBanner from "../components/AwardCategoriesHomeBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomepageOverview from "../components/home-page/HomepageOverview";
import {
  GetInvolvedHomeBanner,
  TheAwardHomeBanner,
} from "../components/HomeBanner";
import NewsOnHomePage from "../components/NewsOnHomePage";
import { HomePageTopBanner } from "../components/TopBanner";
import WhyYouShouldSubmitHomeBanner from "../components/WhyYouShouldSubmitHomeBanner";
import { wrapper } from "../store";
import { getAllHighlightNews } from "../store/modules/news";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <HomePageTopBanner />
        <HomepageOverview />
        <TheAwardHomeBanner />
        <AwardCategoriesHomeBanner />
        <img
          className={styles.timeline}
          alt="Timeline"
          src="/home/timeline.svg"
        />
        <GetInvolvedHomeBanner />

        <WhyYouShouldSubmitHomeBanner />
        <img
          className={styles.aada_partnersMb}
          alt="AADA Partners"
          src="/home/officialpartnersMb.svg"
        />
        <h1 className={styles.title}>OFFICIAL PARTNERS</h1>
        <img
          className={styles.aada_sponsorMb}
          alt="AADA Partners"
          src="/home/textSponsor.svg"
        />

        <h3 className={styles.text}>SPONSOR</h3>
        <div className={styles.allLogoSponsor}>
          <Link href="https://rsp.sg/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/italianflout.svg"
            />
          </Link>
          <Link href="https://italianatelier.it/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/vdbc.svg"
            />
          </Link>
          <Link href="http://www.chiuteng.com.sg/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/xt.svg"
            />
          </Link>
          <Link href="https://www.padartisan.com/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/art.svg"
            />
          </Link>
          <Link href="https://kingsmen.com.vn/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/forests.svg"
            />
          </Link>
          <Link href="https://www.mulpha.com.au/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/vacon.svg"
            />
          </Link>

          <img
            className={styles.aada_partnerMb}
            alt="AADA Partners"
            src="/home/officialpartner.svg"
          />
        </div>
        <h3 className={styles.text}>OFFICIAL PARTNERS</h3>
        <div className={styles.allLogoPartners}>
          <div className={styles.logoUp}>
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/logorsp.svg"
            />


            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/italiana.svg"
            />


            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/chiutengg.svg"
            />


            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/spaceArtisan.svg"
            />

            <Link href="https://acg-media.com/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/kingmen.svg"
              />
            </Link>
            <Link href="https://www.designspeak.asia/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/mulphaa.svg"
              />
            </Link>
            <Link href="https://acg-media.com/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/create.svg"
              />
            </Link>
            <Link href="https://www.designspeak.asia/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/saladd.svg"
              />
            </Link>
          </div>
          <div className={styles.partnerLogo}>
            <Link href="https://rsp.sg/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/amazing.svg"
              />
            </Link>
            <Link href="https://italianatelier.it/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/designer.svg"
              />
            </Link>
            <Link href="http://www.chiuteng.com.sg/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/metropolitan.svg"
              />
            </Link>
            <Link href="https://www.padartisan.com/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/commercial.svg"
              />
            </Link>
            <Link href="https://kingsmen.com.vn/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/acg.svg"
              />
            </Link>
            <Link href="https://www.mulpha.com.au/">
              <img
                className={styles.aada_vdbc}
                alt="AADA Partners"
                src="/logo_home/speak.svg"
              />
            </Link>
          </div>
        </div>


        <NewsOnHomePage />
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getAllHighlightNews());

    return {
      props: {},
    };
  }
);
