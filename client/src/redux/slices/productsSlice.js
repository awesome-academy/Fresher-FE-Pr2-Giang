import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get('http://localhost:3000/products');

  return data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {

  },
  extraReducers: {
    [getProducts.pending]: (state) => {

    },
    [getProducts.rejected]: (state) => {

    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    }
  }
});

export default productsSlice.reducer;
