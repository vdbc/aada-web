
import Link from "next/link";
import { useAppSelector } from "../../store";
import { selectGalleryDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";
import Image from "next/image";


declare type ViewProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: ViewProps) {
  const { images } = useAppSelector(selectGalleryDetail(id)) || {};
  if (!images || images.length == 0) return null;
  // console.log("log news", images);
  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
      <Link href={`/`}>
        <div className={styles.thumbnail}>
          <div>
            {images.map((image) => (
              <Image
                key={image?.id}
                src={
                  `${image?.url}?format=webp&size=w500` || "/default-thumbnail.jpg"
                }
                alt="Thumbnail"
                fill
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}


