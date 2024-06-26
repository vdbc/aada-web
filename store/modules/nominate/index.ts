import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { debounce, flatMap, keyBy, map } from "lodash";
import moment from "moment";
import { RootState, store } from "../..";
import {
  AllProjectsResponse,
  MyProjectNominateResponse,
  Nominate,
  ProjectNominate,
} from "../../../models/NominateModel";
import {
  confirmSubmitProject,
  fetchFeePerEntry,
  getAllNominate,
  getAllProjects,
  getProjectRegistered,
  saveProject,
} from "../../../services/NominateService";
import listenerMiddleware from "../../listener-middleware";
import { selectToken } from "../user";

export interface NominateState {
  nominateList: Nominate[];
  projectIds: number[];
  allProjectIds: number[];
  projectDetails: {
    [key: number]: ProjectNominate;
  };
  isPaid: boolean;
  feePerEntry: number;
}

const initialState: NominateState = {
  nominateList: [],
  projectDetails: {},
  allProjectIds: [],
  projectIds: [],
  isPaid: false,
  feePerEntry: 0,
};

export const fetchProjectNominate = createAsyncThunk<
  MyProjectNominateResponse,
  void,
  { state: RootState }
>("nominate/fetchProjectNomintate", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return getProjectRegistered(token);
});

export const fetchAllProjects = createAsyncThunk<
  AllProjectsResponse,
  void,
  { state: RootState }
>("nominate/fetchAllProjects", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return getAllProjects(token);
});

export const fetchAllNominate = createAsyncThunk<
  Nominate[],
  void,
  { state: RootState }
>("nominate/fetchAllNominate", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return getAllNominate(token);
});

export const getFeePerEntry = createAsyncThunk<
  number,
  void,
  { state: RootState }
>("nominate/getFeePerEntry", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return fetchFeePerEntry(token);
});

export const saveProjectNominate = createAsyncThunk<
  void,
  ProjectNominate,
  { state: RootState }
>(
  "nominate/saveProjectNominate",
  debounce(async (project: ProjectNominate, { dispatch }: any) => {
    const state = store.getState();
    const token = selectToken(state);

    saveProject(project, token);
  }, 1000)
);
export const submitProject = createAsyncThunk<
  ProjectNominate,
  ProjectNominate,
  { state: RootState }
>("nominate/submitProject", async (project, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return confirmSubmitProject(project, token);
});
// export const scoreProject = createAsyncThunk<
//   ProjectScoreBody,
//   ProjectScoreBody,
//   { state: RootState }
// >("nominate/scoreProject", async (body, { getState }) => {
//   const state = getState();
//   const token = selectToken(state);
//   const { projectId } = body;
//   return postProjectScore(projectId, body, token);
// });

export const nominateSlice = createSlice({
  name: "nominate",
  initialState,
  reducers: {
    setNominates: (state, action: PayloadAction<Nominate[]>) => {
      state.nominateList = action.payload;
    },
    projectUpdated: (state, action: PayloadAction<ProjectNominate>) => {
      state.projectDetails[action.payload.id] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectNominate.fulfilled, (state, action) => {
        state.projectIds = action.payload.projects.map((item) => item.id);
        state.projectDetails = {
          ...state.projectDetails,
          ...keyBy(action.payload.projects, (item) => item.id),
        };
        state.isPaid = action.payload.isPaid || false;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.allProjectIds = action.payload.data.map((item) => item.id);
        state.projectDetails = {
          ...state.projectDetails,
          ...keyBy(action.payload.data, (item) => item.id),
        };
      })
      .addCase(submitProject.fulfilled, (state, action) => {
        state.projectDetails = {
          ...state.projectDetails,
          [action.payload.id]: action.payload,
        };
      })
      .addCase(fetchAllNominate.fulfilled, (state, action) => {
        state.nominateList = action.payload;
      })
      .addCase(getFeePerEntry.fulfilled, (state, action) => {
        state.feePerEntry = action.payload;
      });
  },
});

export const selectNominates = (state: RootState) =>
  state.nominate.nominateList;

export const selectFeePerEntry = (state: RootState) =>
  state.nominate.feePerEntry;
export const selectNominateDetails = createSelector(
  selectNominates,
  (nominateList) => {
    return keyBy(nominateList, (item) => item.id);
  }
);
export const selectNominateEntryDetails = createSelector(
  selectNominates,
  (nominateList) => {
    return keyBy(
      flatMap(nominateList, (item) => item.entries),
      (item) => item.id
    );
  }
);
export const selectAllEntries = createSelector(
  selectNominates,
  (nominateList) => {
    return flatMap(nominateList, (item) => item.entries);
  }
);

export const selectNomintateEntryDetail = (id: string) => (state: RootState) =>
  selectNominateEntryDetails(state)[id];

export const selectProjectNomintateDetails = (state: RootState) =>
  state.nominate.projectDetails;

export const selectProjectNomintateDetail =
  (id: number) => (state: RootState) =>
    selectProjectNomintateDetails(state)[id];

export const selectProjectNomintateIds = (state: RootState) =>
  state.nominate.projectIds;

export const selectAllProjectIds = (state: RootState) =>
  state.nominate.allProjectIds;

export const selectProjectIdsGroupByEntry = createSelector(
  selectProjectNomintateDetails,
  selectProjectNomintateIds,
  (details, ids) => {
    const result: {
      [key: string]: number[];
    } = {};
    ids.forEach((id) => {
      const project = details[id];
      if (result[project.entryId] == null) {
        result[project.entryId] = [];
      }
      result[project.entryId].push(id);
    });
    return map(result, (projectIds, entryId) => ({
      entryId,
      projectIds,
    }));
  }
);

export const selectAllProjectIdsGroupByEntry = createSelector(
  selectProjectNomintateDetails,
  selectAllProjectIds,
  selectAllEntries,
  (details, ids, entries) => {
    const result: {
      [key: string]: number[];
    } = {};
    ids.forEach((id) => {
      const project = details[id];
      if (result[project.entryId] == null) {
        result[project.entryId] = [];
      }
      result[project.entryId].push(id);
    });
    const entryIndex: { [key: string]: number } = {};
    entries.forEach((item, index) => (entryIndex[item.id] = index));
    return map(result, (projectIds, entryId) => ({
      entryId,
      projectIds,
    })).sort((a, b) => {
      return (entryIndex[a.entryId] ?? 0) - (entryIndex[b.entryId] ?? 0);
    });
  }
);

export const selectEntryIdsRegisteredGroupByCategory = createSelector(
  selectProjectNomintateIds,
  selectProjectNomintateDetails,
  selectNominateEntryDetails,
  (projectIds, details, entryDetails) => {
    const entryIds = projectIds.map((id) => details[id]?.entryId);
    const result: { [key: string]: string[] } = {};
    entryIds.forEach((id) => {
      const entry = entryDetails[id];
      if (!entry) return;
      result[entry.nominateId] ??= [];
      result[entry.nominateId].push(id);
    });
    return result;
  }
);

const defaultDeadline = "2023-04-30";

const _selectDeadline = (state: RootState) => {
  const projectIds = selectProjectNomintateIds(state);
  const deadline = selectProjectNomintateDetail(projectIds[0])(state)?.deadline;
  if (deadline) return deadline;
  return defaultDeadline;
};

export const selectDeadline = createSelector(_selectDeadline, (deadline) => {
  return moment(deadline, "YYYY-MM-DD").toDate();
});
export const selectIsNominatePaid = (state: RootState) => state.nominate.isPaid;

listenerMiddleware.startListening({
  actionCreator: nominateSlice.actions.projectUpdated,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    store.dispatch(saveProjectNominate(action.payload));
  },
});

export default nominateSlice;
