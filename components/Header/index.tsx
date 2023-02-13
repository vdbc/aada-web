import { Dialog, SwipeableDrawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
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
const noLoggedTab: HeaderDetail[] = [
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

function MenuItem({ title, link }: HeaderDetail) {
  const router = useRouter();
  return (
    <Link
      key={title}
      className={[styles.link, router.route == link ? styles.active : ""].join(
        " "
      )}
      href={link}
    >
      {title}
    </Link>
  );
}

function HeaderMobile() {
  const [isOpen, setOpenMenu] = useState(false);
  return (
    <div className={styles.mobile}>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setOpenMenu(false)}
        onOpen={() => setOpenMenu(true)}
        className={styles.leftMenu}
      >
        <div className={styles.leftMenuHeader}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="AADA Logo"
              width={170}
              height={56}
            />
          </Link>
          <button
            className={styles.buttonClose}
            onClick={() => setOpenMenu(false)}
          >
            <MdClose size={24} />
          </button>
        </div>
        <MenuItem title="Home page" link="/" />
        {noLoggedTab.map((item) => (
          <MenuItem key={item.link} {...item} />
        ))}
      </SwipeableDrawer>
      <button className={styles.button} onClick={() => setOpenMenu(true)}>
        <HiMenu size={35} />
      </button>
      <Link href="/">
        <Image src="/logo-small.svg" alt="Logo" width={27} height={35} />
      </Link>
      <button className={styles.button}>
        <IoPersonCircleSharp size={35} />
      </button>
    </div>
  );
}

declare type HeaderProps = {
  tab?: HeaderPage;
};

export default function _View(props: HeaderProps) {
  const [isLogging, setLogging] = useState(false);
  const router = useRouter();

  const isLogged = useAppSelector(selectIsLogged);
  const tabs = isLogged ? loggedInTab : noLoggedTab;

  return (
    <div className={styles.container}>
      <HeaderMobile />
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
