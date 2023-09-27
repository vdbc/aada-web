import { isEmpty } from "lodash";
import Image from "next/image";
import { useAppSelector } from "../../store";
import { selectAlbumDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";

declare type GalleryCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: GalleryCardProps) {
  const gallery = useAppSelector(selectAlbumDetail(id)) ?? {};
  const { url } = gallery;

  if (isEmpty(gallery))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );
  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <div className={styles.thumbnail}>
        <div>
          <Image src={url || ""} alt="Thumbnail" fill />
        </div>
      </div>
    </div>
  );
}
