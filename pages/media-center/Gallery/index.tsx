
import { Button } from "@mui/material";
import Head from "next/head";
import Footer from "../../../components/Footer";
import { AdvisorsFooterBanner } from "../../../components/FooterBanner";
import Header from "../../../components/Header";
import ListGallery from "../../../components/ListGallery";
import { GalleryTopBanner } from "../../../components/TopBanner";
import { useAppSelector, wrapper } from "../../../store";
import { selectGalleryIds, getAllGallery } from "../../../store/modules/gallery";
import styles from "./styles.module.scss";
import AlbumBanner from "../../../components/AlbumBanner";

const rowLengthDefault = 4;
function splitGalleriesToRows(_galleryIds: number[]) {
  const galleryIds = [..._galleryIds];
  const result: number[][] = [];
  while (galleryIds.length > 0) {
    const rowIds = [];
    for (let i = 0; i < rowLengthDefault; i++) {
      const id = galleryIds.shift() || -1;
      rowIds.push(id);
    }
    result.push(rowIds);
  }
  return result;
}
export default function Home() {
  const galleryIds = useAppSelector(selectGalleryIds);
  const [row1, row2, row3, row4, ...rows] = splitGalleriesToRows(
    galleryIds,
  );
  console.log("url" + galleryIds)
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <GalleryTopBanner />
        {/* <AlbumBanner /> */}
        <div className={styles.content}>
          {row1 && row1.length > 0 && (
            <div className={styles.row}>
              <ListGallery id={row1[0]} className={styles.item} />
              <ListGallery id={row1[1]} className={styles.item2} />
              <ListGallery id={row1[2]} className={styles.item} />
            </div>
          )}
          {row2 && row2.length > 0 && (
            <div className={styles.row}>
              <ListGallery id={row2[0]} className={styles.item} />
              <ListGallery id={row2[1]} className={styles.item} />
              <ListGallery id={row2[2]} className={styles.item} />
              <ListGallery id={row2[3]} className={styles.item} />
            </div>
          )}
          {row3 && row3.length > 0 && (
            <div className={styles.row}>
              <ListGallery id={row3[0]} className={styles.item2} />
              <ListGallery id={row3[1]} className={styles.item} />
              <ListGallery id={row3[2]} className={styles.item} />
            </div>
          )}
          {row4 && row4.length > 0 && (
            <div className={styles.row}>
              <ListGallery id={row4[0]} className={styles.item} />
              <ListGallery id={row4[1]} className={styles.item} />
              <ListGallery id={row4[2]} className={styles.item2} />
            </div>
          )}
          {rows.map((ids, index) => (
            <div key={index} className={styles.row}>
              {ids.map((id) => (
                <ListGallery key={id} id={id} className={styles.item} />
              ))}
            </div>
          ))}
        </div>
        <Button className={styles.btn}>Load more</Button>
        {/* <AlbumBanner/> */}
        <Button className={styles.btn}>Load more</Button>
        <AdvisorsFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all([
      store.dispatch(getAllGallery()),
    ]);
    return {
      props: {},
    };
  }
);

