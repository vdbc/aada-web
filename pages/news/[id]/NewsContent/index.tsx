import { useAppSelector } from "../../../../store";
import { selectNewsDetail } from "../../../../store/modules/news";
import { selectWinnersDetail } from "../../../../store/modules/winnersNews";
import styles from "./styles.module.scss";

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const { content } = useAppSelector(selectNewsDetail(id)) || {};
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
