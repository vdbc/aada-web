import { isEmpty } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";
import VdbcImage from "../../../components/VdbcImage";
import { Image } from "../../../models/GalleryModel";
import { useAppSelector, wrapper } from "../../../store";
import {
  getAllGallery,
  selectAlbumDetail,
  selectAlbumIds,
} from "../../../store/modules/gallery";
import styles from "./styles.module.scss";

declare type AlbumDetailProps = {
  id: number;
  className?: string;
};

const flexs = [2, 1, 1, 1, 2, 1];

function _renderAlbumImage({ url, title }: Image, index: number) {
  return (
    <div className={styles.image} style={{ flex: flexs[index % flexs.length] }}>
      <VdbcImage src={url} alt={title} fill />
    </div>
  );
}

function ImagesAlbum({ images }: { images: Image[] }) {
  if (isEmpty(images)) return null;

  return (
    <div className={styles.images}>
      {images.map(_renderAlbumImage)}
      <div style={{ flex: flexs[images.length % flexs.length] }} />
      <div style={{ flex: flexs[(images.length + 1) % flexs.length] }} />
    </div>
  );
}

function Album({ id }: AlbumDetailProps) {
  const { title, description, images } =
    useAppSelector(selectAlbumDetail(id)) || {};
  const [page, setPage] = useState(1);
  const total = images.length;
  const maxOfImageDisplay = page * 6;

  return (
    <div className={styles.albumContainer} id={`album_${id}`}>
      <div className={styles.albumHeader}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <ImagesAlbum images={images.slice(0, maxOfImageDisplay)} />
      {maxOfImageDisplay < total && (
        <button onClick={() => setPage(page + 1)}>Load More</button>
      )}
    </div>
  );
}

export default function Home() {
  const albumIds = useAppSelector(selectAlbumIds);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />

        <div className={styles.content}>
          <div className={styles.path}>
            <Link href="/media-center">Media Center </Link>
            <div className={styles.splash}>/</div>
            <Link href="/media-center/gallery-center" className={styles.active}>
              Gallery
            </Link>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.albums}>
              {albumIds.map((id) => (
                <Album key={id} id={id} />
              ))}
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
    await store.dispatch(getAllGallery());

    return {
      props: {},
    };
  }
);
