import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleAddToCart = () => {
    setCart(true);
    alert("Added to cart!");
  };

  const handleAddToWishlist = () => {
    setWishlist((prev) => !prev);
    alert("added to wishlist");
  };

  const navigate = useNavigate();

  const handleBuyNow = (state) => {
    navigate("/buy-now", {
      state: {
        name: state.name,
        price: state.price,
        image: state.image,
      },
    });
  };

  const { state } = useLocation();
  const { name, price, image } = state || {};

  return (
    <div className="cotainer-fluid">
      <div className="container shadow-lg ">
        <div className="row">
          <div className="col-5 d-flex justify-content-center">
            <div className="mt-5" style={{ width: "400px" }}>
              {/* Image Container */}
              <div className="position-relative">
                {/* Heart Icon */}
                <div
                  className="position-absolute bg-white"
                  onClick={handleAddToWishlist}
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "24px",
                    cursor: "pointer",
                    color: "gray",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    textAlign: "center",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <i
                    className={
                      wishlist ? "fa-solid fa-heart" : "fa-solid fa-heart"
                    }
                    style={wishlist ? { color: "#ea0606" } : {}}
                  />
                </div>

                {/* Image */}
                <img src={image} alt={name} className="w-100" />
              </div>

              {/* Buttons under the image */}
              <div className="d-flex mt-3">
                <button
                  className="btn btn-primary me-2"
                  style={{ width: "50%" }}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
                <button
                  className="btn btn-success"
                  style={{ width: "50%" }}
                  onClick={() => handleBuyNow(state)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <h3 className="mt-5"> {name}</h3>
            <div
              className="text-white d-inline rounded p-1"
              style={{ background: "#388e3c" }}
            >
              <span>4.4</span> <i class="fa-solid fa-star"></i>
            </div>
            <div className="d-inline ms-2">
              <span>4,10,845 Ratings & 29,265 Reviews</span>
            </div>
            <div className="mt-3 fw-semibold fs-3">
              <span>{price}</span>
              <del className="ms-3 fs-5">₹14,999</del>
              <span className="ms-3 text-success fs-5">16% off</span>
            </div>
            <div className="mt-3 d-flex align-items-start">
              <span className=" text-secondary">Highlights</span>
              <ul className="mb-0">
                <li>6 GB RAM | 128 GB ROM | Expandable Upto 512 GB</li>
                <li>16.59 cm (6.53 inch) Full HD+ Display</li>
                <li>13MP + 8MP + 5MP + 2MP | 8MP Front Camera</li>
                <li>5000 mAh Lithium Polymer Battery</li>
                <li>MediaTek Helio G80 Processor</li>
              </ul>
            </div>
            <div className="mt-3 d-flex align-items-start">
              <span className=" text-secondary">Description</span>
              <p className="ms-4 ">
                Style, performance, and innovation - the Poco M2 brings together
                all these aspects with its 16.58 cm (6.53) FHD+ 1080p Full
                Screen Display, MediaTek Helio G80 Octa-core processor, a
                quad-camera setup, and an 8 MP selfie camera. What’s more, this
                phone is also highly durable, thanks to P2i protection and
                Corning Gorilla Glass 3.
              </p>
            </div>

            <div className="mt-2">
              <h3>Product Description</h3>
              <div className="mt-5 d-flex align-items-start">
                <img src="./images/img1.png" alt="not found"></img>

                <p className="ms-3">
                  <span className="d-block fs-5 fw-semibold mb-1">
                    Pixel Perfect Display
                  </span>
                  With the 16.58 cm (6.53) FHD+ 1080p Full Screen Display with
                  394 PPI, you can watch your favourite characters come alive on
                  the screen with accurate details and lifelike clarity.
                </p>
              </div>
              <div className="mt-5 d-flex align-items-end flex-row-reverse">
                <img src="./images/img2.png" alt=" not found" />

                <p className="me-3">
                  <span className="d-block fs-5 fw-semibold mb-1">
                    Shift Gears Seamlessly
                  </span>
                  Multitasking and app switching is so swift and seamless that
                  you can switch from attending zoom calls and browsing the web
                  to gaming online effortlessly.
                </p>
              </div>

              <div className="mt-5 d-flex align-items-start">
                <img src="./images/img3.png" alt=" not found"></img>

                <p className="ms-3">
                  <span className="d-block fs-5 fw-semibold mb-1">
                    Powerful Processor
                  </span>
                  Powered by the MediaTek Helio G80 Octa-core CPU and 6 GB of
                  RAM, the Poco M2 provides an optimised performance for all
                  your needs.
                </p>
              </div>
              <div className="mt-5 d-flex align-items-end flex-row-reverse">
                <img src="./images/img4.png" alt="not found"></img>

                <p className="ms-3">
                  <span className="d-block fs-5 fw-semibold mb-1">
                    Pixel Perfect Display A Phone That Doesn’t Quit on You
                  </span>
                  The Poco M2’s comes with 10 W fast charging and a massive 5000
                  mAh battery which provides up to 26 days of standby time,
                  about 25 hours of video playback, and up to 12 hours of
                  gaming.
                </p>
              </div>
              <div className="mt-5 d-flex align-items-start">
                <img src="./images/img5.png" alt="not found"></img>

                <p className="ms-3">
                  <span className="d-block fs-5 fw-semibold mb-1">
                    Memories to Last a Lifetime
                  </span>
                  The Poco M2 lets you capture every special moment with its (13
                  MP + 8 MP + 5 MP + 2 MP) quad-camera setup. Also, with the 8
                  MP AI Selfie camera, all your selfies will be truly
                  Instagram-worthy.
                </p>
              </div>
              <div className="mt-5 d-flex align-items-end flex-row-reverse">
                <img src="./images/img6.png" alt="not found"></img>

                <p className="ms-3">
                  <span className="d-block fs-5 fw-semibold mb-1">
                    Connectivity on All Fronts
                  </span>
                  The Poco M2 supports USB Type C, IR Blaster, and a headphone
                  jack, providing no dearth of connectivity options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
