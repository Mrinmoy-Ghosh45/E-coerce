import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageWrapper from './components/homePageWrapper';
import Login from './components/login';
import Profile from './components/profile'; 

export default function App() {
  const [user, setUser] = useState(null); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} /> {/* ✅ pass setter */}
        <Route path="/home" element={<HomePageWrapper user={user} />} /> {/* ✅ pass user */}
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  );
}
