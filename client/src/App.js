import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Login, ActivationPage, SignUpPage,HomePage,ProductsPage,BestSellingPage,EventsPage,FAQPage,ProductDetailsPage,ProfilePage,ShopCreatePage,ShopLogin,ShopActivationPage} from './routes/Routes';
import { ToastContainer } from "react-toastify";
import { ShopHomepage ,ShopDashboardPage,ShopCreateProduct} from './routes/ShopRoutes';
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast
import { useEffect } from 'react';
import Store from './redux/store';
import ProtectedRoute from './routes/ProctectedRoute';
import { loadUser } from './redux/actions/user';
import { loadSeller } from './redux/actions/user';


import { useSelector } from 'react-redux';
import sellerProtectedRoute from "./routes/sellerProtectedRoute"



function App() {


  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
   
  }, []);

  return (
    <>
   
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<HomePage/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/product/:id" element={<ProductDetailsPage/>}></Route>
           <Route path="/best-selling" element={<BestSellingPage/>}></Route>
           <Route path="/sign-up" element={<SignUpPage/>}></Route>
           <Route path="/products" element={<ProductsPage/>}></Route>
           <Route path="/activate/:activation_token" element={<ActivationPage />} />
           <Route path="/ShopActivationPage/:activation_token" element={<ShopActivationPage/>} />
           <Route path="/test" element={<ActivationPage />} />
           <Route path="/events" element={<EventsPage />} />
           <Route path="/faq" element={<FAQPage />} />
           <Route path="/shop-create" element={<ShopCreatePage />} />
           <Route path="/shop-login" element={<ShopLogin />} />
           <Route path="/shop/:id" element={
            <sellerProtectedRoute >
              <ShopHomepage />
            </sellerProtectedRoute>
            
           } />

            <Route path="/dashboard" element={
            <sellerProtectedRoute >
                <ShopDashboardPage></ShopDashboardPage>
            </sellerProtectedRoute>
            
           } />

      <Route path="/dashboard-create-product" element={
            <sellerProtectedRoute >
          <ShopCreateProduct></ShopCreateProduct>
            </sellerProtectedRoute>
            
           } />


           <Route path="/profile" element={
             <ProtectedRoute >
                       <ProfilePage />
             </ProtectedRoute>
             
     } />
         </Routes>
       </BrowserRouter>
      
      {/* Add ToastContainer for notifications */}
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