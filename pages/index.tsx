/* eslint-disable @next/next/no-img-element */
import AwardCategoriesHomeBanner from "../components/AwardCategoriesHomeBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  GetInvolvedHomeBanner,
  TheAwardHomeBanner,
} from "../components/HomeBanner";
import NewsOnHomePage from "../components/NewsOnHomePage";
import { HomePageTopBanner } from "../components/TopBanner";
import WhyYouShouldSubmitHomeBanner from "../components/WhyYouShouldSubmitHomeBanner";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <HomePageTopBanner />
        <img
          className={styles.overview}
          alt="Overview"
          src="/home/overview.svg"
        />

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
          src="/home/aada_partners.svg"
        />
        <NewsOnHomePage />
      </main>

      <Footer />
    </div>
  );
}
