import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAppSelector, wrapper } from "../../../store";
import { getNewsWinnerIdFromFlug, getWinnersFlugId } from "../../../utils/news";
import styles from "./styles.module.scss";
import { getWinnersDetail, selectWinnersDetail } from "../../../store/modules/winnersNews";
import WinnersContent from "./WinnersContent";
import WinnersDetailHeader from "./WinnersDetailHeader";
import ShareNewsWinner from "./ShareNewsWinner";

export default function _View({ id }: { id: number }) {
  const winners = useAppSelector(selectWinnersDetail(id));
  const { thumbnail, projectName, nominateName } = winners;
  const desc = winners.projectName + " - " + winners.nominateName;

  return (
    <div className={styles.container}>
      <Head>
        <title>{winners?.projectName || "Winners"}</title>
        <meta name="og:image" content={winners?.wallpaper} />
        <meta name="description" content={desc} />
      </Head>

      <main className={styles.main}>
        <Header />
        <WinnersDetailHeader id={id} />
        <div className={styles.body}>
          <ShareNewsWinner id={id} />
          <WinnersContent id={id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const flugIdwinner = context.query["id"]?.toString() || "";
    const id = parseInt(getNewsWinnerIdFromFlug(flugIdwinner));

    await store.dispatch(getWinnersDetail(id));
    const winnerNews = selectWinnersDetail(id)(store.getState());
    if (winnerNews == null)
      return {
        notFound: true,
      };

    const newFlugId = getWinnersFlugId(winnerNews);
    if (flugIdwinner != newFlugId) {
      return {
        redirect: {
          statusCode: 301,
          destination: `/winners-2023/${newFlugId}`,
        },
      };
    }
    return {
      props: { id },
    };
  }
);
