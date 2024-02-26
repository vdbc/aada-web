import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { keyBy } from "lodash";
import { RootState } from "../..";
import { GalleryAlbum, GalleryModel } from "../../../models/GalleryModel";
import {
  fetchAllGallery,
  fetchGalleryDetail,
} from "../../../services/GalleryService";

export interface GalleryState {
  albumIds: number[];
  albumDetails: {
    [key: string]: GalleryModel;
  };
}

const initialState: GalleryState = {
  albumIds: [],
  albumDetails: {},
};

export const getAllGallery = createAsyncThunk<
  GalleryAlbum[],
  void,
  { state: RootState }
>("gallery/getAllGallery", async (_, store) => {
  return fetchAllGallery();
});

export const getGalleryDetail = createAsyncThunk<
  GalleryModel,
  number,
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
        state.albumIds = action.payload.map((item) => item.id);
        state.albumDetails = {
          ...state.albumDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(getGalleryDetail.fulfilled, (state, action) => {
        state.albumDetails = {
          ...state.albumDetails,
          [action.payload.id]: action.payload,
        };
      });
  },
});

export const selectAlbumIds = (state: RootState) => state.gallery.albumIds;
export const selectAlbumDetails = (state: RootState) =>
  state.gallery.albumDetails;

export const selectAlbumDetail = (id: number) => (state: RootState) =>
  selectAlbumDetails(state)[id];

export default gallerySlice;
