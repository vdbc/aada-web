import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useAppSelector } from "../../store";
import { selectGalleryDetail, selectGalleryIds } from "../../store/modules/gallery";
import { ButtonLoadMore } from "../ButtonExplore";
import CardImage from "../CardImage";
import styles from "./styles.module.scss";

import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
import PhotoSwipe from '/photoswipe/photoswipe.esm.js';
import '/photoswipe/photoswipe.css';
import '/photoswipe/default-skin/default-skin.css';
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
  const [showAllImages, setShowAllImages] = useState(false);
  const [lightbox, setLightbox] = useState<PhotoSwipeLightbox | null>(null);

  useEffect(() => {
    const pswpModule = () => import('/photoswipe/photoswipe.esm.js');
    const lightboxOptions = {
      gallery: '#gallery--getting-started',
      children: 'a',
      pswpModule,
    };
    const newLightbox = new PhotoSwipeLightbox(lightboxOptions);
    setLightbox(newLightbox);
  }, []);
  function splitGalleriesToRows(_galleryIds: number[]) {
    const galleryIds = [..._galleryIds];
    const result: number[][] = [];

    const maxRows = showAllImages ? galleryIds.length : 2;

    for (let i = 0; i < maxRows; i++) {
      const rowIds = galleryIds.splice(0, 3);
      result.push(rowIds);
    }

    return result;
  }

  const galleriesIds = useAppSelector(selectGalleryIds);
  const [row1, row2, ...rows] = splitGalleriesToRows(galleriesIds);

  const handleLoadMore = () => {
    setShowAllImages(true);
  };

  return (
    <div className={styles.wrapper}>
      {galleriesIds.map((galleryId) => (
        <div key={galleryId} className={styles.box}>
          <AlbumBanner id={galleryId} />
          <div className={styles.content}>
            {row1 && row1.length > 0 && (
              <div className={styles.row}>
                {row1.map((id, index) => (
                  <CardImage
                    key={index}
                    id={id}
                    className={index === 1 ? styles.item2 : styles.item}
                    onClick={() => lightbox?.open(index)} // Open the lightbox on click
                  />
                ))}
              </div>
            )}
            {row2 && row2.length > 0 && (
              <div className={styles.row}>
                {row2.map((id, index) => (
                  <CardImage
                    key={index}
                    id={id}
                    className={index === 0 ? styles.item : styles.item2}
                    onClick={() => lightbox?.open(index + row1.length)} // Open the lightbox on click
                  />
                ))}
              </div>
            )}
          </div>
          <div className={styles.actions}>
            <ButtonLoadMore onClick={handleLoadMore}>Load More</ButtonLoadMore>
          </div>
        </div>
      ))}

      {/* PhotoSwipe Lightbox Gallery */}
      <div className="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started">
        {galleriesIds.map((galleryId) => {
          const gallery = useAppSelector(selectGalleryDetail(galleryId)) ?? {};
          const { images } = gallery;
          return images.map((image) => (
            <a
              key={image.id}
              href={image.url}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
            >
              <img src={image.thumbnailUrl} alt="" />
            </a>
          ));
        })}
      </div>
    </div>
  );
}