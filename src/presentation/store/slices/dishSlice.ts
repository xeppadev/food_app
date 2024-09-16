import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DishData } from "@/presentation/types/interfaces";

export interface CounterState {
  dish: DishData | null;
}

const initialState: CounterState = {
  dish: null,
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    setdish: (state, action: PayloadAction<DishData>) => {
      state.dish = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setdish } = dishSlice.actions;

export const selectDish = (state: { dish: CounterState }) => state.dish.dish;

export default dishSlice.reducer;
