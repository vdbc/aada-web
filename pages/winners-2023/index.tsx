import { keyBy } from "lodash";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { NewsTopBanner } from "../../components/TopBanner";
import { useAppSelector, wrapper } from "../../store";

import styles from "./styles.module.scss";
import CardNewWinner from "../../components/CardNewWinner";
import { getAllWinners, selectWinnerIds, selectWinnersDetail } from "../../store/modules/winnersNews";


const rowLengthDefault = 4;

function splitNewsToRows(winnersIds: number[]) {
  const result: number[][] = [];
  while (winnersIds.length > 0) {
    const rowIds = [];
    for (let i = 0; i < rowLengthDefault; i++) {
      const id = winnersIds.shift() || -1;
      rowIds.push(id);
    }
    result.push(rowIds);
  }
  return result;
}

export default function Home() {
  const allWinnersIds = useAppSelector(selectWinnerIds);
  const rows = splitNewsToRows(allWinnersIds);
  return (
    <div className={styles.container}>
      <Head>
        <title>Winners 2023</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <NewsTopBanner />
        <div className={styles.content}>
          <h1>UNCOVER <br /> ALL THE WINNERS</h1>
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
    await Promise.all([
      store.dispatch(getAllWinners()),
    ]);

    return {
      props: {},
    };
  }
);

