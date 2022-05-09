import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess/CheckoutSuccess";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserProfile from "./components/UserProfile/UserProfile";
import OrderDetails from "./components/UserProfile/UserTab/UserOrders/OrderDetails/OrderDetails";
import AccountInfo from "./components/UserProfile/UserTab/AccountInfo/AccountInfo";
import UserOrders from "./components/UserProfile/UserTab/UserOrders/UserOrders";
import ChangePassword from "./components/UserProfile/UserTab/ChangePassword/ChangePassword";
import Layout from "./Layout/Layout";
import Admin from "./admin/Admin";
import ProductList from './admin/MainSection/ProductList/ProductList';
import UserList from './admin/MainSection/UserList/UserList';
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector(state => state.users);
  const { admin } = useSelector(state => state.admin);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route element={<ProtectedRoute isLogin={user} />}>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout-success' element={<CheckoutSuccess />} />
          </Route>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout-success' element={<CheckoutSuccess />} />
          <Route element={<ProtectedRoute isLogin={user} />}>
            <Route path='/user' element={<UserProfile />}>
              <Route path='info' element={<AccountInfo />} />
              <Route path='orders' element={<UserOrders />} />
              <Route path='change-password' element={<ChangePassword />} />
              <Route path='order-details/:id' element={<OrderDetails />} />
            </Route>
          </Route>
        </Route>
        <Route element={<ProtectedRoute isLogin={admin} />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="products" element={<ProductList />}/>
            <Route path="users" element={<UserList />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
