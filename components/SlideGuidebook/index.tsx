import Image from "next/image";
import { useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonLink from "../ButtonLink";
import styles from "./styles.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { ButtonExplore } from "../ButtonExplore";
import { selectGuidebookDetail, selectGuidebookIds } from "../../store/modules/guidebook";
import { useAppSelector } from "../../store";
import { isEmpty } from "lodash";

declare type SliderItemProps = {
  id: number;
  className?: string;
};

function SliderItem({ id, className }: SliderItemProps) {
  const guidebook = useAppSelector(selectGuidebookDetail(id)) ?? {};
  const { title, thumbnail } = guidebook;
  console.log("guidebook", guidebook);
  if (isEmpty(guidebook))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );
  return (
    <div>
      <div className={styles.sliderItemContainer}>
        <div className={styles.sliderLogo}>
          <Image src="/home/slide_inactive_logo_new.svg" alt="Logo" fill />
        </div>

      </div>
      <p className={styles.title}>{title}</p>
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
          <MdArrowBack size={20} onClick={() => swiper?.slidePrev()} />
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
          <MdArrowForward size={20} onClick={() => swiper?.slideNext()} />
        </div>
      </main>
      <div className={styles.actions}>
        <ButtonExplore href="/media-center/PDFAssets">EXPLORE ALL</ButtonExplore>
      </div>

    </div>
  );
}


{/* <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.awardCategories}>
        <Slider items={sliderItems} />
      </div>
      <div className={styles.spacer} />
      <ButtonExplore href="/categories" >EXPLORE ALL </ButtonExplore>
    </div>
  ); */}