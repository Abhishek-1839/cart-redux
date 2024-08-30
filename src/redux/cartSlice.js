import { createSlice } from '@reduxjs/toolkit';
import data from '../data/product.json';

const initialState = data.map(product => ({ ...product, quantity: 1 }));

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find(product => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
