import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ButtonExplore } from "../../../components/ButtonExplore";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import { GalleryTopBanner } from "../../../components/TopBanner";
import AlbumBanner from "../../../components/AlbumBanner";
import { wrapper } from "../../../store";
import { getAllGallery } from "../../../store/modules/gallery";


export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <h3>Media Center/ <b>Gallery</b></h3>
        <AlbumBanner />



        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(getAllGallery()),
    ]);
    return {
      props: {},
    };
  }
);