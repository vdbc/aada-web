import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import { GalleryTopBanner } from "../../../components/TopBanner";
import AlbumCard from "../../../components/AlbumCard";
import { ButtonExplore } from "../../../components/ButtonExplore";

export default function Home() {
  const defaultImages = [
    { src: "/gallery/pic1.jpg", title: "2023 AADA Winners' Night" },
    { src: "/gallery/pic2.jpg", title: "Winners' Night - Hall Of Fame" },
    { src: "/gallery/pic3.jpg", title: "Winners' Night - Moments" },
    { src: "/gallery/pic4.jpg", title: "Winners' Night - Speech" },
  ];

  const splitToRows = (array: any[], rowSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += rowSize) {
      result.push(array.slice(i, i + rowSize));
    }
    return result;
  };

  const imageRows = splitToRows(defaultImages, 2);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          {imageRows.map((row, index) => (
            <div key={index} className={styles.row}>
              {row.map((image, index) => (
                <AlbumCard
                  key={index}
                  url={image.src}
                  title={image.title}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <ButtonExplore href="/categories">EXPLORE ALL </ButtonExplore>

        </div>

      </main>
    </div>
  );
}