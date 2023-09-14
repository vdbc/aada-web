

import Head from "next/head";
import GuideBookCard from "../../../components/GuidebookCard";
import { ButtonExplore } from "../../../components/ButtonExplore";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import { GalleryTopBanner } from "../../../components/TopBanner";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";


export default function Home() {
  const defaultImages = [
    { src: "/gallery/yearbook.jpg", title: "2023 AADA Winners' Night" },
    { src: "/gallery/yearbook.jpg", title: "Winners' Night - Hall Of Fame" },
    { src: "/gallery/yearbook.jpg", title: "Winners' Night - Moments" },
    { src: "/gallery/yearbook.jpg", title: "Winners' Night - Speech" },
    { src: "/gallery/yearbook.jpg", title: "Winners' Night - Speech" },
    { src: "/gallery/yearbook.jpg", title: "Winners' Night - Speech" },
  ];
  const splitToRows = (array: any[], rowSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += rowSize) {
      result.push(array.slice(i, i + rowSize));
    }
    return result;
  };

  const imageRows = splitToRows(defaultImages, 3);
  return (
    <div className={styles.container}>
      <Head>
        <title>PDF Assets</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <h3>Media Center/ <b>PDF Assets</b></h3>
        <h2>PDF Assets</h2>
        <p>On the evening of August 14th, the Winners’ Night of the 2023 Asia Architecture Design Awards (AADA) stood in the spotlight at Marina Bay Sands - a pinnacle of architectural brilliance within Singapore, Asia’s vanguard metropolis.</p>
        <div className={styles.content}>
          {imageRows.map((row, index) => (
            <div key={index} className={styles.row}>
              {row.map((image, index) => (
                <GuideBookCard
                  key={index}
                  url={image.src}
                  title={image.title}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <Button>Load more</Button>
        </div>

        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}



