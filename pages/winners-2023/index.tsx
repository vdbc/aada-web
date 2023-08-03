
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { NewsTopBanner, WinnersNewsTopBanner } from "../../components/TopBanner";
import { useAppSelector, wrapper } from "../../store";

import styles from "./styles.module.scss";
import CardNewWinner from "../../components/CardNewWinner";
import { getAllWinners, selectWinnerIds } from "../../store/modules/winnersNews";

const rowLengthDefault = 4;

function splitNewsToRows(_allWinnersIds: number[], rowLengthDefault: number) {
  const allWinnersIds = _allWinnersIds.slice();
  const result: number[][] = [];
  while (allWinnersIds.length > 0) {
    const rowIds = [];
    for (let i = 0; i < rowLengthDefault && allWinnersIds.length > 0; i++) {
      const id = allWinnersIds.shift();
      if (id !== undefined) {
        rowIds.push(id);
      }
    }
    result.push(rowIds);
  }
  if (result.length > 0 && result[result.length - 1].length < rowLengthDefault) {
    const lastRow = result[result.length - 1];
    const remainingItems = lastRow.splice(rowLengthDefault - result[result.length - 1].length);
    lastRow.push(...remainingItems);
  }
  return result;
}

export default function Home() {
  const allWinnersIds = useAppSelector(selectWinnerIds);
  const rows = splitNewsToRows(allWinnersIds, rowLengthDefault);
  console.log(rows);
  return (
    <div className={styles.container}>
      <Head>
        <title>Winners 2023</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <WinnersNewsTopBanner />
        <div className={styles.content}>
          <h1>UNCOVER <br /> ALL THE WINNERS</h1>
          <h3 className={styles.text}>2023 ASIA ARCHITECTURE DESIGN AWARDS</h3>
          {rows.map((ids, index) => (
            <div key={index} className={styles.row}>
              {ids.map((id) => (
                <CardNewWinner key={id} id={id} className={styles.item} />
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
    try {
      await Promise.all([
        store.dispatch(getAllWinners()),
      ]);
    } catch (error) {
      console.error("Error fetching winners: ", error);
    }
    return {
      props: {},
    };
  }
);