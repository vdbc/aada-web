import Head from "next/head";
import Footer from "../../components/Footer";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import SlideGuidebook from "../../components/SlideGuidebook";
import { GalleryTopBanner } from "../../components/TopBanner";
import { wrapper } from "../../store";
import { getAllGallery } from "../../store/modules/gallery";
import { getAllGuidebook } from "../../store/modules/guidebook";
import { getAllVideo } from "../../store/modules/video";
import MenuAlbum from "./MenuAlbum";

import SlideVideo from "../../components/SlideVideo";
import styles from "./styles.module.scss";

const spacer = <div style={{ height: 95 }} />;

export default function _View({ id }: { id: number }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PDF Assets</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <div className={styles.content}>
          <h2>GALLERY</h2>
          <MenuAlbum />
          {spacer}
          <SlideVideo />
          {spacer}
          <SlideGuidebook />
        </div>
        <AdvisorsFooterBanner />
        <Footer />
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(getAllGallery()),
      store.dispatch(getAllVideo()),
      store.dispatch(getAllGuidebook()),
    ]);
    return {
      props: {},
    };
  }
);
