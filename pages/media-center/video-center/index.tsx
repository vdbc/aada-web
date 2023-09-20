import Head from "next/head";
import Link from "next/link";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";
import VideoCard from "../../../components/VideoCard";
import { useAppSelector, wrapper } from "../../../store";
import { getAllVideo, selectVideoIds } from "../../../store/modules/video";
import styles from "./styles.module.scss";

export default function Home() {
  const videoIds = useAppSelector(selectVideoIds);

  return (
    <div className={styles.container}>
      <Head>
        <title>Video</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />

        <div className={styles.content}>
          <div className={styles.path}>
            <Link href="/media-center">Media Center </Link>
            <div className={styles.splash}>/</div>
            <Link href="/media-center/video-center" className={styles.active}>
              Video
            </Link>
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>2023 AADA Winners’ Night</h2>
            <p className={styles.description}>
              On the evening of August 14th, the Winners’ Night of the 2023 Asia
              Architecture Design Awards (AADA) stood in the spotlight at Marina
              Bay Sands – a pinnacle of architectural brilliance within
              Singapore, Asia’s vanguard metropolis.
            </p>
            <div className={styles.videos}>
              {videoIds.map((id) => (
                <VideoCard key={id} id={id} />
              ))}
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>

        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getAllVideo());

    return {
      props: {},
    };
  }
);
