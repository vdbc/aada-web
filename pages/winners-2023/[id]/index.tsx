import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAppSelector, wrapper } from "../../../store";
import { getNewsWinnerIdFromFlug, getWinnersFlugId } from "../../../utils/news";
import styles from "./styles.module.scss";
import { getWinnersDetail, selectWinnerNewsDetail } from "../../../store/modules/winnersNews";
import ShareWinnerNews from "./ShareWinnerNews";
import WinnersNewsDetailHeader from "./WinnersNewsDetailHeader";
import WinnerNewsContent from "./WinnerNewsContent";

export default function _View({ id }: { id: number }) {
  const winners = useAppSelector(selectWinnerNewsDetail(id));
  const { projectName, nominateName } = winners;
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
        <WinnersNewsDetailHeader id={id} />
        <div className={styles.body}>
          <ShareWinnerNews id={id} />
          <WinnerNewsContent id={id} />
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
    const winnerNews = selectWinnerNewsDetail(id)(store.getState());
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
