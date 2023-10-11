/* eslint-disable @next/next/no-img-element */
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
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <h1>Hello</h1>
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
          className={styles.aada_partners}
          alt="AADA Partners"
          src="/home/sponsor.svg"
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
