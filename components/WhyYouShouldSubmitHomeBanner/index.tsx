import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import styles from "./styles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

function TableCell({ children }: { children: any }) {
  return (
    <div className={styles.tableCell}>
      <Image src="/logo-bg.svg" alt="Square" width={77} height={100} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const cells = [
  <TableCell key={1}>
    <h2>DIRECT MEDIA APPROACH</h2>
    <p>
      Get published to AADA international media list upon winning 2023 AADA by a
      bundle of press releases, interviews and spotlight videos throughout the
      competition.
    </p>
  </TableCell>,
  <TableCell key={2}>
    <h2>EXCELLENT MARKETING OPPORTUNITIES</h2>
    <p>
      Customized pre and post-event marketing campaigns mentioning Sponsors
      across various platforms, mainly newswires and website promotion. AADA
      provides core collateral of 2023 AADA that contains both physical and
      digital assets for marketing purposes: Brand’s logo placement on all AADA
      POSM throughout the competition, exclusive exhibition in Winners Gala
      Night…
    </p>
  </TableCell>,
  <TableCell key={3}>
    <h2>GLOBAL PROMOTION</h2>
    <p>
      Generate brand exposure to an expanded media list across and beyond Asia
      and reach numerous audiences in the field yet demonstrate the brand’s
      leadership and support within the architecture and design industry.
    </p>
  </TableCell>,
  <TableCell key={4}>
    <h2>RECOGNITION</h2>
    <p>
      Fostering recognition within and beyond the industry, by earning
      credibility from industry leaders (from industry professionals,
      journalists, scholars, and entrepreneurs) based on a standardized scoring
      system for each and every criterion.
    </p>
  </TableCell>,
  <TableCell key={5}>
    <h2>INCREASED CREDIBILITY</h2>
    <p>
      Tailor-fit sponsorship opportunities are available for businesses to
      enhance their brand position and strengthen the bond between businesses
      and design enthusiasts.
    </p>
  </TableCell>,
  <TableCell key={6}>
    <h2>NETWORKING</h2>
    <p>
      Connect with industry key players and experts whist forging new business
      opportunities during the 2023 AADA Winners’ Gala Night at Fairmont
      Singapore.
    </p>
  </TableCell>,
];

const divider = <div className={styles.divider}></div>;

function ContentTable() {
  const [page, setPage] = useState(0);
  return (
    <div className={styles.discoverTheWorth}>
      <div className={styles.swipeTable}>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          onActiveIndexChange={(swiper) => setPage(swiper.activeIndex)}
          initialSlide={page}
        >
          <SwiperSlide>
            {cells[0]}
            {divider}
            {cells[1]}
          </SwiperSlide>
          <SwiperSlide>
            {cells[2]}
            {divider}
            {cells[3]}
          </SwiperSlide>
          <SwiperSlide>
            {cells[4]}
            {divider}
            {cells[5]}
          </SwiperSlide>
        </Swiper>
        <div className={styles.dots}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={[
                styles.dot,
                index == page ? styles.active : styles.inactive,
              ].join(" ")}
            />
          ))}
        </div>
      </div>
      <table className={styles.fullTable}>
        <tbody>
          <tr>
            <td>{cells[0]}</td>
            <td>{cells[1]}</td>
            <td>{cells[2]}</td>
          </tr>
          <tr>
            <td>{cells[3]}</td>
            <td>{cells[4]}</td>
            <td>{cells[5]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <h1>WHY YOU SHOULD SUBMIT</h1>
      <div className={styles.subTitle}>
        Winning the 2023 ASIA ARCHITECTURE DESIGN AWARDS is a prestigious
        accolade, giving you an enhanced branding identity on an international
        level and augmenting your global profile.
      </div>
      <div className={styles.table}>
        <ContentTable />
      </div>
    </div>
  );
}
