import { wrapper } from "../store";
import userSlice from "../store/modules/user";
import { getToken, setCookieContext } from "./cookies";

export const getInitialAppProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    setCookieContext(context.ctx);
    const token = getToken(context.ctx);
    await store.dispatch(userSlice.actions.setToken(token));

    return {
      pageProps: {},
    };
  }
);
