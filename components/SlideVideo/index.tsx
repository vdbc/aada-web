import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


import styles from "./styles.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { useState } from "react";
import { Button } from "@mui/material";
import { ButtonExplore } from "../ButtonExplore";
import { useAppSelector } from "../../store";

import Video from "../Video";
import Head from "next/head";
import { GalleryModel } from "../../models/GalleryModel";
import { selectVideoIds } from "../../store/modules/video";


SwiperCore.use([Navigation, Pagination]);

const fileServices = [
  "https://files-uat.aadawards.com",
  "https://files.aadawards.com",
];

function getImageUrl(url: string): string {
  for (let index = 0; index < fileServices.length; index++) {
    const fileService = fileServices[index];
    if (url.startsWith(fileService)) return `${url}?format=webp&size=w1000`;
  }
  return url;
}


export default function Home() {
  const videoIds = useAppSelector(selectVideoIds);

  console.log(videoIds, "videosId");
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          {videoIds.map((videoId) => (
            <div key={videoId} className={styles.item}>
              <Video id={videoId} />
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <ButtonExplore href="/media-center/Video">EXPLORE ALL</ButtonExplore>
        </div>
      </main>
    </div>
  );
}