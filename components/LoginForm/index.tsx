import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { login } from "../../services/UserService";
import { useAppDispatch } from "../../store";
import userSlice from "../../store/modules/user";
import { VoidCallback } from "../../utils/interface";
import { Toast } from "../../utils/toast";
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
  const route = useRouter();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    setLoading(true);
    try {
      const authModel = await login(username, password);
      dispatch(userSlice.actions.setUser(authModel.user));
      dispatch(userSlice.actions.setToken(authModel.token));
      dismiss();
      route.push("/dashboard");
    } catch (err: any) {
      Toast.error(err?.message ?? "");
    }

    setLoading(false);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <div className={styles.container}>
        <form className={styles.wrapper} onSubmit={handleLogin}>
          <div className={styles.title}>SIGN IN WITH YOUR AADA ACCOUNT</div>
          <input
            placeholder="Email"
            className={styles.input}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            placeholder="Password"
            className={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className={[
              styles.button,
              canLogin ? styles.active : styles.inactive,
            ].join("")}
            disabled={!canLogin}
            type="submit"
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
        </form>
      </div>
    </ThemeProvider>
  );
}
