import { useAppSelector } from "../../../../store";
import { selectNewsDetail } from "../../../../store/modules/news";
import styles from "./styles.module.scss";

const tags = ["Hermes", "Xu hướng", "Milan Fashion Week"];

declare type ViewProps = {
  id: number;
};

export default function _View({ id }: ViewProps) {
  const { tags } = useAppSelector(selectNewsDetail(id)) || {};
  if (!tags || tags.length == 0) return null;

  return (
    <div className={styles.container}>
      <h3 className={styles.label}>Tags</h3>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button key={tag?.id} className={styles.tag}>
            {tag?.name}
          </button>
        ))}
      </div>
    </div>
  );
}
