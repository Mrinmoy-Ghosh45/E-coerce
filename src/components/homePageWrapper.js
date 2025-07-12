import React from 'react';
import Checkbox from './checkbox';
import { useState } from 'react';
import Homepage from './homepage';
import Navigate from './Navigate';

export default function HomePageWrapper() {
  const [searchTerm, setSearchTerm] = useState('');
  const title={
  fontSize:'80px',
  color:'#8E44AD',
  fontFamily:"impact",
  marginLeft:'190px'
}
  return (
    <>
    <div className='container'>
      <div className='bg-primary text-white' style={{borderRadius:"30px"}}>
        <div className='bg-white  d-flex text-black justify-content-center' style={{borderRadius:"30px", marginBottom:"20px", gap:"300px" }}>
          <div  style={title}>Emart</div>
          
          <div className='pb-2'><img src="/images/shopping.jpg" alt="image" style={{width: "600px", height: "150px", borderRadius: "20px"}}/>  </div>
        </div>
        
        <div className='d-flex' >
        <div style={{ paddingLeft: "420px", marginBottom:"20px" }}>
          <Checkbox searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
        </div>
        <Navigate/>
        
        </div>
      </div>
      <div className='pt-2 ps-2'>
        <Homepage searchTerm={searchTerm} />
      </div>
    </div>
      
    </>
  );
}