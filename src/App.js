import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
import Login from './components/login';
import ProductDetails from './components/productDetails';
import { useState } from 'react';
import BuyNowPage from './components/BuyNowPage';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePageWrapper />} />
        <Route path="/buy-now" element={<BuyNowPage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
