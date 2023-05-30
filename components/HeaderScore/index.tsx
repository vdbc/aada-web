import { Dialog } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import userSlice, { selectIsLogged } from "../../store/modules/user";
import LoginForm from "../LoginForm";
import styles from "./styles.module.scss";
import UserMenu from "../Header/UserMenu";

export default function _View() {
  const [isLogging, setLogging] = useState(false);
  const router = useRouter();

  const isLogged = useAppSelector(selectIsLogged);

  const dispatch = useAppDispatch();

  function logout() {
    dispatch(userSlice.actions.logout());
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.pcContainer}>
        <div className={styles.header}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="AADA Logo"
            width={170}
            height={56}
          />

          <div className={styles.spacer} />

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
