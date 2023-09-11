

import Footer from "../../components/Footer";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { GalleryTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";
import Image from "next/image";



export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <GalleryTopBanner />
      <div className={styles.wrapper}>
        <h2>GALLERY</h2>
        <div className={styles.image}>
          <img src="/gallery/pic2.jpg" alt="Logo" />
          <img src="/gallery/pic2.jpg" alt="Logo" />
          <img src="/gallery/pic3.jpg" alt="Logo" />
          <img src="/gallery/pic4.jpg" alt="Logo" />
        </div>
      </div>
      <AdvisorsFooterBanner />
      <Footer />
    </div>

  );
}


