import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HeaderScore from "../../components/HeaderScore";
import { ScoringTopBanner } from "../../components/TopBanner";
import { useAppDispatch, useAppSelector, wrapper } from "../../store";
import {
  fetchAllNominate,
  fetchAllProjects,
  selectAllProjectIds,
} from "../../store/modules/nominate";
import InputOverview from "./InputOverview";
import InputProjectDetail from "./InputProjectDetail";
import styles from "./styles.module.scss";

import { fetchProjectScore } from "../../store/modules/score-board";
import SelectNominateEntry from "./SelectNominateEntry";

export default function _View(props: any) {
  const projectIds = useAppSelector(selectAllProjectIds);
  const route = useRouter();
  const paramProjectId = parseInt(route.query["project"]?.toString() ?? "0");
  const activeProjectId = projectIds.includes(paramProjectId)
    ? paramProjectId
    : projectIds[0];
  const [selectedProjectId, setActiveProject] = useState(activeProjectId);
  const _selectedProjectId = selectedProjectId || projectIds[0];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProjectScore(_selectedProjectId));
  }, [_selectedProjectId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Scoring Board</title>
      </Head>

      <main className={styles.main}>
        <HeaderScore />
        <ScoringTopBanner />
        <div className={styles.bodyPage}>
          <div className={styles.wrapperDiscover}>
            <h2 className={styles.discover}>DISCOVER ALL NOMINEES</h2>
          </div>
          <div className={styles.detail}>
            <div className={styles.selectNominateEntry}>
              <SelectNominateEntry
                selectedProjectId={_selectedProjectId}
                onChanged={setActiveProject}
              />
            </div>
            <div className={styles.inputDetail}>
              <InputOverview projectId={_selectedProjectId} />
              <InputProjectDetail projectId={_selectedProjectId} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(fetchAllProjects());
    await store.dispatch(fetchAllNominate());
    return {
      props: {},
    };
  }
);
