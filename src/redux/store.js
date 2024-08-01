import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import totalReducer from './totalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    totals: totalReducer,
  },
});

export default store;
