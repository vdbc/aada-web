import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { Nominate } from "../../../models/NominateModel";

export interface NominateState {
  nominateList: Nominate[];
}

const initialState: NominateState = {
  nominateList: [],
};

export const nominateSlice = createSlice({
  name: "nominate",
  initialState,
  reducers: {
    setNominates: (state, action: PayloadAction<Nominate[]>) => {
      state.nominateList = action.payload;
    },
  },
});

export const selectNominates = (state: RootState) =>
  state.nominate.nominateList;

export default nominateSlice;
