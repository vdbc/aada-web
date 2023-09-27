import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppSelector, wrapper } from "../../store";
import {
  fetchAllNominate,
  fetchProjectNominate,
  selectNomintateEntryDetail,
  selectProjectIdsGroupByEntry,
  selectTotalProjects,
} from "../../store/modules/nominate";
import { selectIsLogged } from "../../store/modules/user";
import ProjectProcessOverview from "./ProjectProcessOverview";
import styles from "./styles.module.scss";

function EntryName({ id }: { id: string }) {
  const entryName = useAppSelector(selectNomintateEntryDetail(id))?.name;
  return <h2 className={styles.headerTitle}>{entryName}</h2>;
}

export default function _View() {
  const groupProjectIds = useAppSelector(selectProjectIdsGroupByEntry);

  return (
    <div className={styles.container}>
      <Head>
        <title>Status Overview</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          {groupProjectIds.map(({ entryId, projectIds }) => (
            <Fragment key={entryId}>
              <EntryName id={entryId} />
              {projectIds.map((projectId) => (
                <ProjectProcessOverview key={projectId} projectId={projectId} />
              ))}
            </Fragment>
          ))}
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
    if (!selectTotalProjects(store.getState())) {
      return {
        redirect: {
          statusCode: 301,
          destination: "/open-account",
        },
      };
    }
    await store.dispatch(fetchAllNominate());

    return {
      props: {},
    };
  }
);
