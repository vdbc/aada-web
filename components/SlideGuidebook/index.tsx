import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../store";
import { selectGuidebookIds } from "../../store/modules/guidebook";
import { ButtonExplore } from "../ButtonExplore";
import GuidebookCard from "../GuidebookCard";
import styles from "./styles.module.scss";

export default function _View() {
  const [swiper, setSwiper] = useState<any>(null);
  const guidebookIds = useAppSelector(selectGuidebookIds);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>PDF ASSETS</h2>
      <div className={styles.slideContainer}>
        <div
          className={styles.buttonContainer}
          onClick={() => swiper?.slidePrev()}
        >
          <MdArrowBack />
        </div>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={32}
          slidesPerView={1.2}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.sliders}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
            },
            400: {
              slidesPerView: 1.4,
            },
            500: {
              slidesPerView: 1.8,
            },
            600: {
              slidesPerView: 2.2,
            },
            700: {
              slidesPerView: 2.5,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {guidebookIds.map((guidebookId) => (
            <SwiperSlide key={guidebookId}>
              <div className={styles.slideItemContainer}>
                <GuidebookCard id={guidebookId} className={styles.cardItem} />
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
        <ButtonExplore href="/media-center/pdf">EXPLORE ALL</ButtonExplore>
      </div>
    </div>
  );
}
