import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action) => {
        state.cart = action.payload;
      },
    markAsAccepted: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload);
      if (item) {
        item.status = 'accept';
      }
    },
    markAsMissing: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload.id);
      if (item) {
        item.status = action.payload.status;
      }
    },
  },
});

export const { markAsAccepted, markAsMissing,setProducts } = cartSlice.actions;
export default cartSlice.reducer;
