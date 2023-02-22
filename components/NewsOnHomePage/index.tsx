import Link from "next/link";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "../../hooks/responsive";
import { useAppSelector } from "../../store";
import { selectHighlightNewsIds } from "../../store/modules/news";
import NewsCard from "../NewsCard";
import styles from "./styles.module.scss";

export default function _View() {
  const newsIds = useAppSelector(selectHighlightNewsIds);

  const isSmallScreen = useMediaQuery("(max-width: 800px)");
  const newsSwiper = (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.2}
      modules={[Grid, Pagination]}
      className={styles.sliders}
      breakpoints={{
        400: {
          slidesPerView: 1.4,
        },
        600: {
          slidesPerView: 2.2,
        },
        700: {
          slidesPerView: 2.4,
        },
      }}
    >
      {newsIds.map((newsId) => (
        <SwiperSlide key={newsId}>
          <NewsCard id={newsId} className={styles.newsCard} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className={styles.container}>
      <h1>LATEST NEWS</h1>
      {isSmallScreen ? (
        newsSwiper
      ) : (
        <>
          <div className={styles.row}>
            <NewsCard id={newsIds[0]} className={styles.item} />
            <NewsCard id={newsIds[1]} className={styles.item2} />
            <NewsCard id={newsIds[2]} className={styles.item} />
          </div>
          {newsIds.length > 3 && (
            <div className={styles.row}>
              <NewsCard id={newsIds[3]} className={styles.item2} />
              <NewsCard id={newsIds[4]} className={styles.item2} />
            </div>
          )}
        </>
      )}

      <Link href="/news" className={styles.button}>
        See More
      </Link>
    </div>
  );
}
