import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface MatrixRainState {
  isEnabled: boolean;
}

const initialState: MatrixRainState = {
  isEnabled: true,
};

export const matrixRainSlice = createSlice({
  name: "MatrixRain",
  initialState,
  reducers: {
    toggleMatrixRain: (state) => {
      state.isEnabled = !state.isEnabled;
    },
  },
});

export const selectMatrixRain = (state: RootState) =>
  state.MatrixRain.isEnabled;

export const { toggleMatrixRain } = matrixRainSlice.actions;
export default matrixRainSlice.reducer;
