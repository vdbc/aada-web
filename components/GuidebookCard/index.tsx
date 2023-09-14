
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

declare type GuideBookCardProps = {

  url: string;
  title: string;
};

export default function _View({ url, title }: GuideBookCardProps) {
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
          </div>
          <div className={styles.title}>
            <div>{title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
