import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  fetchAllNominate,
  fetchAllNominateJudgement,
  fetchProjectNominate,
  selectAdminEntries,
  selectProjectNomintateIds,
} from "../../store/modules/nominate";
import { selectUserId } from "../../store/modules/user";
import InputProjectDetail from "./InputProjectDetail";
import styles from "./styles.module.scss";
import { ScoringTopBanner } from "../../components/TopBanner";
import InputOverview from "./InputOverview";
import HeaderScore from "../../components/HeaderScore";
import SelectNominateEntry from "./SelectNominateEntry";

export default function _View(props: any) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
    dispatch(fetchAllNominate());
    dispatch(fetchAllNominateJudgement());
  }, [dispatch, userId]);
  const projectIds = useAppSelector(selectProjectNomintateIds);
  const adminEntries = useAppSelector(selectAdminEntries);
  const route = useRouter();
  const paramProjectId = parseInt(route.query["project"]?.toString() ?? "0");
  const activeProjectId = projectIds.includes(paramProjectId)
    ? paramProjectId
    : projectIds[0];
  const [selectedProjectId, setActiveProject] = useState(activeProjectId);
  const _selectedProjectId = selectedProjectId || projectIds[0];

  console.log(adminEntries);
  return (
    <div className={styles.container}>
      <Head>
        <title>Scoring Board</title>
      </Head>

      <main className={styles.main}>
        <HeaderScore />
        <ScoringTopBanner />
        <div className={styles.bodyPage}>
          <div className={styles.detail}>
            <div className={styles.selectNominateEntry}>
              <ul className={styles.item}>
                {adminEntries.map((entry) => (
                  <li key={entry.id}>{entry.name}</li>
                ))}
              </ul>
            </div>
            <SelectNominateEntry
              selectedProjectId={_selectedProjectId}
              onChanged={setActiveProject}
            />
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
