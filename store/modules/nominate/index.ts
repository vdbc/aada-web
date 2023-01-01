import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { debounce, flatMap, keyBy, map } from "lodash";
import { RootState, store } from "../..";
import { Nominate, ProjectNominate } from "../../../models/NominateModel";
import {
  getAllNominate,
  getProjectRegistered,
  saveProject
} from "../../../services/NominateService";
import listenerMiddleware from "../../listener-middleware";
import { selectToken } from "../user";

export interface NominateState {
  nominateList: Nominate[];
  projectIds: number[];
  projectDetails: {
    [key: number]: ProjectNominate;
  };
}

const initialState: NominateState = {
  nominateList: [],
  projectDetails: {},
  projectIds: [],
};

export const fetchProjectNominate = createAsyncThunk<
  ProjectNominate[],
  void,
  { state: RootState }
>("nominate/fetchProjectNomintate", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return getProjectRegistered(token);
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
        state.projectIds = action.payload.map((item) => item.id);
        state.projectDetails = {
          ...state.projectDetails,
          ...keyBy(action.payload, (item) => item.id),
        };
      })
      .addCase(fetchAllNominate.fulfilled, (state, action) => {
        state.nominateList = action.payload;
      });
  },
});

export const selectNominates = (state: RootState) =>
  state.nominate.nominateList;
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

export const selectNomintateEntryDetail = (id: string) => (state: RootState) =>
  selectNominateEntryDetails(state)[id];

export const selectProjectNomintateDetails = (state: RootState) =>
  state.nominate.projectDetails;

export const selectProjectNomintateDetail =
  (id: number) => (state: RootState) =>
    selectProjectNomintateDetails(state)[id];

export const selectProjectNomintateIds = (state: RootState) =>
  state.nominate.projectIds;

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

listenerMiddleware.startListening({
  actionCreator: nominateSlice.actions.projectUpdated,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    store.dispatch(saveProjectNominate(action.payload));
  },
});

export default nominateSlice;
