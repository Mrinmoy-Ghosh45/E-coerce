import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
<<<<<<< HEAD
import Login from './components/login';
import ProductDetails from './components/productDetails';
import { useState } from 'react';
import BuyNowPage from './components/BuyNowPage';


import Profile from './components/profile'; 
import OrderHistory from './components/OrderHistory';
=======
import Signup from './components/Singup';
import Signin from './components/Signin';
import Cart from './components/Cart';
import TopProduct from './components/TopProduct';

>>>>>>> fa7b05b1bef91658e4273be556e23296efaec379

export default function App() {
   

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        
        <Route path="/" element={<Login setUser={setUser} />} /> 
        <Route path="/home" element={<HomePageWrapper user={user} orders={orders} setOrders={setOrders} />} /> 
        <Route path="/buy-now" element={<BuyNowPage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} /> 
        <Route path="/orders" element={<OrderHistory orders={orders} />} /> 
=======
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/topproduct' element={<TopProduct/>}/>
>>>>>>> fa7b05b1bef91658e4273be556e23296efaec379
      </Routes>
    </BrowserRouter>
  );
}
