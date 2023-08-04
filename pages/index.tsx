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
        <GetInvolvedHomeBanner />
        <img
          className={styles.timeline}
          alt="Timeline"
          src="/home/timeline.svg"
        />

        <AwardCategoriesHomeBanner />
        <WhyYouShouldSubmitHomeBanner />
        <img
          className={styles.aada_partnersMb}
          alt="AADA Partners"
          src="/home/logoPartnerMb.svg"
        />
        <h1 className={styles.title}>AADA PARTNERS</h1>
        <h3 className={styles.text}>DIAMOND SPONSOR</h3>
        <Link href="https://italianfitout.com/en ">
          <img
            className={styles.aada}
            alt="AADA Partners"
            src="/logo_home/logoIfo.svg"
          />
        </Link>
        <h3 className={styles.text}>GOLD SPONSOR</h3>
        <div>
          <Link href="https://vdbc.vn">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/logoVdbc.svg"
            />
          </Link>
          <Link href="https://xuanthaomyyen.com">
            <img
              className={styles.aada}
              alt="AADA Partners"
              src="/logo_home/logoXt.svg"
            />
          </Link>
        </div>
        <h3 className={styles.text}>SILVER SPONSOR</h3>
        <div>

          <img
            className={styles.aada_vdbc}
            alt="AADA Partners"
            src="/logo_home/artuae.svg"
          />
          <img
            className={styles.aada_vdbc}
            alt="AADA Partners"
            src="/logo_home/forest.svg"
          />

          <Link href="https://vacons.com.vn/">
            <img
              className={styles.aada}
              alt="AADA Partners"
              src="/logo_home/vacons.svg"
            />
          </Link>
        </div>
        <h3 className={styles.text}>OFFICIAL PARTNERS</h3>
        <div>
          <Link href="https://rsp.sg/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/rsp.svg"
            />
          </Link>
          <Link href="https://italianatelier.it/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/italian.svg"
            />
          </Link>
          <Link href="http://www.chiuteng.com.sg/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/chiuteng.svg"
            />
          </Link>
          <Link href="https://www.padartisan.com/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/space.svg"
            />
          </Link>
          <Link href="https://kingsmen.com.vn/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/kingsmen.svg"
            />
          </Link>
          <Link href="https://www.mulpha.com.au/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/mulpha.svg"
            />
          </Link>
          <Link href="https://www.cmd.sg/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/creativemind.svg"
            />
          </Link>
          <Link href="https://www.cmd.sg/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/salad.svg"
            />
          </Link>

        </div>
        <h3 className={styles.text}>MEDIA PARTNERS</h3>
        <div>

          <img
            className={styles.aada_vdbc}
            alt="AADA Partners"
            src="/logo_home/amazing.svg"
          />


          <img
            className={styles.aada_vdbc}
            alt="AADA Partners"
            src="/logo_home/designer.svg"
          />


          <img
            className={styles.aada_vdbc}
            alt="AADA Partners"
            src="/logo_home/metropolitan.svg"
          />


          <img
            className={styles.aada_vdbc}
            alt="AADA Partners"
            src="/logo_home/commercial.svg"
          />

          <Link href="https://acg-media.com/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/acg.svg"
            />
          </Link>
          <Link href="https://www.designspeak.asia/">
            <img
              className={styles.aada_vdbc}
              alt="AADA Partners"
              src="/logo_home/design.svg"
            />
          </Link>
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
