/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <h1>Not Found</h1>
      </main>
      <Footer />
    </div>
  );
}
