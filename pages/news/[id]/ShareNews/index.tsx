import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import { useAppSelector } from "../../../../store";
import { selectNewsDetail } from "../../../../store/modules/news";
import styles from "./styles.module.scss";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const news = useAppSelector(selectNewsDetail(id)) ?? {};

  const url = location.href;
  return (
    <div className={styles.container}>
      <div className={styles.label}>Share</div>
      <div className={styles.actions}>
        <FacebookShareButton url={url} className={styles.icon}>
          <FacebookIcon round />
        </FacebookShareButton>
        <LinkedinShareButton className={styles.icon} url={url}>
          <LinkedinIcon round />
        </LinkedinShareButton>
      </div>
      <div className={styles.ref}>by Asia Architecture and Design Awards</div>
    </div>
  );
}
