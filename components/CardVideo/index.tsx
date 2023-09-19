
import Link from "next/link";
import { useAppSelector } from "../../store";
import { selectGalleryDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";
import Image from "next/image";
import { selectVideoDetail } from "../../store/modules/video";
import { isEmpty } from "lodash";


declare type ViewProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: ViewProps) {
  const { images } = useAppSelector(selectVideoDetail(id)) || {};
  const galleries = useAppSelector(selectGalleryDetail(id)) ?? {};
  const { title, description } = galleries;
  if (!images || images.length == 0) return null;
  if (isEmpty(galleries))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );

  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <div className={styles.main}>
        <div>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.para}>{description}</div>
        </div>
      </div>
      <div className={styles.thumbnail}>

        <div>

          {images.map((image) => (
            <video
              key={image?.id}
              src={
                `${image?.url}?size=w500`
              }
            />
          ))}
        </div>
      </div>

    </div>
  );
}


