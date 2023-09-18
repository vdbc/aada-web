
import Link from "next/link";
import { useAppSelector } from "../../store";
import { selectGalleryDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";
import Image from "next/image";


declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const { images } = useAppSelector(selectGalleryDetail(id)) || {};
  if (!images || images.length == 0) return null;

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <div className={styles.thumbnail}>
          <div>
            {images.map((image) => (
              <Image
                key={image.id}
                src={
                  `${image.url}?format=webp&size=w500` || "/default-thumbnail.jpg"
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


