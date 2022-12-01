import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { login } from "../../services/UserService";
import { useAppDispatch } from "../../store";
import userSlice from "../../store/modules/user";
import { VoidCallback } from "../../utils/interface";
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

declare type Props = {
  dismiss: VoidCallback;
};

export default function _View({ dismiss }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const canLogin = username && password && !isLoading;
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    if (isLoading) return;
    setLoading(true);
    try {
      const authModel = await login(username, password);
      dispatch(userSlice.actions.setUser(authModel.user));
      dispatch(userSlice.actions.setToken(authModel.token));
      dismiss();
    } catch (err: any) {
      alert(err?.message ?? "");
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>SIGN IN WITH YOUR AADA ACCOUNT</div>
          <input
            placeholder="Email"
            className={styles.input}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            placeholder="Password"
            className={styles.input}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className={[
              styles.button,
              canLogin ? styles.active : styles.inactive,
            ].join("")}
            onClick={canLogin ? handleLogin : undefined}
          >
            Sign in
          </button>
          <div className={styles.forgotPassword}>
            <Link href="#" className={styles.link}>
              Forgot your password?
            </Link>
          </div>
          <div className={styles.titleRegister}>Not an AADA member?</div>
          <Link
            href="/open-account"
            className={styles.button}
            onClick={() => dismiss()}
          >
            Create your account
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
