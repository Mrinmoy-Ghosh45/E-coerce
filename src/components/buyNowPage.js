import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BuyNowPage = () => {
  const { state } = useLocation();

  const [quantities, setQuantities] = useState([]);
  const [priceArray, setPriceArray] = useState([]);
  const [product, setProduct] = useState([]);

  const [result, setResult] = useState(0);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [cartProductArray, setCartProductArray] = useState([]);

  useEffect(() => {
    console.log("useEffect running with state:", state);
    if (state && typeof state === "object" && !Array.isArray(state)) {
      setImage(state.image);
      setName(state.name);
      setPrice(state.price);
    } else if (Array.isArray(state) && state.length > 0) {
      setCartProductArray(state);
    } else {
      setCartProductArray([]);
    }
  }, [state]);

  useEffect(() => {
    if (name && price && image) {
      setProduct([{ name, price, image }]);
    } else {
      const allProducts = cartProductArray.map((item) => ({
        name: item.name,
        price: item.price,
        image: item.image,
      }));

      setProduct(allProducts);
    }
  }, [name, price, image, cartProductArray]);

  useEffect(() => {
    if (product) {
      const allPrice = product.map((item) => {
        return item.price;
      });
      setPriceArray(allPrice);
    }
  }, [product]);

  useEffect(() => {
    if (product.length > 0) {
      const defaultQuantities = product.map(() => 1);
      setQuantities(defaultQuantities);
    }
  }, [product]);

  useEffect(() => {
    if (priceArray.length > 0 && quantities.length > 0) {
      let resultUseeffect = 0;
      for (let index = 0; index < priceArray.length; index++) {
        resultUseeffect += priceArray[index] * quantities[index];
      }
      setResult(resultUseeffect);
    }
  }, [priceArray, quantities]);

  const increaseProduct = (index) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  const decreaseProduct = (index) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] > 1 ? updated[index] - 1 : 1;
      return updated;
    });
  };

  return (
    <div className="container mt-5">
      <h2>Product Checkout</h2>

      {product.map((item, index) => {
        return (
          <div className="row mt-4 d-flex justify-content-between" key={index}>
            <div className="col-md-8 shadow-lg p-4 rounded bg-white mb-3">
              <div className="row">
                <div className="col-4 d-flex flex-column justify-content-center">
                  <img src={item.image} alt="Product" className="img-fluid" />
                  <div className="mt-3 mb-3 text-center">
                    <i
                      className="fa-solid fa-minus me-4"
                      style={{ cursor: "pointer" }}
                      onClick={() => decreaseProduct(index)}
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
                        value={quantities[index] || 1}
                        onChange={(e) => {
                          if (e.target.value === "") {
                            setQuantities((prev) => {
                              const updated = [...prev];
                              updated[index] = "";
                              return updated;
                            });
                          } else if (e.target.value < 1) {
                            alert("Please Enter a Number Greater than 0");
                            setQuantities((prev) => {
                              const updated = [...prev];
                              updated[index] = 1;
                              return updated;
                            });
                          } else {
                            const value = Number(e.target.value);
                            setQuantities((prev) => {
                              const updated = [...prev];
                              updated[index] = value;
                              return updated;
                            });
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
                      onClick={() => increaseProduct(index)}
                    ></i>
                  </div>
                </div>

                <div className="col-8">
                  <h3>{item.name}</h3>
                  <h4 className="text-success">{item.price}</h4>
                </div>
              </div>
            </div>

            {index === 0 && (
              <div
                className="col-md-3 shadow-lg p-4 rounded bg-white mb-3"
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
                  <span className="fs-5">Platform Fee:</span>
                  <span className="fs-5">₹5</span>
                </div>

                <div className="border-top border-secondary pt-2 d-flex justify-content-between mt-5">
                  <h5>Total Payable:</h5>
                  <h5>₹{result + 5}</h5>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="row">
        <div className="col-8 d-flex justify-content-end mt-4">
          <button className="btn btn-success">Continue</button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default BuyNowPage;
