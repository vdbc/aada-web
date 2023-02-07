import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAppSelector, wrapper } from "../../../store";
import { getNewsDetail, selectNewsDetail } from "../../../store/modules/news";
import { getNewsFlugId, getNewsIdFromFlug } from "../../../utils/news";
import NewsContent from "./NewsContent";
import NewsDetailHeader from "./NewsDetailHeader";
import ShareNews from "./ShareNews";
import styles from "./styles.module.scss";
import Tags from "./Tags";

export default function _View() {
  const route = useRouter();
  const id = parseInt(route.query["id"]?.toString() || "");
  const news = useAppSelector(selectNewsDetail(id));

  return (
    <div className={styles.container}>
      <Head>
        <title>{news?.title || "News"}</title>
        <meta name="og:image" content={news?.wallpaper} />
        <meta name="description" content={news?.description} />
      </Head>

      <main className={styles.main}>
        <Header />
        <NewsDetailHeader id={id} />
        <div className={styles.body}>
          <ShareNews id={id} />
          <NewsContent id={id} />
          <Tags id={id} />
          {/* <RecommendationNews id={id} /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const flugId = context.query["id"]?.toString() || "";
    const id = parseInt(getNewsIdFromFlug(flugId));
    await store.dispatch(getNewsDetail(id));
    const news = selectNewsDetail(id)(store.getState());
    if (news == null)
      return {
        notFound: true,
      };

    const newFlugId = getNewsFlugId(news);
    if (flugId != newFlugId) {
      return {
        redirect: {
          statusCode: 301,
          destination: `/news/${newFlugId}`,
        },
      };
    }
    return {
      props: {},
    };
  }
);
