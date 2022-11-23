import {
  Button,
  createTheme,
  TextField,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";
import styles from "./styles.module.scss";

const lightTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    allVariants: {
      color: "rgba(166, 127, 86, 0.3)",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
        input: {
          color: "white",
          borderStyle: "none",
          "&::before": {
            borderBottom: "1px solid red;",
          },
        },
      },
    },
  },
});

export default function _View() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={lightTheme}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>SIGN IN WITH YOUR AADA ACCOUNT</div>
          <input placeholder="Email" className={styles.input} />
          <input placeholder="Password" className={styles.input} />
          <button>Sign in</button>
          <Link href="#" className={styles.link}>
            Forgot your password?
          </Link>
          <div className={styles.termPolicy}>
            By clicking "Sign in", Google, Facebook or Apple ID you agree to the
            Terms of use and Privacy policy and agree to receive newsletters
            from Asia Architecture Design Awards.
          </div>
          <div className={styles.titleRegister}>NOT AN AADA MEMBER?</div>
          <div className={styles.registerButtonWrapper}>
            <Link href="/open-account" className={styles.button}>
              Create your account
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
