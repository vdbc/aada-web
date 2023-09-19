
import Head from "next/head";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";

import styles from "./styles.module.scss";
import SlideVideo from "../../../components/SlideVideo";
import CardVideo from "../../../components/CardVideo";
import { selectVideoDetail, selectVideoIds } from "../../../store/modules/video";
import { useAppSelector } from "../../../store";


export default function _View({ id }: { id: number }) {
  const video = useAppSelector(selectVideoIds);
  return (
    <div className={styles.container}>
      <Head>
        <title>Video</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <div className={styles.wrapper}>
          {video.map((videoId) => (
            <div key={videoId} className={styles.box}>
              <CardVideo id={videoId} />
            </div>
          ))}
        </div>
        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
