import Head from "next/head";
import Link from "next/link";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import GuideBookCard from "../../../components/GuidebookCard";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";
import { useAppSelector, wrapper } from "../../../store";
import {
  getAllGuidebook,
  selectGuidebookIds,
} from "../../../store/modules/guidebook";
import styles from "./styles.module.scss";

export default function Home() {
  const pdfs = useAppSelector(selectGuidebookIds);

  return (
    <div className={styles.container}>
      <Head>
        <title>PDF Assets</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />

        <div className={styles.content}>
          <div className={styles.path}>
            <Link href="/media-center">Media Center </Link>
            <div className={styles.splash}>/</div>
            <Link href="/media-center/pdf" className={styles.active}>
              Pdf Assets
            </Link>
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>PDF Assets</h2>
            <p className={styles.description}>
              On the evening of August 14th, the Winners’ Night of the 2023 Asia
              Architecture Design Awards (AADA) stood in the spotlight at Marina
              Bay Sands - a pinnacle of architectural brilliance within
              Singapore, Asia’s vanguard metropolis.
            </p>
            <div className={styles.pdfs}>
              {pdfs.map((pdfId) => (
                <GuideBookCard key={pdfId} id={pdfId} />
              ))}
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
        {/* <div className={styles.actions}>
          <Button>Load more</Button>
        </div> */}

        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getAllGuidebook());

    return {
      props: {},
    };
  }
);
