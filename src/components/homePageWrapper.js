import React from 'react';
import Checkbox from './checkbox';
import { useState } from 'react';
import Homepage from './homepage';

export default function HomePageWrapper() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className='bg-primary text-center text-white py-3'>
        <h2>E-Sell</h2>
        <div style={{ paddingLeft: "480px" }}>
          <Checkbox searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
        </div>
      </div>
      <div className='pt-2 ps-2'>
        <Homepage searchTerm={searchTerm} />
      </div>
    </>
  );
}