import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { PRODUCT_API_URL } from "../../data/constants";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get(PRODUCT_API_URL);

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
