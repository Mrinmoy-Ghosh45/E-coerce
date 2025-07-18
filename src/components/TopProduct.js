import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css'



export default function TopProduct(){
   const Navigate = useNavigate()

   const { state: topProduct } = useLocation();
   if(!topProduct){
    return <div>no product found this time</div>
   }
  const BuyNow = (item) => {
    Navigate("/productdetails", {
      state: {
        name:  item.name,
        price: item.price,
        image: item.image,
      },
    });
  };

    return(
        <div className="container">

            <div className="d-flex justify-content-center p-3" style={{gap:'800px '}}>
             <div><h4 onClick={()=>Navigate('/')} style={{textDecoration:'underline'}}>home</h4></div>
              <div><h4 style={{textDecoration:'underline'}}>topProducts</h4></div>
           </div>            

              <div className="row">
                {topProduct.map((item ,idx)=>(
                  <div className="col-4 product-card">
                <div key={idx}>
                  <div className="p-2" onClick={() => BuyNow(item)}>
                    <img className="image-card"
                      src={item.image}
                      alt={item.name}
                      style={{ width: "300px", height: "300px", }}
                    />
                  </div>
                  <div className="ps-3"><h6>{item.name}</h6></div>
                  <div className="ps-3" style={{textDecoration:'line-through'}}><h6>{item.prePrice} INR</h6></div>
                  <div className="ps-3"><h6>price - {item.price}</h6></div>
                </div>
            </div>
                ))}
            </div>

        </div>
    )
}