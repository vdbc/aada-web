import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useAppDispatch } from "../../../store";
import { getNewsDetail } from "../../../store/modules/news";
import NewsContent from "./NewsContent";
import NewsDetailHeader from "./NewsDetailHeader";
import RecommendationNews from "./RecommendationNews";
import ShareNews from "./ShareNews";
import styles from "./styles.module.scss";
import Tags from "./Tags";

export default function _View() {
  const route = useRouter();
  const id = parseInt(route.query["id"]?.toString() || "");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(getNewsDetail(id));
  }, [id, dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <NewsDetailHeader id={id} />
        <div className={styles.body}>
          <ShareNews id={id} />
          <NewsContent id={id} />
          <Tags id={id} />
          <RecommendationNews id={id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
