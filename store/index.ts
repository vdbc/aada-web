import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { listenerMiddleware } from "./listener-middleware";
import billingSlice from "./modules/billing";
import newsSlice from "./modules/news";
import nominateSlice from "./modules/nominate";
import userSlice from "./modules/user";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = (state: any, action: any) => {
  const newState = persistReducer(
    persistConfig,
    combineReducers({
      user: userSlice.reducer,
      nominate: nominateSlice.reducer,
      billing: billingSlice.reducer,
      news: newsSlice.reducer,
    })
  )(state, action);
  if (action.type == HYDRATE) {
    return { ...newState, ...action.payload, user: newState.user };
  }
  return newState;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

const makeStore = () => store;

export const persistor = persistStore(store);
persistor.persist();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
