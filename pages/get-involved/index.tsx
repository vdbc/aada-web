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
        <title>Get Involved</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <ContentCard title={"\\\nGet Involved \nwith AADA"}>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>FOR NOMINEES</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>SPONSORING THE AWARD</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <ContentCard title={"\\\nNominate\nYour Work"}>
          <h2>FOR NOMINEES</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.images}>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nSponsor\nThe Awards"}>
          <h2>SPONSORSHIP</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.images}>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
            <div className={styles.groupImage}>
              <div className={styles.oneImage}>
                <Image src="/brand_rect.png" alt="Brand Rect" fill />
              </div>
              <div className={styles.imageDesc}>
                Lorem ipsum dolor sit amet et delectus accommodare his consul
                copiosae legendos at vix ad putent delectus delicata usu. Vidit
                dissentiet eos
              </div>
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nSponsorship\nAdvantages"}>
          <h2>DIRECT ADVERTISEMENT</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>REASON TO GET PUBLIC</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>ENGAGEMENT</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>DIFFERENTiATION</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>EXCLUSIVE ACCESS</h2>
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
          src="excited_to_become_a_sponsor.svg"
        />
      </main>
      <Footer />
    </div>
  );
}
