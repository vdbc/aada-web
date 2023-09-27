import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { persistStore } from "redux-persist";
import { isServer } from "../utils/common";
import { listenerMiddleware } from "./listener-middleware";
import billingSlice, { BillingState } from "./modules/billing";
import "./modules/common";
import newsSlice, { NewsState } from "./modules/news";
import nominateSlice, { NominateState } from "./modules/nominate";
import { scoreBoardSlice, ScoreBoardState } from "./modules/score-board";
import userSlice, { UserState } from "./modules/user";
import orderSlice, { OrderState } from "./modules/winnerNight";
import winnersSlice, { WinnersState } from "./modules/winnersNews";
import gallerySlice, { GalleryState } from "./modules/gallery";
import videoSlice, { VideoState } from "./modules/video";
import guidebookSlice, { GuidebookState } from "./modules/guidebook";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

export declare type RootState = {
  user: UserState;
  nominate: NominateState;
  billing: BillingState;
  news: NewsState;
  scoreBoard: ScoreBoardState;
  order: OrderState;
  winners: WinnersState;
  gallery: GalleryState;
  video: VideoState;
  guidebook: GuidebookState;
};

const reducer = combineReducers({
  user: userSlice.reducer,
  nominate: nominateSlice.reducer,
  billing: billingSlice.reducer,
  news: newsSlice.reducer,
  scoreBoard: scoreBoardSlice.reducer,
  order: orderSlice.reducer,
  winners: winnersSlice.reducer,
  gallery: gallerySlice.reducer,
  video: videoSlice.reducer,
  guidebook: guidebookSlice.reducer,
});
// const reducerWithPersist = persistReducer(persistConfig, reducer);

const rootReducer = (state: any, action: any) => {
  const _reducer = reducer;
  const newState = _reducer(state, action);
  if (action.type == HYDRATE) {
    const payload: RootState = action.payload;
    return {
      ...newState,
      ...action.payload,
      user: {
        ...newState.user,
        ...payload.user,
      },
    };
  }
  return newState;
};

export const store = configureStore({
  devTools: process.env.NODE_ENV == "development",
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
