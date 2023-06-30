import {
  createAsyncThunk,
  createSlice,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { RootState, store } from "../..";
import listenerMiddleware from "../../listener-middleware";
import { createOrder, orderEmpty, OrderModel } from "../../../services/PaymentService";
import { selectToken } from "../user";


export interface DataState {
  url: string;
}



export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    url: '',
  },
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});
export const { setUrl } = dataSlice.actions;
export const selectUrl = (state: RootState) => state.data.url;
export default dataSlice.reducer;






