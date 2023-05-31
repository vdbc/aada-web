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

// export const fetchAllProjects = createAsyncThunk<
//   AllProjectsResponse,
//   void,
//   { state: RootState }
// >("score-board/fetchAllProjects", async (_, store) => {
//   const state = store.getState();
//   const token = selectToken(state);
//   return getAllProjects(token);
// });

// export const fetchAllNominate = createAsyncThunk<
//   Nominate[],
//   void,
//   { state: RootState }
// >("score-board/fetchAllNominate", async (_, store) => {
//   const state = store.getState();
//   const token = selectToken(state);
//   return getAllNominate(token);
// });

// export const getFeePerEntry = createAsyncThunk<
//   number,
//   void,
//   { state: RootState }
// >("score-board/getFeePerEntry", async (_, store) => {
//   const state = store.getState();
//   const token = selectToken(state);
//   return fetchFeePerEntry(token);
// });

// export const fetchAllNominateJudgement = createAsyncThunk<
//   NominateName[],
//   void,
//   { state: RootState }
// >("score-board/getAllNominateJudgement", async (_, store) => {
//   const state = store.getState();
//   const token = selectToken(state);
//   return getAllNominateJudgement(token);
// });

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
// export const submitProject = createAsyncThunk<
//   ProjectNominate,
//   ProjectNominate,
//   { state: RootState }
// >("score-board/submitProject", async (project, store) => {
//   const state = store.getState();
//   const token = selectToken(state);
//   return confirmSubmitProject(project, token);
// });
// export const scoreProject = createAsyncThunk<
//   ProjectScoreBody,
//   ProjectScoreBody,
//   { state: RootState }
// >("score-board/scoreProject", async (body, { getState }) => {
//   const state = getState();
//   const token = selectToken(state);
//   const { projectId } = body;
//   return postProjectScore(projectId, body, token);
// });

export const scoreBoardSlice = createSlice({
  name: "score-board",
  initialState,
  reducers: {
    // setNominates: (state, action: PayloadAction<Nominate[]>) => {
    //   state.nominateList = action.payload;
    // },
    projectScoreUpdated: (state, action: PayloadAction<ProjectScore>) => {
      state.details = {
        ...state.details,
        [action.payload.projectId]: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectScore.fulfilled, (state, action) => {
      state.details[action.payload.projectId] = action.payload;
    });
  },
});

export const selectProjectScoreDetail = (id: number) => (state: RootState) =>
  state.scoreBoard?.details[id];

// export const selectAdminEntries = (state: RootState) =>
//   state.nominate.nominateName;

// export const selectFeePerEntry = (state: RootState) =>
//   state.nominate.feePerEntry;
// export const selectNominateDetails = createSelector(
//   selectNominates,
//   (nominateList) => {
//     return keyBy(nominateList, (item) => item.id);
//   }
// );
// export const selectNominateEntryDetails = createSelector(
//   selectNominates,
//   (nominateList) => {
//     return keyBy(
//       flatMap(nominateList, (item) => item.entries),
//       (item) => item.id
//     );
//   }
// );

// export const selectNomintateEntryDetail = (id: string) => (state: RootState) =>
//   selectNominateEntryDetails(state)[id];

// export const selectProjectNomintateDetails = (state: RootState) =>
//   state.nominate.projectDetails;

// export const selectProjectNomintateDetail =
//   (id: number) => (state: RootState) =>
//     selectProjectNomintateDetails(state)[id];

// export const selectProjectNomintateIds = (state: RootState) =>
//   state.nominate.projectIds;

// export const selectAllProjectIds = (state: RootState) =>
//   state.nominate.allProjectIds;

// export const selectProjectIdsGroupByEntry = createSelector(
//   selectProjectNomintateDetails,
//   selectProjectNomintateIds,
//   (details, ids) => {
//     const result: {
//       [key: string]: number[];
//     } = {};
//     ids.forEach((id) => {
//       const project = details[id];
//       if (result[project.entryId] == null) {
//         result[project.entryId] = [];
//       }
//       result[project.entryId].push(id);
//     });
//     return map(result, (projectIds, entryId) => ({
//       entryId,
//       projectIds,
//     }));
//   }
// );

// export const selectAllProjectIdsGroupByEntry = createSelector(
//   selectProjectNomintateDetails,
//   selectAllProjectIds,
//   (details, ids) => {
//     const result: {
//       [key: string]: number[];
//     } = {};
//     ids.forEach((id) => {
//       const project = details[id];
//       if (result[project.entryId] == null) {
//         result[project.entryId] = [];
//       }
//       result[project.entryId].push(id);
//     });
//     return map(result, (projectIds, entryId) => ({
//       entryId,
//       projectIds,
//     }));
//   }
// );

// export const selectEntryIdsRegisteredGroupByCategory = createSelector(
//   selectProjectNomintateIds,
//   selectProjectNomintateDetails,
//   selectNominateEntryDetails,
//   (projectIds, details, entryDetails) => {
//     const entryIds = projectIds.map((id) => details[id]?.entryId);
//     const result: { [key: string]: string[] } = {};
//     entryIds.forEach((id) => {
//       const entry = entryDetails[id];
//       if (!entry) return;
//       result[entry.nominateId] ??= [];
//       result[entry.nominateId].push(id);
//     });
//     return result;
//   }
// );

// const defaultDeadline = "2023-04-30";

// const _selectDeadline = (state: RootState) => {
//   const projectIds = selectProjectNomintateIds(state);
//   const deadline = selectProjectNomintateDetail(projectIds[0])(state)?.deadline;
//   if (deadline) return deadline;
//   return defaultDeadline;
// };

// export const selectDeadline = createSelector(_selectDeadline, (deadline) => {
//   return moment(deadline, "YYYY-MM-DD").toDate();
// });
// export const selectIsNominatePaid = (state: RootState) => state.nominate.isPaid;

listenerMiddleware.startListening({
  actionCreator: scoreBoardSlice.actions.projectScoreUpdated,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    store.dispatch(saveProjectScoreAsync(action.payload));
  },
});

export default scoreBoardSlice;
