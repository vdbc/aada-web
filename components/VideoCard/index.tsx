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
    <iframe
      ref={ref}
      className={[styles.iframe, className].join(" ")}
      title={title}
      src={src}
      allow="encrypted-media"
      allowFullScreen
      style={{ height }}
    />
  );
}
