import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../../../store";
import { selectWinnersDetail } from "../../../../store/modules/winnersNews";
import { getWinnersFlugId } from "../../../../utils/news";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const winnerNews = useAppSelector(selectWinnersDetail(id)) ?? {};

  // TODO update link
  const url = `https://aadawards.com//winners-2023/${getWinnersFlugId(winnerNews)}`;
  return (
    <div className={styles.container}>
      <div className={styles.label}>Share</div>
      <div className={styles.actions}>
        <FacebookShareButton url={url} className={styles.icon}>
          <FacebookIcon round />
        </FacebookShareButton>
        <TwitterShareButton className={styles.icon} url={url}>
          <TwitterIcon round />
        </TwitterShareButton>
        <LinkedinShareButton className={styles.icon} url={url}>
          <LinkedinIcon round />
        </LinkedinShareButton>
      </div>
      <div className={styles.ref}>by Asia Architecture and Design Awards</div>
    </div>
  );
}
