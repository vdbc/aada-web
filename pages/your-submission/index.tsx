import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppSelector, wrapper } from "../../store";
import {
  fetchAllNominate,
  fetchProjectNominate,
  selectProjectNomintateIds,
} from "../../store/modules/nominate";
import { selectIsLogged } from "../../store/modules/user";
import InputOverview from "./InputOverview";
import InputProjectDetail from "./InputProjectDetail";
import SelectNominateEntry from "./SelectNominateEntry";
import styles from "./styles.module.scss";

export default function _View(props: any) {
  const projectIds = useAppSelector(selectProjectNomintateIds);
  const route = useRouter();
  const paramProjectId = parseInt(route.query["project"]?.toString() ?? "0");
  const activeProjectId = projectIds.includes(paramProjectId)
    ? paramProjectId
    : projectIds[0];

  const [selectedProjectId, setActiveProject] = useState(activeProjectId);
  const _selectedProjectId = selectedProjectId || projectIds[0];

  return (
    <div className={styles.container}>
      <Head>
        <title>Status Overview</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <div style={{ height: 72 }} />
          <InputOverview projectId={_selectedProjectId} />
          <div className={styles.detail}>
            <div className={styles.selectNominateEntry}>
              <SelectNominateEntry
                selectedProjectId={_selectedProjectId}
                onChanged={setActiveProject}
              />
            </div>
            <div className={styles.inputDetail}>
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
    const isLoggedIn = selectIsLogged(store.getState());
    if (!isLoggedIn) {
      return {
        redirect: {
          statusCode: 301,
          destination: "/",
        },
      };
    }
    await store.dispatch(fetchProjectNominate());
    await store.dispatch(fetchAllNominate());

    return {
      props: {},
    };
  }
);
