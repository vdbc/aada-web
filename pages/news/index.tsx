import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import { NewsTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <NewsTopBanner />
        <div className={styles.content}>
          <h1>LATEST UPDATE FROM AADA</h1>
          <div className={styles.row}>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item2}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item2}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item2}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
            <div className={styles.item}>
              <NewsCard
                thumbnail="/thumb.png"
                title="Career opportunities for architecture"
                shortContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, psum dolor sit amet, psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et..."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
