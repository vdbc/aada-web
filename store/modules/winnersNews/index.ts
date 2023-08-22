import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { debounce, keyBy } from "lodash";
import { RootState, store } from "../..";
import { AllWinnersResponse, WinnerNewsModel, } from "../../../models/NewsModel";
import { fetchAllWinners, fetchWinnersDetail } from "../../../services/WinnerNewsService";
import { selectToken } from "../user";

export interface WinnersState {

  winnerIds: number[];
  winnersDetails: {
    [key: number]: WinnerNewsModel;
  };

}

const initialState: WinnersState = {
  winnerIds: [],
  winnersDetails: {},
};

export const getAllWinners = createAsyncThunk<
  AllWinnersResponse,
  void,
  { state: RootState }
>("winners/getAllWinners", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return fetchAllWinners(token);
});

export const getWinnersDetail = createAsyncThunk<
  WinnerNewsModel,
  number,
  { state: RootState }
>("winners/getWinnersDetail", async (id, { getState }) => {
  const state = getState();
  const token = selectToken(state);
  return fetchWinnersDetail(id, token);
});

export const winnersSlice = createSlice({
  name: "winners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllWinners.fulfilled, (state, action) => {
        state.winnerIds = action.payload.data.map((item) => item.id);
        state.winnersDetails = {
          ...state.winnersDetails,
          ...keyBy(action.payload.data, (item) => item.id),
        };
      })
      .addCase(getWinnersDetail.fulfilled, (state, action) => {
        const winnersDetail = action.payload;

        if (winnersDetail && winnersDetail.id) {
          state.winnersDetails = {
            ...state.winnersDetails,
            [winnersDetail.id]: winnersDetail,
          };
        }
      });
  },
});



export const selectWinnerIds = (state: RootState) => state.winners.winnerIds;
export const selectWinnerNewsDetails = (state: RootState) => state.winners.winnersDetails;
export const selectWinnerNewsDetail = (id: number) => (state: RootState) =>
  selectWinnerNewsDetails(state)[id];

export default winnersSlice;
