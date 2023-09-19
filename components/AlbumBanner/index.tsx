
import { isEmpty } from "lodash";
import Image from "next/image";
import { useAppSelector, wrapper } from "../../store";
import { getGalleryDetail, selectGalleryDetail, selectGalleryIds } from "../../store/modules/gallery";
import styles from "./styles.module.scss";
import Link from "next/link";
import { GalleryModel } from "../../models/GalleryModel";
import { getGalleryImages } from "../../utils/gallery";
import CardImage from "../CardImage";
import { ButtonExplore, ButtonLoadMore } from "../ButtonExplore";


declare type AlbumCardProps = {
  id: number;
  className?: string;
};

function AlbumBanner({ id, className }: AlbumCardProps) {
  const galleries = useAppSelector(selectGalleryDetail(id)) ?? {};
  const { title, description } = galleries;
  if (isEmpty(galleries))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );
  console.log("gallery" + galleries);
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.para}>{description}</div>
      </div>

    </div>
  );
}

export default function _View() {
  function splitGalleriesToRows(_galleryIds: number[]) {
    const galleryIds = [..._galleryIds];
    const result: number[][] = [];

    while (galleryIds.length > 0) {
      const rowIds = galleryIds.splice(0, 3);
      result.push(rowIds);
    }

    return result;
  }

  const galleriesIds = useAppSelector(selectGalleryIds);
  const [row1, row2, ...rows] = splitGalleriesToRows(galleriesIds);
  return (
    <div className={styles.wrapper}>
      {galleriesIds.map((galleriesIds) => (
        <div key={galleriesIds} className={styles.box}>
          <AlbumBanner id={galleriesIds} />
          <div className={styles.content}>
            {row1 && row1.length > 0 && (
              <div className={styles.row}>
                <CardImage id={row1[0]} className={styles.item2} />
                <CardImage id={row1[1]} className={styles.item} />
                <CardImage id={row1[2]} className={styles.item} />
              </div>
            )}
            {row2 && row2.length > 0 && (
              <div className={styles.row}>
                <CardImage id={row2[0]} className={styles.item} />
                <CardImage id={row2[1]} className={styles.item2} />
                <CardImage id={row2[2]} className={styles.item} />
              </div>
            )}
            {rows.map((ids, index) => (
              <div key={index} className={styles.row}>
                {ids.map((id) => (
                  <CardImage key={id} id={id} className={styles.item} />
                ))}
              </div>
            ))}
          </div>
          <div className={styles.actions}>
            <ButtonLoadMore href="/media-center/Gallery">Load More</ButtonLoadMore>
          </div>
        </div>

      ))}

    </div>
  );
}
