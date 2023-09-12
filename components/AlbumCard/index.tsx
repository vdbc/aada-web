import { isEmpty } from "lodash";
import Image from "next/image";
import { useAppSelector } from "../../store";

import Link from "next/link";
import { selectWinnerNewsDetail } from "../../store/modules/winnersNews";
import { getWinnersFlugId } from "../../utils/news";
import styles from "./styles.module.scss";

declare type AlbumCardProps = {

  url: string;
  title: string;
};

export default function _View({ url, title }: AlbumCardProps) {



  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <div className={styles.thumbnail}>
          <div>
            <Image
              src={
                `${url}?format=webp&size=w500` || "/default-thumbnail.jpg"
              }
              alt="Thumbnail"
              fill
            />
            <div className={styles.title}>
              <div>{title}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
