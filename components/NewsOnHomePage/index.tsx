import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  getAllHighlightNews,
  selectHighlightNewsIds,
} from "../../store/modules/news";
import NewsCard from "../NewsCard";
import styles from "./styles.module.scss";

export default function _View() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllHighlightNews());
  }, [dispatch]);
  const newsIds = useAppSelector(selectHighlightNewsIds);

  return (
    <div className={styles.container}>
      <h1>LATEST NEWS</h1>
      <div className={styles.row}>
        <NewsCard id={newsIds[0]} className={styles.item} />
        <NewsCard id={newsIds[1]} className={styles.item2} />
        <NewsCard id={newsIds[2]} className={styles.item} />
      </div>
      {newsIds.length > 3 && (
        <div className={styles.row}>
          <NewsCard id={newsIds[3]} className={styles.item2} />
          <NewsCard id={newsIds[4]} className={styles.item2} />
        </div>
      )}

      <Link href="/news" className={styles.button}>
        See More
      </Link>
    </div>
  );
}
