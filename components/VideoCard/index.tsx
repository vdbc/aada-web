import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../store";
import { selectVideoDetail } from "../../store/modules/video";
import styles from "./styles.module.scss";

declare type AlbumCardProps = {
  id: number;
  className?: string;
};

function getYoutubeIdFromUrl(url: string) {
  try {
    const uri = new URL(url);
    return uri.searchParams.get("v") || "";
  } catch (error) {
    return "";
  }
}

export default function VideoCard({ id, className }: AlbumCardProps) {
  const video = useAppSelector(selectVideoDetail(id)) ?? {};
  const { title, description, url } = video;
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(300);
  const [src, setSrc] = useState("");

  if (isEmpty(video)) return null;

  const youtubeId = getYoutubeIdFromUrl(url);
  useEffect(() => {
    const width = ref.current?.clientWidth || 0;
    if (!width) return;
    setHeight((width * 9) / 16);
    setSrc(`https://www.youtube.com/embed/${youtubeId}`);
  });

  return (
    <div
      className={[styles.container, className].join(" ")}
      ref={ref}
      style={{ height }}
    >
      <iframe
        className={styles.iframe}
        title={title}
        src={src}
        allow="encrypted-media"
        allowFullScreen
      />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
