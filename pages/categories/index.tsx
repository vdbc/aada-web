/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <img
          className={styles.imageContent}
          alt="Content"
          src="/categories/content.svg"
        />
        <img
          className={styles.why}
          alt="Ready to submit your work?"
          src="ready_to_submit_your_work.svg"
        />
      </main>
      <Footer />
    </div>
  );
}
