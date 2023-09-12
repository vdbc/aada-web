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

declare type SliderItemProps = {
  title: any;
  description: any;
  name: any;
};

function SliderItem({ title, description, name }: SliderItemProps) {
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

declare type Item = {
  title: string;
  description: string;
  name: string;
};
declare type SliderProps = {
  items: Item[];
};

const sliderItems: Item[] = [
  {
    title: "2023 Hall Of Fame Yearbook",
    name: "FURNITURE DESIGN",
    description:
      "Celebrating the visionary creativity and exceptional achievements of interior designers, the finest interior design transcends mere components to infuse spaces with distinct personalities that resonate and inspire our way of life.",
  },
  {
    title: "Start with why #01",
    name: "ARCHITECTURE DESIGN",
    description:
      "Rewarding architects who blend design brilliance and innovation with tangible social impact, applauding hospitality, commercial and residential projects that redefine sustainability and break new ground in construction.",
  },
  {
    title: "Start with why #01",
    name: "interior design",
    description:
      "Celebrating the visionary creativity and exceptional achievements of interior designers, the finest interior design transcends mere components to infuse spaces with distinct personalities that resonate and inspire our way of life.",
  },
  {
    title: "Start with why #01",
    name: "FURNITURE DESIGN",
    description:
      "A testament to excellence and a celebration of precision in Furniture Design, where the apex of craftsmanship seamlessly intertwines artistic expression with practical utility, creating not just objects, but cherished extensions of our individuality and daily existence.",
  },
  {
    title: "Start with why #01",
    name: "Firms inArchitecture Design",
    description:
      "Celebrating top-tier architectural and landscaping firms, these awards underscore architecture's transformative role in daily life, with the Best Firms in Architecture award epitomizing exceptional accomplishment.",
  },
  {
    title: "Start with why #01",
    name: "Firms inInteriorDesign",
    description:
      "An emblem of excellence for interior design firms that consistently deliver exceptional, inspiring projects setting industry benchmarks; the Best Firms in Interior Design award acknowledges their unwavering commitment to meticulous craftsmanship and innovation.",
  },
];

function Slider({ items }: SliderProps) {
  const [page, setPage] = useState(1);
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className={styles.wrapper}>
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
        {items.map((item, index) => (
          <SwiperSlide
            key={item.title}
            className={index == page ? styles.activeSlide : undefined}
          >
            <SliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttonContainer}>
        <MdArrowForward size={20} onClick={() => swiper?.slideNext()} />
      </div>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <div className={styles.awardCategories}>
        <Slider items={sliderItems} />
      </div>
      <div className={styles.spacer} />
      <ButtonExplore href="/categories" >EXPLORE ALL </ButtonExplore>
    </div>
  );
}
