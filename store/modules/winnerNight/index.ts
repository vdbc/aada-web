import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
import {
  orderEmpty,
  WinnerNightOrderModel,
} from "../../../services/WinnerNightService";

export interface OrderState {
  order?: WinnerNightOrderModel;
}

const initialState: OrderState = {
  order: orderEmpty,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderUpdated: (state, action: PayloadAction<WinnerNightOrderModel>) => {
      state.order = action.payload;
    },
  },
});

export const selectOrder = (state: RootState) => state.order.order;

export default orderSlice;
