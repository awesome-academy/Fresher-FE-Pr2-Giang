import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_API_URL } from "../../data/constants";
import axios from "axios";

export const getOrders = createAsyncThunk('orders/getOrders', async (id) => {
  const { data } = await axios.get(`${USER_API_URL}/${id}/orders`);

  return data;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {

  },
  extraReducers: {
    [getOrders.pending]: (state) => {

    },
    [getOrders.rejected]: (state) => {

    },
    [getOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
    }
  }
});

export default ordersSlice.reducer;
