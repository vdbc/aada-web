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
        <title>Categories</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <ContentCard title={"\\\n2023 AADA\nCategories"}>
          <h2>CATEGORIES</h2>
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
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
            </div>
            <div className={styles.oneImage}>
              <Image src="/square.svg" alt="Square" fill />
            </div>
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
        </ContentCard>
        <ContentCard title={"\\\nBest\nArchitecture\nDesign"}>
          <h3>
            Rewarding the work of professional architect that exemplifies design
            excellence and architectural innovation whilst delivering meaningful
            social impact.
          </h3>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nBest\nInterior\nDesign"}>
          <h3>
            Honoring the innovative visions and remarkable works of interior
            designers.
          </h3>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
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
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
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
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
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
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
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
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.singleImage}>
            <Image src="/category_rect.svg" alt="The Value" fill />
          </div>
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
