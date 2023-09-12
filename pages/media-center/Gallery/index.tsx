import Head from "next/head";

import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import { GalleryTopBanner } from "../../../components/TopBanner";

export default function Home() {
  const defaultImages = [
    { src: "/gallery/pic1.jpg", width: 500, height: 300 },
    { src: "/gallery/pic2.jpg", width: 250, height: 300 },
    { src: "/gallery/pic3.jpg", width: 250, height: 300 },
    { src: "/gallery/pic4.jpg", width: 250, height: 300 },
    { src: "/gallery/pic5.jpg", width: 500, height: 300 },
    { src: "/gallery/pic6.jpg", width: 250, height: 300 },
    { src: "/gallery/pic7.jpg", width: 505, height: 300 },
    { src: "/gallery/pic8.jpg", width: 505, height: 300 },
    { src: "/gallery/pic9.jpg", width: 270, height: 300 },
    { src: "/gallery/pic10.jpg", width: 270, height: 300 },
    { src: "/gallery/pic11.jpg", width: 460, height: 300 },

  ];
  const defaultImagesHighlight = [
    { src: "/gallery/picHigh1.jpg", width: 500, height: 300 },
    { src: "/gallery/picHigh2.jpg", width: 250, height: 300 },
    { src: "/gallery/picHigh3.jpg", width: 250, height: 300 },
    { src: "/gallery/picHigh4.jpg", width: 505, height: 300 },
    { src: "/gallery/picHigh5.jpg", width: 505, height: 300 },
    { src: "/gallery/picHigh6.jpg", width: 250, height: 300 },
    { src: "/gallery/picHigh7.jpg", width: 505, height: 300 },
    { src: "/gallery/picHigh8.jpg", width: 505, height: 300 },
    { src: "/gallery/picHigh9.jpg", width: 270, height: 300 },
    { src: "/gallery/picHigh10.jpg", width: 200, height: 300 },
    { src: "/gallery/picHigh11.jpg", width: 200, height: 300 },

  ];



  return (

    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <h3>Media Center/ <b>Gallery</b></h3>
        <div className={styles.wrapper}>

          <div className={styles.box}>
            <h2>2023 AADA Winners’ Night</h2>
            <div className={styles.para}>
              <p>On the evening of August 14th, the Winners’ Night of the 2023 Asia Architecture Design Awards (AADA)</p>
              <p>stood in the spotlight at Marina Bay Sands – a pinnacle of architectural brilliance within Singapore, Asia’s vanguard metropolis.</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            {defaultImages.slice(0, 3).map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt="Default Image"
                className={styles.item}
                width={image.width}
                height={image.height}
              />
            ))}
          </div>
          <div className={styles.row}>
            {defaultImages.slice(3, 6).map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt="Default Image"
                className={styles.item2}
                width={image.width}
                height={image.height}
              />
            ))}
          </div>


          <div className={styles.actions}>
            <Button>Load More</Button>
          </div>
        </div>


        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}