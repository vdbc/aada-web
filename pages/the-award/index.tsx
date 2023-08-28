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
      <Image src="/square1.svg" alt="Square" fill />
      <div className={styles.badgeContent}>{children}</div>
    </div>
  );
}

function TableCell({ children }: { children: any }) {
  return (
    <div className={styles.tableCell}>
      <Image src="/logo-bg2.svg" alt="Square" width={300} height={100} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const cells = [
  <TableCell key={1}>
    <h2> MEDIA APPROACH</h2>
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
    <h2>RECOGNITION</h2>
    <p>
      Cultivating acknowledgment within and outside the industry by garnering credibility from influential figures spanning industry professionals, journalists, scholars, and entrepreneurs. This is achieved through a comprehensive standardized scoring system meticulously applied to each criterion.
    </p>
  </TableCell>,
  <TableCell key={5}>
    <h2>INCREASED CREDIBILITY</h2>
    <p>
      Discover personalized sponsorship avenues that empower businesses to elevate their brand, establishing robust connections with design enthusiasts and cultivating a prominent industry presence.
    </p>
  </TableCell>,
  <TableCell key={6}>
    <h2>networking</h2>
    <p>
      Forge meaningful connections with industry stalwarts and experts, all while paving the way for novel business prospects during the prestigious 2024 Winners’ Night. This exclusive event offers a unique platform to interact, exchange insights, and foster collaborations that resonate within the architecture and design sphere.
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
          <h2 className={styles.title}>THE ORIGINS</h2>
          <br />
          <div className={styles.content}>
            The Asia Architecture Design Awards (AADA) is born with a desire to
            honor excellences and creativities in a varied range of Architecture
            & Design works, from regional to international scale.
          </div>
          <div className={styles.content}>
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
                <BoxContent>professional jurors</BoxContent>
              </SwiperSlide>
            </Swiper>
          </div>

          <h2 className={styles.title}>VISION & MISSION</h2>
          <div className={styles.content}>
            AADA aspires to curate and promote the efforts of accomplished designers and enterprises in emerging Asia architecture and design industry, providing an excellent platform to showcase their outstanding work internationally.          </div>
          <div className={styles.content}>
            We create global recognition for talented designers and enterprises through our prestigious awards and acknowledgement that builds a strong worldwide network of business opportunities.          </div>
        </ContentCard>
        <ContentCard title={"\\\n2024 AADA\nEmerging Asia"}>
          <h2 className={styles.title}>TOWARD AN EMERGING ASIA</h2>
          <br />
          <div className={styles.content}>
            The stage is set for the grand spectacle of the 2024 Asia Architecture Design Awards, and this year’s theme is &#34;Emerging Asia&#34;. This compelling theme celebrates the outstanding ingenuity and imagination demonstrated by visionary architects and designers across the diverse continent of Asia.
          </div>
          <div className={styles.content}>
            Through the theme of &#34;Emerging Asia&#34; The 2024 Asia Architecture Design Awards are not only a tribute to the art of architecture but also a symbol of Asia’s rising influence in shaping the world’s built environment.

          </div >
          <video className={styles.video} autoPlay muted loop>
            <source src="/the_award.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ContentCard>
        <ContentCard title={"\\\nThe Value"}>
          <h2 className={styles.title}>DISCOVER THE WORTH</h2>
          <br />
          <div className={styles.content}>
            Securing victory at the 2024 Asia Architecture Design Awards stands as a distinguished honor, bestowing an elevated international branding identity and amplifying your global recognition.
          </div>
          <DiscoverTheWorthTable />
        </ContentCard>
        <ContentCard title={"\\\n2024 AADA\nWinners’ Night"}>
          <h2 className={styles.title}>A NIGHT TO REMEMBER</h2>
          <br />
          <div className={styles.content}>
            The 2024 AADA Winners’ Night not only commemorates the remarkable achievements throughout the 6-month competition but also fosters invaluable networking prospects for participants. This exclusive red-carpet affair welcomes esteemed recipients of the award, alongside industry luminaries, global media representatives, and key opinion leaders (KOLs) and key opinion consumers (KOCs).
          </div>
          <div className={styles.content}>
            Anticipated for Summer 2024, this spectacular event will be hosted in Bangkok, Thailand, as part of Asia Architecture Design Awards’ commitment to excellence.
          </div>
          <img
            src="/a_night_to_remember.svg"
            alt="Square"
            className={styles.singleImage}
          />
        </ContentCard>
        <ContentCard title={"\\\n2024 AADA\nin Numbers"}>
          <h2 className={styles.title}>6 DISCIPLINES</h2>
          <div></div>
          <div className={styles.content}>
            A diverse array of prestigious award categories awaits, including the coveted titles of Asia’s Best Architecture Design, Best Interior Design, Best Furniture Design, Best Hotel & Resort Design, and the esteemed accolade for Best Firms in Architecture Design, among others. These accolades stand as coveted prizes for individuals and organizations within the industry, ready to be claimed by those who have demonstrated outstanding excellence.
            <br />
            <br />
          </div>
          <h2 className={styles.title}>30 AWARD CATEGORIES</h2>
          <div className={styles.content}>
            Within the realm of the 2024 Asia Architecture Design Awards, the canvas of recognition stretches magnificently across an extensive array of 30 distinct award categories. These categories serve as vibrant tributaries, flowing through the diverse landscapes of architectural and design brilliance, each representing a unique facet of creativity, innovation, and expertise.
            <br />
            <br />
          </div>
          <h2 className={styles.title}>20 JUDGES</h2>
          <div className={styles.content}>
            AADA upholds transparency in its judging process, conducted by a distinguished panel of judges representing varied backgrounds – from design professionals to esteemed academics and influential social advocates within the region.
          </div>
        </ContentCard>
        <TheAwardFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
