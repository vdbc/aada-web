import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { TheAwardFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { TheAwardTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

function BoxContent({ children }: { children: any }) {
  return (
    <div className={styles.oneImage}>
      <Image src="/square.svg" alt="Square" fill />
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
}

function TableCell({ children }: { children: any }) {
  return (
    <div className={styles.tableCell}>
      <Image src="/logo-bg.svg" alt="Square" width={77} height={100} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const cells = [
  <TableCell>
    <h2>DIRECT MEDIA APPROACH</h2>
    <p>
      Get published to AADA international media list upon winning 2023 AADA by a
      bundle of press releases, interviews and spotlight videos throughout the
      competition.
    </p>
  </TableCell>,
  <TableCell>
    <h2>EXCELLENT MARKETING OPPORTUNITIES</h2>
    <p>
      Customized pre and post-event marketing campaigns mentioning Sponsors
      across various platforms, mainly newswires and website promotion.
    </p>
    <p>
      AADA provides core collateral of 2023 AADA that contains both physical and
      digital assets for marketing purposes: Brand’s logo placement on all AADA
      POSM throughout the competition, exclusive exhibition in Winners’ Gala
      Night.
    </p>
  </TableCell>,
  <TableCell>
    <h2>GLOBAL PROMOTION</h2>
    <p>
      Generate brand exposure to an expanded media list across and beyond Asia
      and reach numerous audiences in the field yet demonstrate the brand’s
      leadership and support within the architecture and design industry.
    </p>
  </TableCell>,
  <TableCell>
    <h2>RECOGNITION</h2>
    <p>
      Fostering recognition within and beyond the industry, by earning
      credibility from industry leaders (from industry professionals,
      journalists, scholars, and entrepreneurs) based on a standardized scoring
      system for each and every criterion.
    </p>
  </TableCell>,
  <TableCell>
    <h2>INCREASED CREDIBILITY</h2>
    <p>
      Tailor-fit sponsorship opportunities are available for businesses to
      enhance their brand position and strengthen the bond between businesses
      and design enthusiasts.
    </p>
  </TableCell>,
  <TableCell>
    <h2>networking</h2>
    <p>
      Connect with industry key players and experts whist forging new business
      opportunities during the 2023 AADA Winners’ Gala night at Fairmont
      Singapore.
    </p>
  </TableCell>,
];

const divider = <div className={styles.divider} />;

function DiscoverTheWorthTable() {
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
        </tr>
        <tr>
          <td>{cells[2]}</td>
          <td>{cells[3]}</td>
        </tr>
        <tr>
          <td>{cells[4]}</td>
          <td>{cells[5]}</td>
        </tr>
      </table>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Award</title>
      </Head>

      <main className={styles.main}>
        <Header />

        <TheAwardTopBanner />
        <ContentCard title={"\\\nAsia\nArchitecture\nDesign\nAward"}>
          <h2>THE ORIGINS</h2>
          <br />
          <div>
            The Asia Architecture Design Awards (AADA) is born with a desire to
            honor excellences and creativities in a varied range of Architecture
            & Design works, from regional to international scale.
          </div>
          <div>
            The AADA is a juried competition that recognizes the best in the
            industry, celebrates creativities, inspirations and innovations in
            architecture, interior design, architectural product design and
            individual works.
          </div>

          <div className={styles.images}>
            <Swiper
              spaceBetween={5}
              slidesPerView={1.4}
              breakpoints={{
                500: {
                  slidesPerView: 2.4,
                },
                650: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 1.4,
                },
                900: {
                  slidesPerView: 2.4,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <BoxContent>6 DISCIPLINES</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>30 AWARDS CATEGORIES</BoxContent>
              </SwiperSlide>
              <SwiperSlide>
                <BoxContent>professional judges</BoxContent>
              </SwiperSlide>
            </Swiper>
          </div>

          <h2>VISION & MISSION</h2>
          <div>
            AADA aspires to curate and promote the efforts of accomplished
            designers and enterprises in emerging Asia architecture and design
            industry, providing an excellent platform to showcase their
            outstanding work internationally.
          </div>
          <div>
            We create global recognition for talented designers and enterprises
            through our prestigious awards and acknowledgement that builds a
            strong worldwide network of business opportunities.
          </div>
        </ContentCard>
        <ContentCard title={"\\\n2023 AADA\nImpactful Asia"}>
          <h2>FOR AN IMPACTFUL ASIA</h2>
          <br />
          <div>
            AADA seeks to promote an Impactful Asia in architecture design and
            construction industry that influences not just within Asian
            countries but also at a global arena.
          </div>
          <div>
            By the means of this 2023 AADA presentation, independent
            accomplishment to full-serviced firms’ masterwork that have
            impactfully contributed to the society will continue to develop
            greater networking platform and marketing prospect. It is an
            opportunity for businesses to garner prestigious accolades, hence a
            continual growth on an international level.
          </div>
          <div className={styles.video}>
            <video autoPlay muted loop>
              <source src="/the_award.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nThe Value"}>
          <h2>DISCOVER THE WORTH</h2>
          <br />
          <div>
            Winning the 2023 ASIA ARCHITECTURE DESIGN AWARDS is a prestigious
            accolade, giving you an enhanced branding identity on an
            international level and augmenting your global profile.
          </div>
          <DiscoverTheWorthTable />
        </ContentCard>
        <ContentCard title={"\\\n2023 AADA\nWinners’ Gala Night"}>
          <h2>A NIGHT TO REMEMBER</h2>
          <br />
          <div>
            The 2023 AADA Winners Gala Night celebrates the outstanding works of
            the 6-month competition, yet brings about the networking
            opportunities for participants. The red-carpet event is for high
            profile attendees that acquire the award, industry professionals,
            international media and industry KOLs, KOCs.
          </div>
          <div>
            AADA sets to hold the Winners’ Gala Night at Fairmont Singapore in
            an upscale, bustling area of the center Singapore.
          </div>
          <img
            src="/a_night_to_remember.svg"
            alt="Square"
            className={styles.singleImage}
          />
        </ContentCard>
        <ContentCard title={"\\\n2023 AADA\nin Numbers"}>
          <h2>6 DISCIPLINES</h2>
          <div></div>
          <div>
            Prevalent award categories such as Asia Best Architecture Design,
            Best Interior Design, Best Furniture Design, Best Hotel & Resort
            Design, Best Firms in Architecture Design and many others are ready
            to be bagged by individuals or organizations from the industry.
            <br />
            <br />
          </div>
          <h2>30 AWARD CATEGORIES</h2>
          <div>
            There are 30 categories open for registration from beginning of
            December 2022 and is targeted to close the participation entries by
            February 2023, varying in 6 disciplines within architecture design
            industry.
            <br />
            <br />
          </div>
          <h2>20 JUDGES</h2>
          <div>
            AADA ensures a transparency in the judging process to be carried out
            by selected panel of judges from various background of prominent
            figures in the region, including design professionals, distinguished
            experts in academic architectural institutions and renown social
            initiators
          </div>
        </ContentCard>
        <div style={{ height: 100 }} />
        <TheAwardFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
