import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../../store";
import { selectGalleryDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";

declare type ViewProps = {
  id: number;
  className?: string;
  onClick?: () => void;
};

export default function _View({ id, className, onClick }: ViewProps) {
  const { images } = useAppSelector(selectGalleryDetail(id)) || {};
  if (!images || images.length == 0) return null;

  return (
    <div className={[styles.container, className ?? ""].join(" ")} onClick={onClick}>
      <Link href={`/`}>
        <div className={styles.thumbnail}>
          <div>
            {images.map((image) => (
              <Image
                key={image?.id}
                src={
                  `${image?.url}?format=webp&size=w500` ||
                  "/default-thumbnail.jpg"
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