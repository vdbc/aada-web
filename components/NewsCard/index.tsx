import Image from "next/image";
import ButtonLink from "../ButtonLink";
import styles from "./styles.module.scss";

declare type NewsCardProps = {
  title: string;
  shortContent: string;
  thumbnail: string;
};

export default function _View({
  title,
  shortContent,
  thumbnail,
}: NewsCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <div>
          <Image src={thumbnail} alt="Thumbnail" fill />
        </div>
      </div>
      <div className={styles.overview}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.desc}>{shortContent}</div>
          <div className={styles.actions}>
            <ButtonLink href="/news/id">Read more</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
