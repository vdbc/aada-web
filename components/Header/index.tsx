import { Dialog } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppSelector } from "../../store";
import { selectIsLogged, selectLastName } from "../../store/modules/user";
import LoginForm from "../LoginForm";
import styles from "./styles.module.scss";

enum HeaderPage {
  TheAward,
  Categories,
  Registration,
  GetInvolved,

  Dashboard,
  StatusOverview,
  YourSubmition,
  Account,
}

declare type HeaderDetail = {
  title: string;
  link: string;
};
const noLoggedTab = [
  {
    title: "THE AWARD",
    link: "/the-award",
  },
  {
    title: "CATEGORIES",
    link: "/categories",
  },
  {
    title: "REGISTRATION",
    link: "/registration",
  },
  {
    title: "GET INVOLVED",
    link: "/get-involved",
  },
];
const loggedInTab = [
  {
    title: "dashboard",
    link: "/dashboard",
  },
  {
    title: "Status Overview",
    link: "/overview",
  },
  {
    title: "Your Submission",
    link: "/your-submission",
  },
  {
    title: "Account",
    link: "/account",
  },
];

declare type HeaderProps = {
  tab?: HeaderPage;
};

export default function _View(props: HeaderProps) {
  const [isLogging, setLogging] = useState(false);
  const router = useRouter();

  const isLogged = useAppSelector(selectIsLogged);
  const lastName = useAppSelector(selectLastName);
  const tabs = isLogged ? loggedInTab : noLoggedTab;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="AADA Logo"
            width={170}
            height={56}
          />
        </Link>
        <div className={styles.spacer} />
        {tabs.map((tab) => (
          <Link
            key={tab.title}
            className={[
              styles.link,
              router.asPath == tab.link && isLogged ? styles.active : "",
            ].join(" ")}
            href={tab.link}
          >
            {tab.title}
          </Link>
        ))}
        {isLogged ? (
          <button className={styles.hello}>Hello {lastName}</button>
        ) : (
          <button
            className={styles.loginButton}
            onClick={() => setLogging(!isLogging)}
          >
            Login/Sign up
          </button>
        )}
      </div>
      <Dialog open={isLogging} onClose={() => setLogging(false)}>
        <LoginForm dismiss={() => setLogging(false)} />
      </Dialog>
    </div>
  );
}
