import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login, ActivationPage, SignUpPage, HomePage, ProductsPage,
  BestSellingPage, EventsPage, FAQPage, ProductDetailsPage,
  ProfilePage, ShopCreatePage, ShopLogin, ShopActivationPage
} from './routes/Routes';
import {
  ShopHomepage, ShopDashboardPage, ShopCreateProduct,ShopAllProducts,ShopAllEvents,ShopCreateEvents
} from './routes/ShopRoutes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from './redux/store';
import { loadUser, loadSeller } from './redux/actions/user';
import { useSelector } from 'react-redux';
import ProtectedRoute from './routes/ProctectedRoute';
import SellerProtectedRoute from "./routes/sellerProtectedRoute";
import { useDispatch } from 'react-redux';
import { getAllProductsShop } from './redux/actions/product';

function App() {
  const dispatch = useDispatch();
    const { seller } = useSelector((state) => state.seller);
     useEffect(() => {
      if(seller)
      {
        dispatch(getAllProductsShop(seller._id));

      }
        
      }, [dispatch, seller]);
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/activate/:activation_token" element={<ActivationPage />} />
          <Route path="/ShopActivationPage/:activation_token" element={<ShopActivationPage />} />
          <Route path="/test" element={<ActivationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/shop-create" element={<ShopCreatePage />} />
          <Route path="/shop-login" element={<ShopLogin />} />

          <Route path="/shop/:id" element={
            <SellerProtectedRoute>
              <ShopHomepage />
            </SellerProtectedRoute>
          } />

          <Route path="/dashboard" element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          } />
          <Route path="/dashboard-products" element={
            <SellerProtectedRoute>
            <ShopAllProducts/>
            </SellerProtectedRoute>
          } />
          <Route path="/dashboard-events" element={
            <SellerProtectedRoute>
          <ShopAllEvents></ShopAllEvents>
            </SellerProtectedRoute>
          } />

          <Route path="/dashboard-create-product" element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          } />
            <Route path="/dashboard-create-event" element={
            <SellerProtectedRoute>
             <ShopCreateEvents></ShopCreateEvents>
            </SellerProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
