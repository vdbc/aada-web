import Head from "next/head";
import Footer from "../../components/Footer";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import SlideGuidebook from "../../components/SlideGuidebook";
import { GalleryTopBanner } from "../../components/TopBanner";
import { useAppSelector, wrapper } from "../../store";
import {
  getAllGallery,
  selectAlbumDetail,
  selectAlbumIds,
} from "../../store/modules/gallery";
import { getAllGuidebook } from "../../store/modules/guidebook";
import { getAllVideo } from "../../store/modules/video";

import Link from "next/link";
import { ButtonExplore } from "../../components/ButtonExplore";
import SlideVideo from "../../components/SlideVideo";
import VdbcImage from "../../components/VdbcImage";
import styles from "./styles.module.scss";

const spacer = <div style={{ height: 95 }} />;

function _renderAlbumBanner(id: number) {
  const { thumbnail, title } = useAppSelector(selectAlbumDetail(id));

  return (
    <Link
      href={`/media-center/gallery-center#album_${id}`}
      className={styles.albumItem}
    >
      <VdbcImage src={thumbnail} alt={title} fill />
      <div className={styles.albumTitle}>{title}</div>
    </Link>
  );
}

function GalleryBanner() {
  const albumIds = useAppSelector(selectAlbumIds);

  return (
    <div className={styles.galleryBannerContainer}>
      <h2>Gallery</h2>
      <div className={styles.albums}>
        {albumIds.slice(0, 4).map(_renderAlbumBanner)}
      </div>
      <ButtonExplore href="/media-center/gallery-center">
        EXPLORE ALL
      </ButtonExplore>
    </div>
  );
}

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
          <GalleryBanner />
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
