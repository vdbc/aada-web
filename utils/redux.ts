import { wrapper } from "../store";
import userSlice from "../store/modules/user";
import { getToken } from "./cookies";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const token = getToken(context);
    await store.dispatch(userSlice.actions.setToken(token));
    return {
      props: {},
    };
  }
);
