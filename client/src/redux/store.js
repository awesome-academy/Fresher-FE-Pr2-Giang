import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import usersReducer from './slices/usersSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
  }
});
