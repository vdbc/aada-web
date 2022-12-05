import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppSelector } from "../../store";
import { selectLastName } from "../../store/modules/user";
import AccountInfo from "./AccountInfo";
import ContactSupport from "./ContactSupport";
import OverviewBox from "./OverviewBox";
import RegistrationProcessOverview from "./RegistrationProcessOverview";
import styles from "./styles.module.scss";

export default function Home() {
  const lastName = useAppSelector(selectLastName);
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
            <OverviewBox number={9} title="Submissions" subTitle="in total" />
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
            <OverviewBox number={7} title="completed submissions" />
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
