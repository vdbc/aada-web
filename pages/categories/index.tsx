/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

declare type AwardItemProps = {
  children: string;
};

function AwardItem({ children }: AwardItemProps) {
  return (
    <div className={styles.awardItemContainer}>
      <Image
        className={styles.logo4}
        src="/logo4.svg"
        alt="Logo"
        width={114}
        height={38}
      />
      <div className={styles.spacer1} />
      <div className={styles.title}>{children}</div>
      <div className={styles.spacer} />
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <ContentCard title={"\\\n2023 AADA\nDisciplines"}>
          <h2>DISCIPLINES</h2>
          <div>
            The appreciation of Architecture & Design works, ranging from
            independent work to full-serviced firms that has substantial
            contribution to the society. The AADA is open to all entities from
            independent submission to brands, architecture offices, design
            studios, creative agencies or manufacturers, distributors…
          </div>
          <div className={styles.images}>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                BEST ARCHITECTURE DESIGN
              </div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>BEST INTERIOR DESIGN</div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>BEST FURNITURE DESIGN</div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                BEST FIRMS FOR ARCHITECTURE DESIGN
              </div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                BEST FIRMS FOR INTERIOR DESIGN
              </div>
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
              <div className={styles.badgeContent}>
                BEST FIRMS IN FURNITURE MANUFACTURING & RETAILING
              </div>
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nArchitecture\nDesign"}>
          <h3>
            Rewarding the work of professional architect that exemplifies design
            excellence and architectural innovation whilst delivering meaningful
            social impact.
          </h3>
          <AwardItem>2023 BEST RESORT ARCHITECTURE DESIGN</AwardItem>
          <div>
            These awards are presented to design excellence in Resort
            Architecture.
          </div>
          <AwardItem>2023 BEST HOTEL ARCHITECTURE DESIGN</AwardItem>
          <div>
            These awards are presented to design excellence in Hotel
            Architecture.
          </div>
          <AwardItem>2023 BEST F&B ARCHITECTURE DESIGN</AwardItem>
          <div>
            These awards are presented to design excellence in F&B architecture
            design, not limited to restaurants, bars, pubs, hotel restaurants
            and other hospitality-related functional areas.
          </div>
          <AwardItem>BEST LANDSCAPE ARCHITECTURE DESIGN</AwardItem>
          <div>
            These awards are presented to design excellence in landscape
            architecture design, not limited to landscape assessment, landscape
            management, property management, medium or small size landscape
            design.
          </div>
          <AwardItem>
            2023 BEST LEISURE & WELLNESS ARCHITECTURE DESIGN
          </AwardItem>
          <div>
            These awards are presented to design excellence in leisure and
            wellness architecture design including spas, healthcare,
            recreational facilities,...
          </div>
          <AwardItem>2023 BEST RESIDENTIAL ARCHITECTURE DESIGN</AwardItem>
          <div>
            These awards are presented to design excellence in leisure and
            wellness architecture design including spas, healthcare,
            recreational facilities,...
          </div>
          <AwardItem>
            2023 BEST COMMERCIAL BUILDING ARCHITECTURE DESIGN
          </AwardItem>
          <div>
            These awards are presented to design excellence in leisure and
            wellness architecture design including spas, healthcare,
            recreational facilities,...
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nInterior\nDesign"}>
          <h3>
            Honoring the innovative visions and remarkable works of interior
            designers.
          </h3>
          <AwardItem>2023 BEST RESORT INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST HOTEL INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST F&B INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST RESIDENTIAL INTERIOR DESIGN</AwardItem>
          <div>
            These awards presented to trendy residential interior design that
            qualifies for both functionality and aesthetic. Projects can include
            a single room or the whole place.
          </div>
          <AwardItem>2023 BEST RETAIL INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST LEISURE & WELLNESS INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST COMMERCIAL INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST WORKPLACE INTERIOR DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nFurniture\nDesign"}>
          <h3>
            Indication and celebration of quality and perfection in Furniture
            Design.
          </h3>
          <AwardItem>2023 BEST HOUSEHOLD FURNITURE DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST FURNITURE ACCESSORIES DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST LIGHTING DESIGN</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>
            2023 BEST BATHROOM FURNITURE & SANITARY WARE DESIGN
          </AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest Firms in\nArchitecture\nDesign"}>
          <h3>
            Honoring the excellence of full-serviced Architectural & Landscaping
            firms, showcasing the phenomenal and undeniable impact architect in
            daily lives.
          </h3>
          <AwardItem>2023 BEST ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>
            2023 BEST MULTI-DISCIPLINARY ARCHITECTURE DESIGN FIRM
          </AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST LANDSCAPE ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST HOSPITALITY ARCHITECTURE DESIGN FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST PROPERTY DEVELOPMENT FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest Firms in\nInterior\nDesign"}>
          <h3>
            A certification of excellence to Interior Design Firms in providing
            outstanding, inspiring projects that create truly exemplary to the
            industry.
          </h3>
          <AwardItem>2023 BEST INTERIOR DESIGN FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST HOTEL & RESORT INTERIOR FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST BOUTIQUE INTERIOR DESIGN FIRM</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <ContentCard
          title={"\\\nBest Firms in\nFurniture\nManufacturing\n& Retailing"}
        >
          <h3>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an.
          </h3>
          <AwardItem>2023 BEST FURNITURE MANUFACTURER</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST FURNITURE RETAILER</AwardItem>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <AwardItem>2023 BEST INNOVATIVE FURNITURE DESIGN FIRM</AwardItem>
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
          alt="Ready to submit your work?"
          src="ready_to_submit_your_work.svg"
        />
      </main>
      <Footer />
    </div>
  );
}
