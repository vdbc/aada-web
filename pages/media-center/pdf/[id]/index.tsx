import Head from "next/head";
import { useAppSelector, wrapper } from "../../../../store";
import {
  getGuidebookDetail,
  selectGuidebookDetail,
} from "../../../../store/modules/guidebook";
import styles from "./styles.module.scss";

export default function View({ id }: { id: number }) {
  const { url, title, mediaType, description, thumbnail } =
    useAppSelector(selectGuidebookDetail(id)) || {};

  if (!url) return null;

  const fileName = `${title}.${mediaType?.toLowerCase()}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{fileName}</title>
        <meta name="description" content={description} />
        <meta name="og:image" content={thumbnail} />
      </Head>
      <iframe src={`${url}?fileName=${fileName}`} className={styles.iframe} />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.query["id"]?.toString() || "";
    await store.dispatch(getGuidebookDetail(parseInt(id)));

    return {
      props: { id },
    };
  }
);
