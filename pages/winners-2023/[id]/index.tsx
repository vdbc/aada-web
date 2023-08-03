import Head from "next/head";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAppSelector, wrapper } from "../../../store";
import { getNewsDetail, selectNewsDetail } from "../../../store/modules/news";
import { getNewsFlugId, getNewsIdFromFlug, getWinnersFlugId, getWinnersIdFromFlug } from "../../../utils/news";
import NewsContent from "./WinnersContent";
import NewsDetailHeader from "./WinnersDetailHeader";
import ShareNews from "./ShareNewsWinner";
import styles from "./styles.module.scss";
import { getWinnersDetail, selectWinnersDetail } from "../../../store/modules/winnersNews";
import WinnersContent from "./WinnersContent";
import WinnersDetailHeader from "./WinnersDetailHeader";
import ShareNewsWinner from "./ShareNewsWinner";

export default function _View({ id }: { id: number }) {
  const winners = useAppSelector(selectWinnersDetail(id));
  const MAX_WORDS = 100;

  function truncateContent(content: string): string {
    const words = content.split(" ");
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(" ") + "...";
    } else {
      return content;
    }
  }
  const truncatedContent = truncateContent(winners?.content || "");

  return (
    <div className={styles.container}>
      <Head>
        <title>{winners?.projectName || "Winners"}</title>
        <meta name="og:image" content={winners?.wallpaper} />
        <meta name="description" content={truncatedContent} />
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
    const id = parseInt(getWinnersIdFromFlug(flugIdwinner));

    await store.dispatch(getWinnersDetail(id));
    const winners = selectWinnersDetail(id)(store.getState());
    if (winners == null)
      return {
        notFound: true,
      };

    const newFlugId = getWinnersFlugId(winners);
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
