import { configureStore } from "@reduxjs/toolkit";
import { pizzaPath, pizzaReducer } from "./pizza-slice.ts";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    [pizzaPath]: pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
