import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { isServer } from "../utils/common";
import { listenerMiddleware } from "./listener-middleware";
import billingSlice, { BillingState } from "./modules/billing";
import newsSlice, { NewsState } from "./modules/news";
import nominateSlice, { NominateState } from "./modules/nominate";
import userSlice, { UserState } from "./modules/user";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export declare type RootState = {
  user: UserState;
  nominate: NominateState;
  billing: BillingState;
  news: NewsState;
};

const reducer = combineReducers({
  user: userSlice.reducer,
  nominate: nominateSlice.reducer,
  billing: billingSlice.reducer,
  news: newsSlice.reducer,
});
const reducerWithPersist = persistReducer(persistConfig, reducer);

const rootReducer = (state: any, action: any) => {
  const _reducer = isServer ? reducer : reducerWithPersist;
  const newState = _reducer(state, action);
  if (action.type == HYDRATE) {
    return {
      ...newState,
      ...action.payload,
      user: {
        ...newState.user,
        ...action.payload.user,
      },
    };
  }
  return newState;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

const makeStore = () => {
  if (!isServer) {
    Object.assign(store, { __persistor: persistStore(store) });
  }
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
