import Image from "next/image";
import { useAppSelector } from "../../store";
import { selectNewsDetail } from "../../store/modules/news";
import ButtonLink from "../ButtonLink";
import styles from "./styles.module.scss";

declare type NewsCardProps = {
  id: number;
  className?: string;
};

export default function _View({ id, className }: NewsCardProps) {
  const { title, shortContent, thumbnail } =
    useAppSelector(selectNewsDetail(id)) ?? {};
  if (!id)
    return (
      <div
        className={[styles.container, className ?? "", styles.hidden].join(" ")}
      />
    );

  return (
    <div className={[styles.container, className ?? ""].join(" ")}>
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
            <ButtonLink href={`/news/${id}`}>Read more</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
