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

export interface OrderState {
  order?:OrderModel;
}

const initialState: OrderState = {
  order: orderEmpty,
  
};

// export const createOrdered = createAsyncThunk<
//   void,
//   OrderModel,
//   { state: RootState }
// >(
//   "order/saveInfoWinner",
//   debounce(async (order: OrderModel, { dispatch }: any) => {
//     const state = store.getState();
//     const token = selectToken(state);
//     createOrder(order,token);
//   }, 1000)
// );


export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderUpdated: (state, action: PayloadAction<OrderModel>) => {
      state.order = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(submitOrder.fulfilled, (state, action) => {
  //       state.order = action.payload;
  //     });
  // },
});
export const submitOrder = createAsyncThunk<
  OrderModel,
  OrderModel,
  { state: RootState }
>("order/saveInfoWinner", async (order, store) => {
  const state = store.getState();
  const token = selectToken(state);
  return createOrder(order, token);
});


export const selectFirstName = (state: RootState) => state.order.order?.firstName;
export const selectLastName = (state: RootState) => state.order.order?.lastName;
export const selectPhoneNumber = (state: RootState) => state.order.order?.phoneNumber;
export const selectTitle = (state: RootState) => state.order.order?.title;
export const selectEmail = (state: RootState) => state.order.order?.email;
export const selectCreatedAt = (state: RootState) => state.order.order?.createAt;
export const selectCompany = (state: RootState) => state.order.order?.company;
export const selectAttendee = (state: RootState) => state.order.order?.attendee;
export const selectAmount = (state: RootState) => state.order.order?.amount;
export const selectOrder = (state: RootState) => state.order.order;


listenerMiddleware.startListening({
  actionCreator: orderSlice.actions.orderUpdated,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    store.dispatch(submitOrder(action.payload));
  },
});



export default orderSlice;
