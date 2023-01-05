import Head from "next/head";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import { NewsTopBanner } from "../../components/TopBanner";
import { useAppDispatch, useAppSelector } from "../../store";
import { getAllNews, selectNewsIds } from "../../store/modules/news";
import styles from "./styles.module.scss";

const rowsLength = [3, 4, 3, 3, 4];
const rowLengthDefault = 4;

function splitNewsToRows(newIds: number[]) {
  const result: number[][] = [[]];
  for (let i = 0; i < newIds.length; i++) {
    const currentRowIndex = result.length - 1;
    result[currentRowIndex].push(newIds[i]);
    const maxOfNewsInRow = rowsLength[currentRowIndex] || rowLengthDefault;
    console.log(
      "mylog maxOfNewsInRow: ",
      i,
      maxOfNewsInRow,
      result[currentRowIndex].length
    );
    if (result[currentRowIndex].length >= maxOfNewsInRow) {
      result.push([]);
    }
  }

  return result;
}

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  const newsIds = useAppSelector(selectNewsIds);
  const [row1, row2, row3, row4, ...rows] = splitNewsToRows(newsIds);

  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <NewsTopBanner />
        <div className={styles.content}>
          <h1>LATEST UPDATE FROM AADA</h1>
          {row1 && row1.length > 0 && (
            <div className={styles.row}>
              <NewsCard id={row1[0]} className={styles.item} />
              <NewsCard id={row1[1]} className={styles.item2} />
              <NewsCard id={row1[2]} className={styles.item} />
            </div>
          )}
          {row2 && row2.length > 0 && (
            <div className={styles.row}>
              <NewsCard id={row2[0]} className={styles.item} />
              <NewsCard id={row2[1]} className={styles.item} />
              <NewsCard id={row2[2]} className={styles.item} />
              <NewsCard id={row2[3]} className={styles.item} />
            </div>
          )}
          {row3 && row3.length > 0 && (
            <div className={styles.row}>
              <NewsCard id={row3[0]} className={styles.item2} />
              <NewsCard id={row3[1]} className={styles.item} />
              <NewsCard id={row3[2]} className={styles.item} />
            </div>
          )}
          {row4 && row4.length > 0 && (
            <div className={styles.row}>
              <NewsCard id={row4[0]} className={styles.item} />
              <NewsCard id={row4[1]} className={styles.item} />
              <NewsCard id={row4[2]} className={styles.item2} />
            </div>
          )}
          {rows.map((ids, index) => (
            <div key={index} className={styles.row}>
              {ids.map((id) => (
                <NewsCard key={id} id={id} className={styles.item} />
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
