import { Dialog } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "../LoginForm";
import styles from "./styles.module.scss";

export default function Header() {
  const [isLogging, setLogging] = useState(false);
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
        <Link className={styles.link} href="/the-award">
          THE AWARD
        </Link>
        <Link className={styles.link} href="/categories">
          CATEGORIES
        </Link>
        <Link className={styles.link} href="/registration">
          REGISTRATION
        </Link>
        <Link className={styles.link} href="/get-involved">
          GET INVOLVED
        </Link>
        <button
          className={styles.loginButton}
          onClick={() => setLogging(!isLogging)}
        >
          Login/Sign up
        </button>
      </div>
      <Dialog open={isLogging} onClose={() => setLogging(false)}>
        <LoginForm />
      </Dialog>
    </div>
  );
}
