import { Dialog } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import userSlice, {
  selectIsLogged,
  selectLastName,
} from "../../store/modules/user";
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
    link: "/status-overview",
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
        <Link href={isLogged ? "/dashboard" : "/"}>
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
              router.route == tab.link && isLogged ? styles.active : "",
            ].join(" ")}
            href={tab.link}
          >
            {tab.title}
          </Link>
        ))}
        {isLogged ? (
          <UserMenu />
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

function UserMenu() {
  const lastName = useAppSelector(selectLastName);
  const dispatch = useAppDispatch();
  const route = useRouter();

  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.userMenuContainer}>
      <div className={isActive ? styles.active : styles.inactive}>
        <button className={styles.title} onClick={() => setActive(!isActive)}>
          Hello {lastName}
        </button>
        {isActive && (
          <div className={styles.menus}>
            <button
              onClick={() => {
                dispatch(userSlice.actions.logout());
                setActive(false);
                route.push("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
