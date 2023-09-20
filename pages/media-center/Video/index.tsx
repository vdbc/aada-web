
import Head from "next/head";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";

import styles from "./styles.module.scss";
import CardVideo from "../../../components/CardVideo";
import { getAllVideo, selectVideoDetail, selectVideoIds } from "../../../store/modules/video";
import { useAppSelector, wrapper } from "../../../store";


export default function _View() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Video</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <h3>Media Center/ <b>Video</b></h3>
        <CardVideo />
        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(getAllVideo()),
    ]);
    return {
      props: {},
    };
  }
);