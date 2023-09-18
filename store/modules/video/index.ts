import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { fetchAllGallery, fetchAllVideo, fetchGalleryDetail, fetchVideoDetail } from "../../../services/GalleryService";
import { GalleryModel } from "../../../models/GalleryModel";
import { keyBy } from "lodash";

export interface VideoState {
  videoIds: number[];
  videoDetails: {
    [key: string]: GalleryModel;
  };
}

const initialState: VideoState = {
  videoIds: [],
  videoDetails: {},
};
export const getAllVideo = createAsyncThunk<
  GalleryModel[],
  void,
  { state: RootState }
>("video/getAllVideo", async (_, store) => {
  return fetchAllVideo();
});

export const getVideoDetail = createAsyncThunk<
  GalleryModel,
  number,
  { state: RootState }
>("video/getVideoDetail", async (id, store) => {
  return fetchVideoDetail(id);
});
export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVideo.fulfilled, (state, action) => {
        // console.log('mylog in reducer video: ', action.payload);
        state.videoIds = action.payload.map((item) => item.id);
        state.videoDetails = {
          ...state.videoDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(getVideoDetail.fulfilled, (state, action) => {
        state.videoDetails = {
          ...state.videoDetails,
          [action.payload.id]: action.payload,
        };
      });
  },
});

export const selectVideoIds = (state: RootState) => state.video.videoIds;
export const selectVideoDetails = (state: RootState) => state.video.videoDetails;
export const selectVideoDetail = (id: number) => (state: RootState) =>
  selectVideoDetails(state)[id];


export default videoSlice;
