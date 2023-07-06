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
        {/* <img
          className={styles.aada_partners}
          alt="AADA Partners"
          src="/home/logoPartner.svg"
        /> */}
        <img
          className={styles.aada_partnersMb}
          alt="AADA Partners"
          src="/home/logoPartnerMb.svg"
        />
        <h1 className={styles.title}>AADA PARTNERS</h1>
        <h3 className={styles.text}>DIAMOND SPONSOR</h3>
        <Link href="https://italianfitout.com/it">
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
        <img
          className={styles.aada}
          alt="AADA Partners"
          src="/logo_home/logoSilver.svg"
        />
        <h3 className={styles.text}>OFFICIAL PARTNERS</h3>
        <img
          className={styles.aada_partners}
          alt="AADA Partners"
          src="/logo_home/officialPartners.svg"
        />
        <h3 className={styles.text}>MEDIA PARTNERS</h3>
        <img
          className={styles.aada_media}
          alt="AADA Partners"
          src="/logo_home/mediaPartners.svg"
        />
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
