import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { fetchAllGallery, fetchAllVideo, fetchGalleryDetail } from "../../../services/GalleryService";
import { GalleryModel } from "../../../models/GalleryModel";
import { keyBy } from "lodash";

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
        // console.log('mylog in reducer: ', action.payload);

        state.galleryIds = action.payload.map((item) => item.id);
        state.galleryDetails = {
          ...state.galleryDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
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
