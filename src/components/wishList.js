import React from "react";
import { useLocation } from "react-router-dom";

const BuyNowPage = () => {
  const { state } = useLocation();
  const { name, price, image } = state || {};

  return (
    <div className="container mt-5">
      <h2>Product Checkout</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <img src={image} alt="Product" />
        </div>
        <div className="col-md-8">
          <h3>{name}</h3>
          <h4 className="text-success">{price}</h4>
          <button className="btn btn-success mt-3">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
