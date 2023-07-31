import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keyBy } from "lodash";
import { RootState } from "../..";
import { WinnersModel } from "../../../models/NewsModel";
import { fetchAllWinners, fetchWinnersDetail } from "../../../services/WinnersService";

export interface WinnersState {

  winnerIds: number[];
  winnersDetails: {
    [key: number]: WinnersModel;
  };

}

const initialState: WinnersState = {
  winnerIds: [],
  winnersDetails: {},
};



export const getAllWinners = createAsyncThunk<
  WinnersModel[],
  void,
  { state: RootState }
>("winners/getAllWinners", async (_, store) => {
  return fetchAllWinners();
});



export const getWinnersDetail = createAsyncThunk<
  WinnersModel,
  number,
  { state: RootState }
>("winners/getWinnersDetail", async (id, store) => {
  return fetchWinnersDetail(id);
});

export const winnersSlice = createSlice({
  name: "winners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllWinners.fulfilled, (state, action) => {
        state.winnerIds = action.payload.map((item) => item.id);
        state.winnersDetails = {
          ...state.winnersDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(getWinnersDetail.fulfilled, (state, action) => {
        state.winnersDetails = {
          ...state.winnersDetails,
          [action.payload.id]: action.payload,
        };
      });
  },
});



export const selectWinnerIds = (state: RootState) => state.winners.winnerIds;
export const selectWinnersDetails = (state: RootState) => state.winners.winnersDetails;
export const selectWinnersDetail = (id: number) => (state: RootState) =>
  selectWinnersDetails(state)[id];

export default winnersSlice;
