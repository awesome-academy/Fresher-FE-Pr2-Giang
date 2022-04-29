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

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout-success' element={<CheckoutSuccess />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
