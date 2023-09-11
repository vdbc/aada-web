import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keyBy } from "lodash";
import { RootState } from "../..";
import { NewsModel } from "../../../models/NewsModel";
import {
  fetchAllHighlight,
  fetchAllNews,
} from "../../../services/NewsService";
import { fetchAllGallery, fetchGalleryDetail } from "../../../services/GalleryService";
import { GalleryModel } from "../../../models/GalleryModel";

export interface GalleryState {
  galleryIds: number[];
  galleryDetails: {
    [key: string]: GalleryModel;
  };
}

const initialState: GalleryState = {
  galleryIds: [],
  galleryDetails: {},
};

export const getAllGallery = createAsyncThunk<
  GalleryModel[],
  void,
  { state: RootState }
>("gallery/getAllGallery", async (_, store) => {
  return fetchAllGallery();
});

export const getGalleryDetail = createAsyncThunk<
  GalleryModel,
  string,
  { state: RootState }
>("gallery/getGalleryDetail", async (id, store) => {
  return fetchGalleryDetail(id);
});

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGallery.fulfilled, (state, action) => {
        state.galleryIds = action.payload.map((item) => item.id);
      })
      .addCase(getGalleryDetail.fulfilled, (state, action) => {
        state.galleryDetails = {
          ...state.galleryDetails,
          [action.payload.id]: action.payload,
        };
      });
  },
});

export const selectGalleryIds = (state: RootState) => state.gallery.galleryIds;
export const selectGalleryDetails = (state: RootState) => state.gallery.galleryDetails;

export const selectGalleryDetail = (id: number) => (state: RootState) =>
  selectGalleryDetails(state)[id];

export default gallerySlice;
