
import Head from "next/head";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";

import styles from "./styles.module.scss";
import SlideVideo from "../../../components/SlideVideo";
import CardVideo from "../../../components/CardVideo";
import { selectVideoDetail } from "../../../store/modules/video";
import { useAppSelector } from "../../../store";


export default function _View({ id }: { id: number }) {
  const video = useAppSelector(selectVideoDetail(id));
  return (
    <div className={styles.container}>
      <Head>
        <title>Video</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <CardVideo id={id} />
        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
