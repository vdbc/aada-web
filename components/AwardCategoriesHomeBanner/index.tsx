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
declare type SliderItemProps = {
  title: any;
  description: any;
};

function SliderItem({ title, description }: SliderItemProps) {
  return (
    <div className={styles.sliderItemContainer}>
      <div className={styles.sliderLogo}>
        <Image src="/home/slider_inactive_logo.svg" alt="Logo" fill />
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
    title: "2023 best architecture design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Interior Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Furniture Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Firms in Architecture Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Firms in Interior Design",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
  {
    title: "2023 Best Furniture Manufacturer/ Distributor",
    description:
      "Rewarding the work of professional architect that exemplifies design excellence and architectural innovation whilst delivering meaningful social impact.",
  },
];
function Slider({ items }: SliderProps) {
  const [page, setPage] = useState(1);

  return (
    <Swiper
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
        <SwiperSlide className={index == page ? styles.activeSlide : undefined}>
          <SliderItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <h1>AWARD CATEGORIES</h1>
      <div className={styles.subTitle}>
        The appreciation of Architecture & Design works, ranging from
        independent work to full-serviced firms that has substantial
        contribution to the society.
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
