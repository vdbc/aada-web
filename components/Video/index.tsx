
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Button } from "@mui/material";
import { ButtonExplore } from "../ButtonExplore";
import { useAppSelector } from "../../store";

import styles from "./styles.module.scss";

import { isEmpty } from "lodash";
import { selectGalleryDetail } from "../../store/modules/gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectVideoDetail } from "../../store/modules/video";
SwiperCore.use([Navigation, Pagination]);

const fileServices = [
  "https://files-uat.aadawards.com",
  "https://files.aadawards.com",
];


declare type AlbumCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: AlbumCardProps) {
  const [swiper, setSwiper] = useState<any>(null);
  const videos = useAppSelector(selectVideoDetail(id)) ?? {};
  const { title, thumbnail } = videos;
  // console.log("videos", videos);
  if (isEmpty(videos))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );

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

          <SwiperSlide>
            <div className={styles.videoWrapper}>
              <iframe
                title={title}
                src={thumbnail}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>

        </Swiper>
        <div className={styles.buttonContainerRight}>
          <MdArrowForward size={20} onClick={() => swiper?.slideNext()} />
        </div>

      </div>

    </div>
  );
}
