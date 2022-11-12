/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1>Not Found</h1>
      </main>

      <footer className={styles.footer}>
        <img className={styles.footerImg} alt="Footer" src="/home/footer.svg" />
      </footer>
    </div>
  );
}
