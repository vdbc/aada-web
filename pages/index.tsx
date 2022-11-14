/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <img
          className={styles.overview}
          alt="Overview"
          src="/home/overview.svg"
        />

        <img className={styles.about} alt="About" src="/home/about.svg" />
        <img
          className={styles.awardCategories}
          alt="Award Categories"
          src="/home/award_categories.svg"
        />
        <img
          className={styles.timeline}
          alt="Timeline"
          src="/home/timeline.svg"
        />
        <img className={styles.purpose} alt="Purpose" src="/home/purpose.svg" />
        <img
          className={styles.why}
          alt="Why you should submit"
          src="/home/why.svg"
        />
        <img
          className={styles.aada_partners}
          alt="AADA Partners"
          src="/home/aada_partners.svg"
        />
        <img className={styles.news} alt="News" src="/home/news.svg" />
      </main>

      <Footer />
    </div>
  );
}
