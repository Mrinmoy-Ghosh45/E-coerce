import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BuyNowPage = () => {
  const { state } = useLocation();
  const { name, price, image } = state || {};
  const [quantity, setQuantity] = useState(1);
  const [priceArray, setPriceArray] = useState([]);
   
  const [qtyArray, setQtyArray] = useState([]);
  const [result, setResult] = useState(0);

   
  useEffect(() => {
    if (price && quantity) {
      console.log("1st useEffect is trigered");
      setPriceArray([price]);
      setQtyArray([quantity]);
    }
  }, [price, quantity]);

  useEffect(() => {
    if (priceArray.length > 0 && qtyArray.length > 0) {
      for (let index = 0; index < priceArray.length; index++) {
        for (let i = 0; i < qtyArray.length; i++) {
          setResult(priceArray[index] * qtyArray[i]);
          break;
        }
      }
    }
  }, [priceArray, qtyArray]);

  const increaseProduct = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseProduct = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container mt-5">
      <h2>Product Checkout</h2>

      <div className="row mt-4 d-flex justify-content-between">
        <div className="col-md-8 shadow-lg p-4 rounded bg-white">
          <div className="row">
            <div className="col-4">
              <img src={image} alt="Product" className="img-fluid" />
              <div className="mt-3 mb-3 text-center">
                <i
                  className="fa-solid fa-minus me-4"
                  style={{ cursor: "pointer" }}
                  onClick={decreaseProduct}
                ></i>

                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    width: "50%",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      color: "#000",
                      pointerEvents: "none",
                      fontSize: "14px",
                    }}
                  >
                    Qty:
                  </span>

                  <input
                    type="number"
                    name="number"
                    value={quantity}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setQuantity("");
                        return;
                      }
                      const numberValue = Number(value);
                      if (numberValue < 1) {
                        alert("Please enter a number greater than 0");
                        setQuantity(1);
                      } else {
                        setQuantity(numberValue);
                      }
                    }}
                    min={1}
                    style={{
                      width: "100%",
                      paddingLeft: "40px",
                      textAlign: "left",
                      height: "38px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <i
                  className="fa-solid fa-plus ms-4"
                  style={{ cursor: "pointer" }}
                  onClick={increaseProduct}
                ></i>
              </div>
            </div>

            <div className="col-8">
              <h3>{name}</h3>
              <h4 className="text-success">{price}</h4>
            </div>
          </div>
        </div>

        <div
          className="col-md-3 shadow-lg p-4 rounded bg-white"
          style={{ maxHeight: "18rem" }}
        >
          <h5 className="border-bottom border-secondary mb-3">
            Price Details:
          </h5>

          <div className="d-flex justify-content-between mb-2">
            <span className="fs-5">Price:</span>
            <span className="fs-5">₹{result}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="fs-5">Platfrom Fee:</span>
            <span className="fs-5">₹5</span>
          </div>

          <div className="border-top border-secondary pt-2 d-flex justify-content-between mt-5">
            <h5>Total Payable:</h5>
            <h5>₹{result + 5}</h5>
          </div>
        </div>

        <div className="col-8   d-flex justify-content-end mt-4">
          <button className="btn btn-success  ">Continue</button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default BuyNowPage;
