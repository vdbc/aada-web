import { Dialog } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import userSlice, { selectIsLogged } from "../../store/modules/user";
import LoginForm from "../LoginForm";
import HeaderMobile from "./HeaderMobile";
import styles from "./styles.module.scss";
import UserMenu from "./UserMenu";

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
const noLoggedTab: HeaderDetail[] = [
  {
    title: "The Award",
    link: "/the-award",
  },
  {
    title: "Categories",
    link: "/categories",
  },
  {
    title: "Registration",
    link: "/registration",
  },
  {
    title: "Get Involved",
    link: "/get-involved",
  },
];
const loggedInTab: HeaderDetail[] = [
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
  const tabs = isLogged ? loggedInTab : noLoggedTab;
  const dispatch = useAppDispatch();

  function logout() {
    dispatch(userSlice.actions.logout());
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <HeaderMobile onLogout={logout} onLogin={() => setLogging(true)} />
      <div className={styles.pcContainer}>
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
            <UserMenu onLogout={logout} />
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
    </div>
  );
}
