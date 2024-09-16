import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  items: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

const initialState: CounterState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        price: number;
        image: string;
      }>,
    ) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        price: number;
        image: string;
      }>,
    ) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Item not found");
      }
      state.items = newCart;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CounterState }) =>
  state.cart.items;

export const selectCartItemById = createSelector(
  [selectCartItems, (state: { cart: CounterState }, id: number) => id],
  (items, id) => items.filter((item) => item.id === id),
);

export const selectCartTotal = (state: { cart: CounterState }) =>
  state.cart.items.reduce((acc, item) => (acc = acc + item.price), 0);

export default cartSlice.reducer;
