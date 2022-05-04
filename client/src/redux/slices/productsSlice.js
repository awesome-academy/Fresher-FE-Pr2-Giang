import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { PRODUCT_API_URL } from "../../data/constants";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const { data } = await axios.get(PRODUCT_API_URL);

  return data;
});

export const createProduct = createAsyncThunk('product/createProduct', async (newProduct) => {
  const { data } = await axios.post(PRODUCT_API_URL, newProduct);

  return data;
});

export const editProduct = createAsyncThunk('product/editProduct', async (editedProduct) => {
  const { data } = await axios.patch(`${PRODUCT_API_URL}/${editedProduct.id}`, editedProduct);
  
  return data;
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
  await axios.delete(`${PRODUCT_API_URL}/${id}`);
  
  return id;
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
    },
    [createProduct.pending]: (state) => {

    },
    [createProduct.rejected]: (state) => {

    },
    [createProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload);
    },
    [editProduct.pending]: (state) => {

    },
    [editProduct.rejected]: (state) => {

    },
    [editProduct.fulfilled]: (state, action) => {
      state.products = state.products.map(product => {
        if(product.id === action.payload.id){
          return action.payload;
        }
        return product;
      })
    },
    [deleteProduct.pending]: () => {

    },
    [deleteProduct.rejected]: () => {

    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
});

export default productsSlice.reducer;
