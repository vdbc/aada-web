import {
  createAsyncThunk,
  createSlice,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { RootState, store } from "../..";
import { Organization, organizationEmpty } from "../../../models/Organization";
import { UserModel } from "../../../models/UserModel";
import {
  getOrganizationRegistered,
  updateOrganizationRegistered,
} from "../../../services/OrganizationService";
import { setToken } from "../../../utils/cookies";
import listenerMiddleware from "../../listener-middleware";

export interface UserState {
  user?: UserModel;
  organization: Organization;
  token: string;
}

const initialState: UserState = {
  token: "",
  organization: organizationEmpty,
};

export const fetchOrganizationRegistered = createAsyncThunk<
  Organization,
  void,
  { state: RootState }
>("user/fetchOrganizationRegistered", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return getOrganizationRegistered(token);
});

export const saveOrganizationRegistered = createAsyncThunk<
  void,
  Organization,
  { state: RootState }
>(
  "nominate/saveOrganization",
  debounce(async (organization: Organization, { dispatch }: any) => {
    const state = store.getState();
    const token = selectToken(state);

    updateOrganizationRegistered(organization, token);
  }, 1000)
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    setOrganization: (state, action: PayloadAction<Organization>) => {
      state.organization = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      setToken(action.payload);
    },
    organizationUpdated: (state, action: PayloadAction<Organization>) => {
      state.organization = action.payload;
    },
    logout: (state, action: PayloadAction) => {
      Object.assign(state, initialState);
      setToken();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrganizationRegistered.fulfilled, (state, action) => {
      state.organization = action.payload;
    });
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectUserId = (state: RootState) => state.user.user?.id;
export const selectUserEmail = (state: RootState) => state.user.user?.email;
export const selectFirstName = (state: RootState) => state.user.user?.firstName;
export const selectLastName = (state: RootState) => state.user.user?.lastName;
export const selectIsLogged = (state: RootState) => !!state.user.token;
export const selectToken = (state: RootState) => state.user.token;
export const selectOrganization = (state: RootState) => state.user.organization;

listenerMiddleware.startListening({
  actionCreator: userSlice.actions.organizationUpdated,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    store.dispatch(saveOrganizationRegistered(action.payload));
  },
});

listenerMiddleware.startListening({
  matcher: isRejected,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    if (action.error.code == "AUTH-01") {
      await store.dispatch(userSlice.actions.logout());
    }
  },
});

export default userSlice;
