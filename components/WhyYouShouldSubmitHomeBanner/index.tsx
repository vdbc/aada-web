import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import styles from "./styles.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

function TableCell({ children }: { children: any }) {
  return (
    <div className={styles.tableCell}>
      <Image src="/logo-bg2.svg" alt="Square" width={250} height={100} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const cells = [
  <TableCell key={1}>
    <h2>MEDIA APPROACH</h2>
    <p>
      Upon securing victory in the 2024 Asia Architecture Design Awards, your achievement will be magnified through inclusion in our international media roster, featuring an array of press releases, exclusive interviews, and captivating spotlight videos that span the entirety of the competition.
    </p>
  </TableCell>,
  <TableCell key={2}>
    <h2>MARKETING OPPORTUNITIES</h2>
    <p>
      Experience tailored pre and post-event marketing campaigns highlighting Sponsors across diverse platforms, including newswires and websites. As part of the 2024 Asia Architecture Design Awards, enjoy exclusive branding opportunities such as logo placement on AADA POSM and a dedicated showcase at the Winners’ Night.
    </p>
  </TableCell>,
  <TableCell key={3}>
    <h2>GLOBAL PROMOTION</h2>
    <p>
      Amplify brand visibility across an extended media network that spans beyond Asia, connecting with diverse audiences in the field, while also showcasing the brand’s industry leadership and unwavering support within the architecture and design sector.
    </p>
  </TableCell>,

  <TableCell key={4}>
    <h2>INCREASED CREDIBILITY</h2>
    <p>
      Discover personalized sponsorship avenues that empower businesses to elevate their brand, establishing robust connections with design enthusiasts and cultivating a prominent industry presence.
    </p>
  </TableCell>,
  <TableCell key={5}>
    <h2>RECOGNITION</h2>
    <p>
      Cultivating acknowledgment within and outside the industry by garnering credibility from influential figures spanning industry professionals, journalists, scholars, and entrepreneurs. This is achieved through a comprehensive standardized scoring system meticulously applied to each criterion.
    </p>
  </TableCell>,
  <TableCell key={6}>
    <h2>NETWORKING</h2>
    <p>
      Forge meaningful connections with industry stalwarts and experts, all while paving the way for novel business prospects during the prestigious 2024 Winners’ Night. This exclusive event offers a unique platform to interact, exchange insights, and foster collaborations that resonate within the architecture and design sphere.
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
      </table>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <h1>WHY YOU SHOULD SUBMIT</h1>
      <div className={styles.subTitle}>
        Securing victory at the 2024 Asia Architecture Design Awards stands as a distinguished honor, bestowing<br /> an elevated international branding identity and amplifying your global recognition.
      </div>
      <div className={styles.table}>
        <ContentTable />
      </div>
    </div>
  );
}
