import Head from "next/head";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchProjectNominate } from "../../store/modules/nominate";
import { selectLastName, selectUserId } from "../../store/modules/user";
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
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
  }, [dispatch, userId]);

  const totalCompleted = useAppSelector(selectTotalCompleteProjects);
  const totalProjects = useAppSelector(selectTotalProjects);

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
            <OverviewBox
              number={4}
              title="updates"
              subTitle="in the last 7 days"
            />
            <OverviewBox
              number={12}
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
