/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Award</title>
      </Head>

      <main className={styles.main}>
        <Header />

        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
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
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
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
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.video}>
            <Image src="/video1.jpg" alt="Square" fill />
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
        <ContentCard title={"\\\n2023 AADA\nWinners Gala Night"}>
          <h2>A NIGHT TO REMEMBER</h2>
          <div>
            The 2023 AADA Winners Gala Night celebrates the outstanding works of
            the 6-month competition, yet brings about the networking
            opportunities for participants. The red-carpet event is for high
            profile attendees that acquire the award, industry professionals,
            international media and industry KOLs, KOCs.
          </div>
          <div className={styles.video}>
            <Image src="/video1.jpg" alt="Square" fill />
          </div>
        </ContentCard>
        <ContentCard title={"\\\n2023 AADA\nin Numbers"}>
          <h2>30 AWARD CATEGORIES</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>90 WINNERS</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>20 JUDGES</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <img
          className={styles.why}
          alt="Why you should submit"
          src="why_you_should_submit.svg"
        />
      </main>
      <Footer />
    </div>
  );
}
