import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { Organization } from "../../../models/Organization";
import { UserModel } from "../../../models/UserModel";

export interface UserState {
  user?: UserModel;
  organization?: Organization;
  token: string;
}

const initialState: UserState = {
  token: "",
};

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
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectLastName = (state: RootState) => state.user.user?.lastName;
export const selectIsLogged = (state: RootState) => !!state.user.token;
export const selectToken = (state: RootState) => state.user.token;

export default userSlice;
