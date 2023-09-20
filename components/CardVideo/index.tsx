
import Link from "next/link";
import { useAppSelector } from "../../store";
import { selectGalleryDetail } from "../../store/modules/gallery";
import styles from "./styles.module.scss";
import Image from "next/image";
import Video, { selectVideoDetail, selectVideoIds } from "../../store/modules/video";
import { isEmpty } from "lodash";
import YouTube from 'react-youtube';

import { ButtonLoadMore } from "../ButtonExplore";


declare type AlbumCardProps = {
  id: number;
  className?: string;
};

function AlbumBanner({ id, className }: AlbumCardProps) {
  const videos = useAppSelector(selectVideoDetail(id)) ?? {};
  const { title, description } = videos;
  if (isEmpty(videos))
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
function CardVideo({ id, className }: AlbumCardProps) {
  const videos = useAppSelector(selectVideoDetail(id)) ?? {};
  const { title, description, url } = videos;
  if (isEmpty(videos))
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );
  const youtubeVideoId = extractYoutubeVideoId(url);

  function extractYoutubeVideoId(url: string) {
    const videoIdRegex =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/i;
    const match = url.match(videoIdRegex);
    return match && match[1] ? match[1] : ""; // Return an empty string if video ID is not found
  }
  return (
    <div className={styles.thumbnail}>
      <div>
        {url.includes('youtube.com') ? (
          <YouTube videoId={youtubeVideoId} />
        ) : (
          <video key={id} src={`${url}?size=w500`} />
        )}
      </div>
    </div>
  );
}
export default function _View() {
  function splitVideoToRows(_videoIds: number[]) {
    const videoIds = [..._videoIds];
    const result: number[][] = [];

    while (videoIds.length > 0) {
      const rowIds = videoIds.splice(0, 2);
      result.push(rowIds);
    }

    return result;
  }
  const videoIds = useAppSelector(selectVideoIds);
  const [row1, row2, ...rows] = splitVideoToRows(videoIds);
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        {/* {videoIds.map((videoIds) => ( */}
        <div className={styles.row}>
          <h3>Media Center/ <b>PDF Assets</b></h3>
          <h2>PDF Assets</h2>
          <p>On the evening of August 14th, the Winners’ Night of the 2023 Asia Architecture Design Awards (AADA) stood in the spotlight at Marina Bay Sands - a pinnacle of architectural brilliance within Singapore, Asia’s vanguard metropolis.</p>
          <div className={styles.content}>
            {row1 && row1.length > 0 && (
              <div className={styles.row}>
                <CardVideo id={row1[0]} className={styles.item2} />
                <CardVideo id={row1[1]} className={styles.item} />
              </div>
            )}
            {row2 && row2.length > 0 && (
              <div className={styles.row}>
                <CardVideo id={row2[0]} className={styles.item} />

                <CardVideo id={row2[2]} className={styles.item} />
              </div>
            )}
            {rows.map((ids, index) => (
              <div key={index} className={styles.row}>
                {ids.map((id) => (
                  <CardVideo key={id} id={id} className={styles.item} />
                ))}
              </div>
            ))}
          </div>

        </div>
        {/* ))} */}

        <div className={styles.actions}>
          <ButtonLoadMore >EXPLORE ALL </ButtonLoadMore>
        </div>

      </main>

    </div>
  );
}


