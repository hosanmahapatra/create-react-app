import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gitCompareReducer from "../features/gitCompare/gitCompareSlice";

export const store = configureStore({
  reducer: {
    gitCompare: gitCompareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
