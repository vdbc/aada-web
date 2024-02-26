import Link from "next/link";
import { useAppSelector } from "../../store";
import { selectGuidebookDetail } from "../../store/modules/guidebook";
import VdbcImage from "../VdbcImage";
import styles from "./styles.module.scss";

declare type GuideBookCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: GuideBookCardProps) {
  const { thumbnail, title, mediaType } =
    useAppSelector(selectGuidebookDetail(id)) || {};

  return (
    <Link
      href={`/media-center/pdf/${id}`}
      className={[styles.container, className || ""].join(" ")}
    >
      <div className={styles.thumbnail}>
        <div className={styles.fileType}>{mediaType}</div>
        <VdbcImage src={thumbnail} alt="Thumbnail" fill />
      </div>
      <div className={styles.title}>{title}</div>
    </Link>
  );
}
