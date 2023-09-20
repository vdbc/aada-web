import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import AlbumCard from "../../../components/AlbumCard";
import { ButtonExplore } from "../../../components/ButtonExplore";
import { selectGalleryIds } from "../../../store/modules/gallery";
import { useAppSelector } from "../../../store";

export default function Home() {
  function splitGalleriesToRows(_galleryIds: number[]) {
    const galleryIds = [..._galleryIds];
    const result: number[][] = [];

    while (galleryIds.length > 0) {
      const rowIds = galleryIds.splice(0, 2);
      result.push(rowIds);
    }

    return result;
  }

  const galleriesIds = useAppSelector(selectGalleryIds);
  const rows = splitGalleriesToRows(galleriesIds).slice(0, 2);

  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          {rows.map((ids, index) => (
            <div key={index} className={styles.row}>
              {ids.map((id) => (
                <AlbumCard key={id} id={id} className={styles.item} />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <ButtonExplore href="/media-center/Gallery">EXPLORE ALL</ButtonExplore>
        </div>
      </main>
    </div>
  );
}