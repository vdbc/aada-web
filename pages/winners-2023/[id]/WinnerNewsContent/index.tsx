import HtmlView from "../../../../components/HtmlView";
import { useAppSelector } from "../../../../store";
import { selectWinnersDetail } from "../../../../store/modules/winnersNews";
import styles from "./styles.module.scss";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const { content } = useAppSelector(selectWinnersDetail(id)) || {};
  return (
    <div className={styles.container}>
      <HtmlView content={content} />
    </div>
  );
}
