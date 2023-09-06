
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import { GalleryTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import { AdvisorsFooterBanner } from "../../components/FooterBanner";
import NewsCard from "../../components/NewsCard";
import { useAppSelector } from "../../store";
import { selectNewsIds } from "../../store/modules/news";

const rowLengthDefault = 4;
function splitNewsToRows(_newIds: number[]) {
  const newIds = [..._newIds];
  const result: number[][] = [];
  while (newIds.length > 0) {
    const rowIds = [];
    for (let i = 0; i < rowLengthDefault; i++) {
      const id = newIds.shift() || -1;
      rowIds.push(id);
    }
    result.push(rowIds);
  }
  return result;
}
export default function Home() {
  const newsIds = useAppSelector(selectNewsIds);

  const [row1, row2, row3, row4, ...rows] = splitNewsToRows(
    newsIds,
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        <div className={styles.wrapper}>
          <h3>Media Center/ <b>Gallery</b></h3>
          <div className={styles.box}>
            <h2>2023 AADA Winners’ Night</h2>
            <div className={styles.para}>
              <p>On the evening of August 14th, the Winners’ Night of the 2023 Asia Architecture Design Awards (AADA)</p>
              <p>stood in the spotlight at Marina Bay Sands – a pinnacle of architectural brilliance within Singapore, Asia’s vanguard metropolis.</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {row1 && row1.length > 0 && (
            <div className={styles.row}>
              <img src="/gallery/pic1.jpg" className={styles.item2} />
              <img src="/gallery/pic2.jpg" className={styles.item} />
              <img src="/gallery/pic3.jpg" className={styles.item} />
            </div>
          )}
          {row2 && row2.length > 0 && (
            <div className={styles.row}>
              <img src="/gallery/pic4.jpg" className={styles.item} />
              <img src="/gallery/pic5.jpg" className={styles.item2} />
              <img src="/gallery/pic6.jpg" className={styles.item} />
            </div>
          )}
          {row3 && row3.length > 0 && (
            <div className={styles.row}>
              <img src="/gallery/pic7.jpg" className={styles.item} />
              <img src="/gallery/pic8.jpg" className={styles.item} />

            </div>
          )}
          {row4 && row4.length > 0 && (
            <div className={styles.row}>
              <img src="/gallery/pic9.jpg" className={styles.item} />
              <img src="/gallery/pic10.jpg" className={styles.item} />
              <img src="/gallery/pic11.jpg" className={styles.item2} />
            </div>
          )}
          {rows.map((ids, index) => (
            <div key={index} className={styles.row}>
              {ids.map((id) => (
                <img key={id} className={styles.item} />
              ))}
            </div>
          ))}
        </div>
        <Button>Load more</Button>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <h2>Winners’ Night - Highlight Moments</h2>
            <div className={styles.para}>
              <p>The Winners’ Night of the 2023 Asia Architecture Design Awards (AADA) - Highlight Moments</p>
            </div>
          </div>
        </div>

        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}

