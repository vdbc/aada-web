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

declare type SliderItemProps = {
  title: any;
  description: any;
};

function SliderItem({ title, description }: SliderItemProps) {
  return (
    <div className={styles.sliderItemContainer}>
      <div className={styles.sliderLogo}>
        <Image src="/home/slide_inactive_logo_new.svg" alt="Logo" fill />
      </div>
      <h2>{title}</h2>
      <div>{description}</div>
    </div>
  );
}

declare type Item = {
  title: string;
  description: string;
};
declare type SliderProps = {
  items: Item[];
};

function getSlideItems(children: any[], index: number): Item[] {
  const length = children.length;
  if (length < 3) return children;
  const i = index % length;
  if (i == 0) return [children[length - 1], children[0], children[1]];
  if (i == length - 1) return [children[i - 1], children[i], children[0]];
  return [children[i - 1], children[i], children[i + 1]];
}

const sliderItems: Item[] = [
  {
    title: "2024 BEST FURNITURE DESIGN",
    description:
      "Celebrating the visionary creativity and exceptional achievements of interior designers, the finest interior design transcends mere components to infuse spaces with distinct personalities that resonate and inspire our way of life.",
  },
  {
    title: "2024 BEST ARCHITECTURE DESIGN",
    description:
      "Rewarding architects who blend design brilliance and innovation with tangible social impact, applauding hospitality, commercial and residential projects that redefine sustainability and break new ground in construction.",
  },
  {
    title: "2024 best interior design",
    description:
      "Celebrating the visionary creativity and exceptional achievements of interior designers, the finest interior design transcends mere components to infuse spaces with distinct personalities that resonate and inspire our way of life.",
  },
  {
    title: "2024 Best FURNITURE DESIGN",
    description:
      "A testament to excellence and a celebration of precision in Furniture Design, where the apex of craftsmanship seamlessly intertwines artistic expression with practical utility, creating not just objects, but cherished extensions of our individuality and daily existence.",
  },
  {
    title: "2024 Best Firms inArchitecture Design",
    description:
      "Celebrating top-tier architectural and landscaping firms, these awards underscore architecture's transformative role in daily life, with the Best Firms in Architecture award epitomizing exceptional accomplishment.",
  },
  {
    title: "2024 Best Firms inInteriorDesign",
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
        slidesPerView={1.2}
        centeredSlides
        effect={"coverflow"}
        grabCursor
        loop
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1,
          scale: 0.8,
          slideShadows: false,
        }}
        pagination={{
          bulletActiveClass: styles.activeDot,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onActiveIndexChange={(swiper) => setPage(swiper.activeIndex)}
        initialSlide={page}
        className={styles.sliders}
        breakpoints={{
          500: {
            slidesPerView: 1.5,
          },
          600: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 2.6,
          },
        }}
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
      <h1>AWARD CATEGORIES</h1>
      <div className={styles.subTitle}>
        Discover excellence across 30 distinctive categories in the 2024 Asia
        Architecture Design Awards (AADA), each category represents a testament
        to innovative design and visionary concepts.
      </div>
      <div className={styles.subTitle}>
        AADA’s recognition spans a dynamic range, highlighting exceptional
        achievements that shape the architectural and design tapestry of
        Emerging Asia.
      </div>
      <div className={styles.spacer} />
      <div className={styles.awardCategories}>
        <Slider items={sliderItems} />
      </div>
      <div className={styles.spacer} />
      <ButtonLink href="/categories">EXPLORE ALL AWARDS CATEGORIES</ButtonLink>
    </div>
  );
}
