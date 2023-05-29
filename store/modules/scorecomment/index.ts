import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keyBy } from "lodash";
import { Nominate, ProjectNominate } from "../../../models/NominateModel";
import {
  fetchProjectNominate,
  submitProject,
  fetchAllNominate,
  getFeePerEntry,
} from "../nominate";
import { RootState } from "../..";

const initialState: ProjectScoreState = {
  idea: { comment: "", score: 0 },
  impact: { comment: "", score: 0 },
  differentiation: { comment: "", score: 0 },
  function: { comment: "", score: 0 },
  innovation: { comment: "", score: 0 },
  isValidate: false,
};

export interface ScoreNominate {
  score: number;
  comment: string;
}
export interface ProjectScoreState {
  idea: ScoreNominate;
  impact: ScoreNominate;
  differentiation: ScoreNominate;
  function: ScoreNominate;
  innovation: ScoreNominate;
  isValidate?: boolean;
}

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    setIdea: (state, action: PayloadAction<ScoreNominate>) => {
      state.idea = action.payload;
    },
    setImpact: (state, action: PayloadAction<ScoreNominate>) => {
      state.impact = action.payload;
    },
    setDifferentiation: (state, action: PayloadAction<ScoreNominate>) => {
      state.differentiation = action.payload;
    },
    setFunction: (state, action: PayloadAction<ScoreNominate>) => {
      state.function = action.payload;
    },
    setInnovation: (state, action: PayloadAction<ScoreNominate>) => {
      state.innovation = action.payload;
    },
    setIsValidate: (state, action: PayloadAction<boolean>) => {
      state.isValidate = action.payload;
    },
  },
});

export const ideaSelector = (state: RootState) => state.score.idea;
export const impactSelector = (state: RootState) => state.score.impact;
export const differetiationSelector = (state: RootState) =>
  state.score.differentiation;
export const functionSelector = (state: RootState) => state.score.function;
export const innovationSelector = (state: RootState) => state.score.innovation;
export const validatorSelector = (state: RootState) => state.score.isValidate;
export const {
  setIdea,
  setImpact,
  setDifferentiation,
  setFunction,
  setInnovation,
  setIsValidate,
} = scoreSlice.actions;
export default scoreSlice.reducer;
