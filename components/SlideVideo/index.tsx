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

const defaultVideos = [
  { id: "linlz7-Pnvw" },
  { id: "RSF8KL3xaIk" },
  { id: "KOc146R8sws" },
];

export default function _View({ }) {
  const [swiper, setSwiper] = useState<any>(null);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonContainerLeft}>
          <MdArrowBack size={20} onClick={() => swiper?.slidePrev()} />
        </div>
        <Swiper
          onSwiper={setSwiper}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.mySwiper}
        >
          {defaultVideos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className={styles.videoWrapper}>
                <iframe
                  title={`YouTube Video ${index}`}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonContainerRight}>
          <MdArrowForward size={20} onClick={() => swiper?.slideNext()} />
        </div>

      </div>
      <ButtonExplore href="/media-center/Video" >EXPLORE ALL </ButtonExplore>
    </div>
  );
}