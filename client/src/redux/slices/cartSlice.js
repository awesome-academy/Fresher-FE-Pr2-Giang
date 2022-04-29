import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const addedProduct = action.payload.addedProduct;

      if(state.cart.length > 0) {
        const existedProduct = state.cart.find(product => product.id === action.payload.id);
        if(existedProduct) {
          const updatedCart = [...state.cart.filter(product => product.id !== action.payload.id), addedProduct];
          state.cart = updatedCart;
        } else {
          state.cart = [...state.cart, addedProduct];
        } 
      } else {
        state.cart = [addedProduct];
      }
    },

    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

    deleteAllCartItem: (state, action) => {
      state.cart = [];
    }
  }
});

export const {
  addToCart,
  deleteCartItem,
  deleteAllCartItem
} = cartSlice.actions;
export default cartSlice.reducer;
