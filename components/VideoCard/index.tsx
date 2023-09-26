import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
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
    if (uri.hostname == "youtu.be") {
      return uri.pathname.replace(/^\//, "");
    }
    return uri.searchParams.get("v") || "";
  } catch (error) {
    return "";
  }
}

export default function VideoCard({ id, className }: AlbumCardProps) {
  useEffect(() => {
    const width = ref.current?.clientWidth || 0;
    if (!width) return;
    setWidth(width);
  });

  const video = useAppSelector(selectVideoDetail(id)) ?? {};
  const { title, description, url } = video;
  const ref = useRef<HTMLIFrameElement>(null);
  const [width, setWidth] = useState(600);
  const [playing, setPlaying] = useState(false);

  if (isEmpty(video)) return null;

  return (
    <div className={[styles.container, className].join(" ")} ref={ref}>
      <ReactPlayer
        width={width}
        height={(width * 9) / 16}
        url={url}
        onPlay={() => setPlaying(true)}
        // onPause={() => setPlaying(false)}
        controls
        playing={playing}
      />
      <div
        className={styles.content}
        style={{ display: playing ? "none" : undefined }}
        onClick={() => setPlaying(true)}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}
