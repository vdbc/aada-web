import { SwipeableDrawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useAppSelector } from "../../../store";
import { selectIsLogged } from "../../../store/modules/user";
import { ValueChanged, VoidCallback } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type HeaderDetail = {
  title: string;
  link: string;
  onClick?: VoidCallback;
};
const noLoggedTab: HeaderDetail[] = [
  {
    title: "HOME PAGE",
    link: "/the-award",
  },
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

function MenuItem({ title, link, onClick }: HeaderDetail) {
  const router = useRouter();
  return (
    <Link
      key={title}
      className={[styles.link, router.route == link ? styles.active : ""].join(
        " "
      )}
      href={link}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}

declare type MenuProps = {
  isOpen: boolean;
  setOpen: ValueChanged<boolean>;
  onLogout: VoidCallback;
};

function HeaderMenu({ onClose }: { onClose: VoidCallback }) {
  const isLogged = useAppSelector(selectIsLogged);
  const logoLink = isLogged ? "/dashboard" : "/";
  return (
    <div className={styles.leftMenuHeader}>
      <Link href={logoLink}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="AADA Logo"
          width={170}
          height={56}
        />
      </Link>
      <button className={styles.buttonClose} onClick={onClose}>
        <MdClose size={24} />
      </button>
    </div>
  );
}

function LeftMenu({ isOpen, setOpen, onLogout }: MenuProps) {
  const isLogged = useAppSelector(selectIsLogged);
  const menus = isLogged ? loggedInTab : noLoggedTab;
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      className={styles.leftMenu}
    >
      <HeaderMenu onClose={() => setOpen(false)} />
      {menus.map((item) => (
        <MenuItem key={item.link} {...item} />
      ))}
      {isLogged && <MenuItem title="Log out" link="#" onClick={onLogout} />}
    </SwipeableDrawer>
  );
}

declare type HeaderProps = {
  onLogout: VoidCallback;
  onLogin: VoidCallback;
};

export default function HeaderMobile({ onLogout, onLogin }: HeaderProps) {
  const [isOpenLeftMenu, setOpenLeftMenu] = useState(false);
  const isLogged = useAppSelector(selectIsLogged);
  const logoLink = isLogged ? "/dashboard" : "/";
  const route = useRouter();
  function openPersonMenu() {
    if (isLogged) route.push("/account");
    else onLogin();
  }
  return (
    <div className={styles.mobile}>
      <LeftMenu
        isOpen={isOpenLeftMenu}
        setOpen={setOpenLeftMenu}
        onLogout={onLogout}
      />
      <button className={styles.button} onClick={() => setOpenLeftMenu(true)}>
        <HiMenu size={35} />
      </button>
      <Link href={logoLink} className={styles.logo}>
        <Image src="/logo-small.svg" alt="Logo" width={27} height={35} />
      </Link>
      <button onClick={openPersonMenu} className={styles.button}>
        <IoPersonCircleSharp size={35} />
      </button>
    </div>
  );
}
