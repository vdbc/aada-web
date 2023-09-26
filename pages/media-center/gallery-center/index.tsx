import Dialog from "@mui/material/Dialog";
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
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



SwiperCore.use([Navigation, Pagination]);

function ImageDetailPopup({
  albumId,
  images,
  index,
}: {
  images: Image[];
  index: number;
  albumId: number;
}) {
  const { title: albumTitle } = useAppSelector(selectAlbumDetail(albumId));
  const [activeIndex, setActiveIndex] = useState(index);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.imageDetailContainer}>

      <Swiper
        className={styles.customSwiper}
        navigation
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slideContent}>
              <div
                className={styles.image}
                onClick={() => {
                  if (i !== activeIndex) {
                    setActiveIndex(i);
                  }
                }}
              >
                <VdbcImage src={image.url} alt={image.title} fill />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className={styles.imageDesc}>
        {images[activeIndex].title || `${albumTitle} ${activeIndex + 1}`}
      </p>

    </div>
  );
}

function ImagesAlbum({
  images,
  albumId,
}: {
  images: Image[];
  albumId: number;
}) {
  const [isOpenDetail, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (isEmpty(images)) return null;

  const openImageDetail = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <div className={styles.images}>
      {images.map((image, index) =>
        _renderAlbumImage(image, index, () => openImageDetail(index))
      )}
      <div style={{ flex: flexs[images.length % flexs.length] }} />
      <div style={{ flex: flexs[(images.length + 1) % flexs.length] }} />
      <Dialog
        open={isOpenDetail}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          },
        }}
      >
        <ImageDetailPopup images={images} index={activeIndex} albumId={albumId} />
      </Dialog>
    </div>
  );
}


declare type AlbumDetailProps = {
  id: number;
  className?: string;
};

const flexs = [2, 1, 1, 1, 2, 1];

function _renderAlbumImage({ url, title }: Image, index: number, onClick: any) {
  return (
    <div
      className={styles.image}
      style={{ flex: flexs[index % flexs.length] }}
      onClick={onClick}
    >
      <VdbcImage src={url} alt={title} fill />
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
      <ImagesAlbum images={images.slice(0, maxOfImageDisplay)} albumId={id} />
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
