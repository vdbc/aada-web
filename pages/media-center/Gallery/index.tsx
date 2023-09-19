import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ButtonExplore } from "../../../components/ButtonExplore";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import { GalleryTopBanner } from "../../../components/TopBanner";
import AlbumBanner from "../../../components/AlbumBanner";
import { BsCardImage } from "react-icons/bs";
import CardImage from "../../../components/CardImage";
import { useAppSelector } from "../../../store";
import { selectGalleryIds } from "../../../store/modules/gallery";

export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <h3>Media Center/ <b>Gallery</b></h3>
        <AlbumBanner />



        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}

