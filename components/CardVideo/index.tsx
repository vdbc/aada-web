
import Link from "next/link";
import { useAppSelector } from "../../store";
import { selectGalleryDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";
import Image from "next/image";
import { selectVideoDetail } from "../../store/modules/video";


declare type ViewProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: ViewProps) {
  const { images } = useAppSelector(selectVideoDetail(id)) || {};
  if (!images || images.length == 0) return null;

  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <Link href={`/`}>
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
      </Link>
    </div>
  );
}


