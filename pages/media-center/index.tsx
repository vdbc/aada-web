

import Footer from "../../components/Footer";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { GalleryTopBanner } from "../../components/TopBanner";
import MenuAlbum from "./MenuAlbum";
import styles from "./styles.module.scss";
import Image from "next/image";



export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <GalleryTopBanner />
      <h2>GALLERY</h2>
      <MenuAlbum />
      <AdvisorsFooterBanner />
      <Footer />
    </div>

  );
}


