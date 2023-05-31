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
} from "../../store/modules/nominate";
import { selectUserId } from "../../store/modules/user";
import InputProjectDetail from "./InputProjectDetail";
import styles from "./styles.module.scss";
import { ScoringTopBanner } from "../../components/TopBanner";
import InputOverview from "./InputOverview";
import HeaderScore from "../../components/HeaderScore";

import MenuProject from "../../components/MenuProject";
import { ProjectNominateEntry } from "../../models/NominateModel";

export default function _View(props: any) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
    dispatch(fetchAllNominate());
    dispatch(fetchAllNominateJudgement());
  }, [dispatch, userId]);
  const [listProject, setListProject] = useState([]);
  useEffect(() => {});

  const adminEntries = useAppSelector(selectAdminEntries);
  const reversedAdminEntries = adminEntries.slice().reverse();
  const route = useRouter();

  const [project, setProject] = useState<ProjectNominateEntry>();

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
              <ul className={styles.item}>
                {reversedAdminEntries.map((item) => (
                  <MenuProject
                    onSetProject={(project: ProjectNominateEntry) => {
                      setProject(project);
                    }}
                    key={item.id}
                    entry={item}
                  />
                ))}
              </ul>
            </div>
            {/* <SelectNominateEntry
              selectedProjectId={_selectedProjectId}
              onChanged={setActiveProject}
            /> */}
            {project && (
              <div className={styles.inputDetail}>
                <InputOverview project={project} />
                <InputProjectDetail project={project} />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
