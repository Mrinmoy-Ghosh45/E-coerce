import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
 
import Cart from './components/Cart';
import TopProduct from './components/TopProduct';
import BuyNowPage from './components/buyNowPage';
import ProductDetails from './components/productDetails';



export default function App() {
   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        
        <Route path='/cart' element={<Cart/>} />
        <Route path='/topproduct' element={<TopProduct/>}/>
         <Route path="/buy-now" element={<BuyNowPage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
