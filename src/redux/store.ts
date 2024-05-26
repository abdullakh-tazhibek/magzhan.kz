import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import newsSlice from "./newsSlice";

export const store = configureStore({
  reducer: {
    newsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
