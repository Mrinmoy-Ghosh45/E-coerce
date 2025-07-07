import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
import Login from './components/login';
import Profile from './components/profile'; 
import OrderHistory from './components/OrderHistory';

export default function App() {
  const [user, setUser] = useState(null); 
  const [orders, setOrders] = useState([]); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} /> 
        <Route path="/home" element={<HomePageWrapper user={user} orders={orders} setOrders={setOrders} />} /> 
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} /> 
        <Route path="/orders" element={<OrderHistory orders={orders} />} /> 
      </Routes>
    </BrowserRouter>
  );
}
