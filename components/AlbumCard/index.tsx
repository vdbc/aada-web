
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../store";
import { isEmpty } from "lodash";
import { selectGalleryDetail } from "../../store/modules/gallery";
import { ButtonExplore } from "../ButtonExplore";


declare type AlbumCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: AlbumCardProps) {
  const galleries = useAppSelector(selectGalleryDetail(id)) ?? {};
  const { title, thumbnail } = galleries;
  if (isEmpty(galleries))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <div className={styles.thumbnail}>
          <div>
            <Image
              src={
                `${thumbnail}?format=webp&size=w500` || "/default-thumbnail.jpg"
              }
              alt="Thumbnail"
              fill
            />
            <div className={styles.title}>
              <div>{title}</div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.actions}>
        <ButtonExplore href="/media-center/Gallery">EXPLORE ALL </ButtonExplore>
      </div>
    </div>
  );
}
