import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
import Login from './components/login';
import { useState } from 'react';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
