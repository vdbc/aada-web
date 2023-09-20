import { isEmpty } from "lodash";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../store";
import {
  selectGuidebookDetail,
  selectGuidebookIds,
} from "../../store/modules/guidebook";
import { ButtonExplore } from "../ButtonExplore";
import VdbcImage from "../VdbcImage";
import styles from "./styles.module.scss";

declare type SliderItemProps = {
  id: number;
  className?: string;
};

function SliderItem({ id, className }: SliderItemProps) {
  const guidebook = useAppSelector(selectGuidebookDetail(id)) ?? {};

  const { title, thumbnail } = guidebook;

  if (isEmpty(guidebook))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );
  return (
    <div>
      <div className={styles.sliderLogo}>
        <VdbcImage src={thumbnail} alt="Logo" fill />
      </div>
      <div className={styles.title}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default function _View() {
  const [page, setPage] = useState(1);
  const [swiper, setSwiper] = useState<any>(null);
  const guidebookIds = useAppSelector(selectGuidebookIds);
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <MdArrowBack size={40} onClick={() => swiper?.slidePrev()} />
        </div>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={0}
          slidesPerView={3}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.sliders}
        >
          {guidebookIds.map((guidebookId) => (
            <SwiperSlide
              key={guidebookId}
              className={guidebookId == page ? styles.activeSlide : undefined}
            >
              <SliderItem id={guidebookId} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonContainer}>
          <MdArrowForward size={40} onClick={() => swiper?.slideNext()} />
        </div>
      </main>
      <div className={styles.actions}>
        <ButtonExplore href="/media-center/pdf">EXPLORE ALL</ButtonExplore>
      </div>
    </div>
  );
}
