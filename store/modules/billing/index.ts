import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { BillingModel, emptyBilling } from "../../../models/BillingModel";
import {
  getBillingInfoRegistered,
  requestCreateBillingInfo,
  updateBillingInfoRegistered as requestUpdateBillingInfoRegistered,
} from "../../../services/BillingService";
import listenerMiddleware from "../../listener-middleware";
import { selectToken } from "../user";

export interface BillingState {
  billing: BillingModel;
}

const initialState: BillingState = {
  billing: emptyBilling,
};

export const fetchBillingRegistered = createAsyncThunk<
  BillingModel,
  void,
  { state: RootState }
>("billing/fetchBillingRegistered", async (_, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return getBillingInfoRegistered(token);
});

export const updateBillingRegistered = createAsyncThunk<
  BillingModel,
  BillingModel,
  { state: RootState }
>("billing/updateBillingRegistered", async (billing, store) => {
  const state = store.getState();
  const token = selectToken(state);

  return requestUpdateBillingInfoRegistered(billing, token);
});

export const createBillingInfo = createAsyncThunk<
  BillingModel,
  BillingModel,
  { state: RootState }
>("billing/createBillingInfo", async (billing, store) => {
  const state = store.getState();
  const token = selectToken(state);

  return requestCreateBillingInfo(billing, token);
});

export const billingSlice = createSlice({
  name: "billing",
  initialState,
  reducers: {
    billingUpdated: (state, action: PayloadAction<BillingModel>) => {
      state.billing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBillingRegistered.fulfilled, (state, action) => {
        if (action.payload) state.billing = action.payload;
      })
      .addCase(createBillingInfo.fulfilled, (state, action) => {
        state.billing = action.payload;
      })
      .addCase(updateBillingRegistered.fulfilled, (state, action) => {
        state.billing = action.payload;
      });
  },
});

export const selectBilling = (state: RootState) => state.billing.billing;

listenerMiddleware.startListening({
  actionCreator: createBillingInfo.fulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    alert("Save the invoice successfully");
  },
});
listenerMiddleware.startListening({
  actionCreator: updateBillingRegistered.fulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    alert("Save the invoice successfully");
  },
});

export default billingSlice;
