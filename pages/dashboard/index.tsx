import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppSelector, wrapper } from "../../store";
import {
  fetchProjectNominate,
  selectDeadline,
} from "../../store/modules/nominate";
import {
  fetchOrganizationRegistered,
  selectLastName,
} from "../../store/modules/user";
import AccountInfo from "./AccountInfo";
import ContactSupport from "./ContactSupport";
import OverviewBox from "./OverviewBox";
import RegistrationProcessOverview, {
  selectTotalCompleteProjects,
  selectTotalProjects,
} from "./RegistrationProcessOverview";
import styles from "./styles.module.scss";

export default function Home() {
  const lastName = useAppSelector(selectLastName);

  const totalCompleted = useAppSelector(selectTotalCompleteProjects);
  const totalProjects = useAppSelector(selectTotalProjects);
  const deadline = useAppSelector(selectDeadline);
  const diff = deadline.getTime() - Date.now();
  const daysLeft = Math.round((diff > 0 ? diff : 0) / 86400000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <h2 className={styles.headerTitle}>Hello, {lastName}</h2>
          <div className={styles.headerDescription}>
            Here is where you will view a summary of your submissions status,
            deadlines, and more.
          </div>
          <div className={styles.overviews}>
            <OverviewBox
              number={totalProjects}
              title="Submissions"
              subTitle="in total"
            />
            {/* <OverviewBox
              number={4}
              title="updates"
              subTitle="in the last 7 days"
            /> */}
            <OverviewBox
              number={daysLeft}
              title="Days left"
              subTitle="until due date"
            />
            <OverviewBox
              number={totalCompleted}
              title="completed submissions"
            />
          </div>
          <RegistrationProcessOverview />
          <div className={styles.userInfoAndContact}>
            <AccountInfo />
            <ContactSupport />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(fetchProjectNominate());
    await store.dispatch(fetchOrganizationRegistered());

    return {
      props: {},
    };
  }
);
