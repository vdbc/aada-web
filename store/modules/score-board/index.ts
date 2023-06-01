import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { RootState, store } from "../..";
import { ProjectScore } from "../../../models/ProjectScoreModel";
import ScoreService from "../../../services/ScoreService";
import listenerMiddleware from "../../listener-middleware";
import { selectToken } from "../user";

export interface ScoreBoardState {
  details: {
    [key: number]: ProjectScore;
  };
}

const initialState: ScoreBoardState = { details: {} };

export const fetchProjectScore = createAsyncThunk<
  ProjectScore,
  number,
  { state: RootState }
>("score-board/fetchProjectScore", async (projectId, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return ScoreService.fetchProjectScore(projectId, token);
});

export const saveProjectScoreAsync = createAsyncThunk<
  void,
  ProjectScore,
  { state: RootState }
>(
  "score-board/saveProjectScoreAsync",
  debounce(async (projectScore: ProjectScore, { dispatch }: any) => {
    const state = store.getState();
    const token = selectToken(state);

    ScoreService.saveProjectScore(projectScore, token);
  }, 1000)
);
export const submitProjectScore = createAsyncThunk<
  ProjectScore,
  ProjectScore,
  { state: RootState }
>("score-board/submitProjectScore", async (project, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return ScoreService.confirmSubmitProject(project, token);
});

export const scoreBoardSlice = createSlice({
  name: "score-board",
  initialState,
  reducers: {
    projectScoreUpdated: (state, action: PayloadAction<ProjectScore>) => {
      state.details = {
        ...state.details,
        [action.payload.projectId]: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectScore.fulfilled, (state, action) => {
        state.details[action.payload.projectId] = action.payload;
      })
      .addCase(submitProjectScore.fulfilled, (state, action) => {
        state.details[action.payload.projectId] = action.payload;
      });
  },
});

export const selectProjectScoreDetail = (id: number) => (state: RootState) =>
  state.scoreBoard?.details[id];

listenerMiddleware.startListening({
  actionCreator: scoreBoardSlice.actions.projectScoreUpdated,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    store.dispatch(saveProjectScoreAsync(action.payload));
  },
});

export default scoreBoardSlice;
