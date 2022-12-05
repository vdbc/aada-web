import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectProcessOverview from "./ProjectProcessOverview";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Status Overview</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <h2 className={styles.headerTitle}>BEST ARCHITECTURE DESIGN</h2>
          <ProjectProcessOverview />
          <ProjectProcessOverview />
        </div>
      </main>
      <Footer />
    </div>
  );
}
