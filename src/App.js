import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
import Signup from './components/Singup';
import Signin from './components/Signin';
import Cart from './components/Cart';
import TopProduct from './components/TopProduct';


export default function App() {
   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/topproduct' element={<TopProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}
