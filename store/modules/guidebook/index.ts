import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { fetchAllGallery, fetchAllGuidebook, fetchAllVideo, fetchGalleryDetail, fetchGuidebookDetail } from "../../../services/GalleryService";
import { GalleryModel } from "../../../models/GalleryModel";
import { keyBy } from "lodash";

export interface GuidebookState {
  guidebookIds: number[];
  guidebookDetails: {
    [key: string]: GalleryModel;
  };
}

const initialState: GuidebookState = {
  guidebookIds: [],
  guidebookDetails: {},
};

export const getAllGuidebook = createAsyncThunk<
  GalleryModel[],
  void,
  { state: RootState }
>("guidebook/getAllGuidebook", async (_, store) => {

  return fetchAllGuidebook();
});


export const getGuidebookDetail = createAsyncThunk<
  GalleryModel,
  number,
  { state: RootState }
>("guidebook/getGuidebookDetail", async (id, store) => {
  return fetchGuidebookDetail(id);
});

export const guidebookSlice = createSlice({
  name: "guidebook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGuidebook.fulfilled, (state, action) => {
        console.log('mylog in reducer: ', action.payload);

        state.guidebookIds = action.payload.map((item) => item.id);
        state.guidebookDetails = {
          ...state.guidebookDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(getGuidebookDetail.fulfilled, (state, action) => {
        state.guidebookDetails = {
          ...state.guidebookDetails,
          [action.payload.id]: action.payload,
        };
      });
  },
});

export const selectGuidebookIds = (state: RootState) => state.guidebook.guidebookIds;
export const selectGuidebookDetails = (state: RootState) => state.guidebook.guidebookDetails;

export const selectGuidebookDetail = (id: number) => (state: RootState) =>
  selectGuidebookDetails(state)[id];


export default guidebookSlice;
