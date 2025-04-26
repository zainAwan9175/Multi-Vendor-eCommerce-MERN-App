import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Login, ActivationPage, SignUpPage,HomePage,ProductsPage,BestSellingPage,EventsPage,FAQPage,ProductDetailsPage,ProfilePage} from './Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast
import { useEffect } from 'react';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';


import axios from 'axios';

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
    
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
          <Route path="/test" element={<ActivationPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/profile" element={<ProfilePage />} />
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