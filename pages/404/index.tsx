import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.notFoundLabel}>Content Not Found</div>
      </main>
      <Footer />
    </div>
  );
}
