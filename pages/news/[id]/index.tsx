import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import NewsContent from "./NewsContent";
import NewsDetailHeader from "./NewsDetailHeader";
import RecommendationNews from "./RecommendationNews";
import ShareNews from "./ShareNews";
import styles from "./styles.module.scss";
import Tags from "./Tags";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <NewsDetailHeader />
        <div className={styles.body}>
          <ShareNews />
          <NewsContent />
          <Tags />
          <RecommendationNews />
        </div>
      </main>
      <Footer />
    </div>
  );
}
