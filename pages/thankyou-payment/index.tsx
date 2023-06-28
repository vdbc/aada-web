import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { GetInvolvedFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { GetInvolvedTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thank you payment</title>
      </Head>

      <main className={styles.main}>
        
        <img
          className={styles.aada_partners}
          alt="AADA Partners"
          src="/home/payment.svg"
        />
      </main>
      
    </div>
  );
}
