import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { TheAwardFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { TheAwardTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

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
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>6 DISCIPLINES</div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>30 AWARDS CATEGORIES</div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>PROFESSIONAL JURORS</div>
            </div>
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
            <video controls>
              <source src="/the_award.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nThe Value"}>
          <h2>DISCOVER THE WORTH</h2>
          <div>
            Winning the 2023 ASIA ARCHITECTURE DESIGN AWARDS is a prestigious
            accolade, giving you an enhanced branding identity on an
            international level and augmenting your global profile.
          </div>
          <div className={styles.singleImage}>
            <Image src="/the_value.svg" alt="The Value" fill />
          </div>
        </ContentCard>
        <ContentCard title={"\\\n2023 AADA\nWinners’ Gala Night"}>
          <h2>A NIGHT TO REMEMBER</h2>
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
          <div className={styles.video}>
            <Image src="/a_night_to_remember.svg" alt="Square" fill />
          </div>
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
        <TheAwardFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
