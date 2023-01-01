import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  fetchAllNominate,
  fetchProjectNominate,
  selectProjectNomintateIds,
} from "../../store/modules/nominate";
import { selectUserId } from "../../store/modules/user";
import InputOverview from "./InputOverview";
import InputProjectDetail from "./InputProjectDetail";
import SelectNominateEntry from "./SelectNominateEntry";
import styles from "./styles.module.scss";

export default function _View(props: any) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
    dispatch(fetchAllNominate());
  }, [dispatch, userId]);
  const projectIds = useAppSelector(selectProjectNomintateIds);
  const [selectedProjectId, setActiveProject] = useState(projectIds[0]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Status Overview</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <div style={{ height: 72 }} />
          <InputOverview projectId={selectedProjectId} />
          <div className={styles.detail}>
            <div className={styles.selectNominateEntry}>
              <SelectNominateEntry
                selectedProjectId={selectedProjectId}
                onChanged={setActiveProject}
              />
            </div>
            <div className={styles.inputDetail}>
              <InputProjectDetail projectId={selectedProjectId} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
