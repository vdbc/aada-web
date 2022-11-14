/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Award</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <img
          className={styles.theAward}
          alt="Content"
          src="/the_award/the_award.svg"
        />
        <img
          className={styles.why}
          alt="Why you should submit"
          src="why_you_should_submit.svg"
        />
      </main>
      <Footer />
    </div>
  );
}
