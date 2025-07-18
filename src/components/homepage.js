import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Homepage({ searchTerm }) {

  const Navigate = useNavigate();

  const topProduct = [
    {
      category: 'Top-products',
      item: [
        { name: 'T-shirt', image: '/images/t.jpg', prePrice: 5000, price: '3000' },
        { name: 'Bata', image: '/images/shoe.jpg', prePrice: 5000, price: '2000' },
        { name: 'NIKE', image: '/images/shoe3.webp', prePrice: 5000, price: '2000' },
        { name: 'adidas', image: '/images/image1.jpg', prePrice: 5000, price: '2000' },
        { name: 'T-shirt', image: '/images/t2.jpg', prePrice: 5000, price: '2000' },
        { name: 'T-shirt', image: '/images/t1.jpg', prePrice: 5000, price: '2000' },
      ]
    }
  ]

  const products = [
    {
      category: "Fashion",
      subcategory: "Shoe",
      items: [
        { name: "Nike", image: "/images/shoe.jpg", orPrice: 5000, price: 2000},
        { name: "Adidas", image: "/images/image1.jpg", orPrice: 5000, price: 2000},
        { name: "Nike", image: "/images/shoe3.webp", orPrice: 5000, price: 2000},
        { name: "Bata", image: "/images/shoe2.jpg", orPrice: 5000, price: 2000},
        { name: "asian", image: "/images/image1.jpg", orPrice: 5000, price: 2000},
        { name: "gullan", image: "/images/shoe2.jpg", orPrice: 5000, price: 2000},
      ],
    },
    {
      category: "Fashion",
      subcategory: "T-Shirt",
      items: [
        { name: "TRIPR", image: "/images/t.jpg", orPrice: 5000, price: 2000},
        { name: "AUSK", image: "/images/t1.jpg", orPrice: 5000, price: 2000},
        { name: "FTX", image: "/images/t2.jpg", orPrice: 5000, price: 2000},
        { name: "KAJARU", image: "/images/t3.jpg", orPrice: 5000, price: 2000},
        { name: "KAJARU", image: "/images/t1.jpg", orPrice: 5000, price: 2000},
        { name: "AUSE", image: "/images/t.jpg", orPrice: 5000, price: 2000},
      ],
    },
    {
      category: "Electronics",
      subcategory: "Smart phone",
      items: [
        { name: "Nokia", image: "/images/nokia.jpeg", orPrice: 5000, price: 2000},
        { name: "Samsung", image: "/images/samsong.jpg", orPrice: 5000, price: 2000},
        { name: "Lanphone", image: "/images/lanphone.webp", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
      ],
    },
    {
      category: "Electronics",
      subcategory: "Old phone",
      items: [
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
        { name: "Motorola", image: "/images/moto.jpg", orPrice: 5000, price: 2000},
      ],
    },
  ];

  const search = searchTerm?.toLowerCase() || "";




  return (

    <>
  <div>
        {topProduct.map((section, index) => (
          <div key={index} className="container mt-4">
            <h3 className="">{section.category.replace('-', ' ',)}:</h3>

            <div id={`topProductCarousel${index}`} className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
              <div className="carousel-inner">
                {section.item.map((product, idx) => (
                  <div
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    key={idx}
                  >
                    <div onClick={() => Navigate('/topproduct', { state: section.item })} key={idx} className="d-flex justify-content-center">
                      <img 
                        src={product.image}
                        className="d-block"
                        alt={`Slide ${idx}`}
                        style={{ width: "700px", height: "350px", borderRadius: "20px" ,cursor:"pointer"}}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#topProductCarousel${index}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#topProductCarousel${index}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        ))}

      </div>

      <div>
        {products.map((section, index) => {
          const matchedItems = section.items.filter(item =>
            item.name.toLowerCase().includes(search) ||
            section.category.toLowerCase().includes(search) ||
            section.subcategory.toLowerCase().includes(search)
          );

          if (matchedItems.length === 0) return null;

          return (
            <div key={index} className="  rounded-3 mt-3">
              <h4 className="p-2">{section.category}:</h4>
              <h4 className="ps-3">{section.subcategory}:</h4>

              <div className="d-flex flex-wrap gap-3 p-3">
                {matchedItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="p-2 image-card">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "200px", height: "200px", borderRadius: "20px" ,cursor:"pointer"}}
                      />
                    </div>
                    <div className="ps-3"><h6>{item.name}</h6></div>
                    <div className="ps-3" style={{ textDecoration: 'line-through' }}><h6>{item.orPrice} INR</h6></div>
                    <div className="ps-3"><h6>Price - {item.price} INR</h6></div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </>


  );
}
