import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { USER_API_URL } from "../../data/constants";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const { data } = await axios.get(USER_API_URL);

  return data;
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  
    signOutUser: (state, action) => {
      state.user = null;
    },

    updateUser: (state, action) => {
      state.user = {...state.user, ...action.payload}
    },
  },
  extraReducers: {
    [getUsers.pending]: (state) => {

    },
    [getUsers.rejected]: (state) => {

    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    }
  }
});

export const {
  setUser,
  signOutUser,
  updateUser
} = usersSlice.actions;
export default usersSlice.reducer;
