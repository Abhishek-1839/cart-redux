import { createSlice } from '@reduxjs/toolkit';

const initialState = { totalQuantity: 0, totalAmount: 0 };

const totalSlice = createSlice({
  name: 'totals',
  initialState,
  reducers: {
    updateTotals: (state, action) => {
      const totalQuantity = action.payload.reduce((acc, product) => acc + (product.quantity || 0), 0);
      const totalAmount = action.payload.reduce((acc, product) => acc + (product.quantity || 0) * product.price, 0);
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
  },
});

export const { updateTotals } = totalSlice.actions;
export default totalSlice.reducer;
