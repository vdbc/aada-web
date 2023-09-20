import SwiperCore, { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAppSelector } from "../../store";
import { ButtonExplore } from "../ButtonExplore";
import styles from "./styles.module.scss";

import { isEmpty } from "lodash";
import { selectGalleryDetail } from "../../store/modules/gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectVideoDetail, selectVideoIds } from "../../store/modules/video";
import { useState, useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
SwiperCore.use([Navigation, Pagination]);

declare type SliderItemProps = {
  id: number;
  className?: string;
};

function SliderItem({ id, className }: SliderItemProps) {
  const videos = useAppSelector(selectVideoDetail(id)) ?? {};
  const { title, url } = videos;

  if (isEmpty(videos))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );
  const youtubeVideoId = extractYoutubeVideoId(url);

  function extractYoutubeVideoId(url: string) {
    const videoIdRegex =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
    const match = url.match(videoIdRegex);
    return match && match[1];
  }
  return (
    <div className={styles.videoWrapper}>
      {youtubeVideoId && (
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}




declare type AlbumCardProps = {
  id: number;
  className?: string;
};

export default function _View() {
  const [swiper, setSwiper] = useState<any>(null);
  const [page, setPage] = useState(1);

  const videoIds = useAppSelector(selectVideoIds);
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttonContainer}>
          <MdArrowBack size={40} onClick={() => swiper?.slidePrev()} />
        </div>
        <div>
          <Swiper
            onSwiper={setSwiper}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={styles.mySwiper}
          >
            {videoIds.map((videoId) => (
              <SwiperSlide key={videoId} className={videoId === page ? styles.activeSlide : undefined}>
                <SliderItem id={videoId} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.buttonContainer}>
          <MdArrowForward size={40} onClick={() => swiper?.slideNext()} />
        </div>
      </div>
      <div className={styles.actions}>
        <ButtonExplore href="/media-center/Video">EXPLORE ALL </ButtonExplore>
      </div>
    </div>
  );
}
