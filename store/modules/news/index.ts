import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keyBy } from "lodash";
import { RootState } from "../..";
import { NewsModel } from "../../../models/NewsModel";
import {
  fetchAllHighlight,
  fetchAllNews,
  fetchNewsDetail,
} from "../../../services/NewsService";

export interface NewsState {
  highlightIds: number[];
  newIds: number[];
  newsDetails: {
    [key: number]: NewsModel;
  };
}

const initialState: NewsState = {
  newsDetails: {},
  newIds: [],
  highlightIds: [],
};

export const getAllNews = createAsyncThunk<
  NewsModel[],
  void,
  { state: RootState }
>("news/getAllNews", async (_, store) => {
  return fetchAllNews();
});

export const getAllHighlightNews = createAsyncThunk<
  NewsModel[],
  void,
  { state: RootState }
>("news/getAllHighlightNews", async (_, store) => {
  return fetchAllHighlight();
});

export const getNewsDetail = createAsyncThunk<
  NewsModel,
  number,
  { state: RootState }
>("news/getNewsDetail", async (id, store) => {
  return fetchNewsDetail(id);
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.newIds = action.payload.map((item) => item.id);
        state.newsDetails = {
          ...state.newsDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(getAllHighlightNews.fulfilled, (state, action) => {
        state.highlightIds = action.payload.map((item) => item.id);
        state.newsDetails = {
          ...state.newsDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(getNewsDetail.fulfilled, (state, action) => {
        state.newsDetails = {
          ...state.newsDetails,
          [action.payload.id]: action.payload,
        };
      });
  },
});

export const selectNewsIds = (state: RootState) => state.news.newIds;
export const selectHighlightNewsIds = (state: RootState) =>
  state.news.highlightIds;
export const selectNewsDetails = (state: RootState) => state.news.newsDetails;

export const selectNewsDetail = (id: number) => (state: RootState) =>
  selectNewsDetails(state)[id];


export default newsSlice;
