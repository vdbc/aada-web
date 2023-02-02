import { keyBy } from "lodash";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import { NewsTopBanner } from "../../components/TopBanner";
import { useAppSelector, wrapper } from "../../store";
import {
  getAllHighlightNews,
  getAllNews,
  selectHighlightNewsIds,
  selectNewsIds,
} from "../../store/modules/news";
import styles from "./styles.module.scss";

const highlightMaxtrix = [
  [1, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 0],
  [0, 0, 1],
];

const rowLengthDefault = 4;

function splitNewsToRows(_newIds: number[], _highlightIds: number[]) {
  const highlightIds = [..._highlightIds];
  const check = keyBy(highlightIds);
  const newIds = _newIds.filter((id) => !check[id]);

  const result: number[][] = [];
  highlightMaxtrix.forEach((row) => {
    const rowIds: number[] = [];
    row.forEach((isHighlight) => {
      if (isHighlight && highlightIds.length > 0) {
        rowIds.push(highlightIds.shift()!);
        return;
      }
      if (newIds.length > 0) {
        rowIds.push(newIds.shift()!);
        return;
      }
      if (highlightIds.length > 0) {
        rowIds.push(highlightIds.shift()!);
      }
    });
    if (rowIds.length > 0) result.push(rowIds);
  });
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
  const highlightIds = useAppSelector(selectHighlightNewsIds);
  const [row1, row2, row3, row4, ...rows] = splitNewsToRows(
    newsIds,
    highlightIds
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Latest Update</title>
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(getAllNews()),
      store.dispatch(getAllHighlightNews()),
    ]);

    return {
      props: {},
    };
  }
);
