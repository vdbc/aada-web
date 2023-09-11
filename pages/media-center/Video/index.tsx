
import Head from "next/head";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";

import styles from "./styles.module.scss";


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Video</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />




        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
