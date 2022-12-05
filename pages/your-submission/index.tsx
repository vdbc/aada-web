import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputOverview from "./InputOverview";
import InputProjectDetail from "./InputProjectDetail";
import SelectNominateEntry from "./SelectNominateEntry";
import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Status Overview</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <div style={{ height: 72 }} />
          <InputOverview />
          <div className={styles.detail}>
            <div className={styles.selectNominateEntry}>
              <SelectNominateEntry />
            </div>
            <div className={styles.inputDetail}>
              <InputProjectDetail />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
