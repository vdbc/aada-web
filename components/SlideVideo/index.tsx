import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../store";
import { selectVideoIds } from "../../store/modules/video";
import { ButtonExplore } from "../ButtonExplore";
import VideoCard from "../VideoCard";
import styles from "./styles.module.scss";

export default function _View() {
  const [swiper, setSwiper] = useState<any>(null);
  const videoIds = useAppSelector(selectVideoIds);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>VIDEO</h2>
      <div className={styles.slideContainer}>
        <div
          className={styles.buttonContainer}
          onClick={() => swiper?.slidePrev()}
        >
          <MdArrowBack />
        </div>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={0}
          slidesPerView={1}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.sliders}
        >
          {videoIds.map((id) => (
            <SwiperSlide key={id}>
              <div className={styles.slideItemContainer}>
                <VideoCard id={id} className={styles.cardItem} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={styles.buttonContainer}
          onClick={() => swiper?.slideNext()}
        >
          <MdArrowForward />
        </div>
      </div>
      <div className={styles.actions}>
        <ButtonExplore href="/media-center/video-center">
          EXPLORE ALL
        </ButtonExplore>
      </div>
    </div>
  );
}
