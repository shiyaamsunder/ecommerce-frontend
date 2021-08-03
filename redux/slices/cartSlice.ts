import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductWithAmount } from '@types';

import type { RootState } from '../store';

interface CartState {
  totalQuantity: number;
  totalPrice: number;
  items: ProductWithAmount[];
  changed?: boolean;
}
const initialState: CartState = {
  totalQuantity: 0,
  totalPrice: 0,
  items: [],
  changed: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addToCart: (state, action: PayloadAction<ProductWithAmount>) => {
      const newItem = action.payload;
      const itemExists = state.items.find(
        (product) => product._id === newItem._id
      );
      state.totalQuantity += newItem.amount;
      state.changed = true;

      if (!itemExists) {
        state.items.push(newItem);
        state.totalPrice += newItem.price * newItem.amount;
      } else {
        itemExists.amount += newItem.amount;
        state.totalPrice = itemExists.price * itemExists.amount;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemToRemove = action.payload;
      state.changed = true;

      const itemExists = state.items.find(
        (product) => product._id === itemToRemove
      );
      state.totalQuantity -= 1;

      if (state.items.length === 0) {
        state.totalPrice = 0;
      }

      if (itemExists) {
        state.totalPrice -= itemExists.price;
        if (itemExists.amount === 1) {
          state.items = state.items.filter((item) => item._id !== itemToRemove);
        } else {
          itemExists.amount -= 1;
        }
      }
    },

    deleteAllProduct: (state, action: PayloadAction<string>) => {
      const itemToRemove = action.payload;

      const itemExists = state.items.find(
        (product) => product._id === itemToRemove
      );

      if (itemExists) {
        state.items = state.items.filter((item) => item._id !== itemToRemove);
        state.totalQuantity -= itemExists.amount;
        state.totalPrice -= itemExists.amount * itemExists.price;
        itemExists.amount = 0;
        state.changed = true;
      }
    },
  },
});

// Selectors
export const getCart = (state: RootState) => state[cartSlice.name];

// Reducers and actions
export const { addToCart, removeFromCart, deleteAllProduct, replaceCart } =
  cartSlice.actions;

export default cartSlice.reducer;
