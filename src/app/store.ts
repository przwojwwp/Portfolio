import { configureStore } from "@reduxjs/toolkit";
import matrixRainReducer from "../features/MatrixRain/matrixRainSlice";

export const store = configureStore({
  reducer: {
    MatrixRain: matrixRainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
