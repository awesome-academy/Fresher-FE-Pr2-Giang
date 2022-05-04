import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import usersReducer from './slices/usersSlice';
import cartReducer from './slices/cartSlice';
import ordersReducer from './slices/ordersSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
    orders: ordersReducer,
  }
});
