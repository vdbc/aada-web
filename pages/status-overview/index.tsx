import Head from "next/head";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  fetchProjectNominate,
  selectProjectNomintateIds,
} from "../../store/modules/nominate";
import { selectUserId } from "../../store/modules/user";
import ProjectProcessOverview from "./ProjectProcessOverview";
import styles from "./styles.module.scss";

export default function _View() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
  }, [dispatch, userId]);

  const projectIds = useAppSelector(selectProjectNomintateIds);

  return (
    <div className={styles.container}>
      <Head>
        <title>Status Overview</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <h2 className={styles.headerTitle}>BEST ARCHITECTURE DESIGN</h2>
          {projectIds.map((projectId) => (
            <ProjectProcessOverview key={projectId} projectId={projectId} />
          ))}
          {/* <ProjectProcessOverview />
          <ProjectProcessOverview /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
