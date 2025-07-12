import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage({ searchTerm }) {
  const products = [
    {
      category: "fashion",
      subcategory: "shoe",
      items: [
        { name: "bata", image: "/images/shoe.jpg", price: 2000 },
        { name: "bata", image: "/images/shoe.jpg", price: 2000 },
        { name: "bata", image: "/images/shoe.jpg", price: 2000 },
        { name: "bata", image: "/images/shoe.jpg", price: 2000 },
        { name: "bata", image: "/images/shoe.jpg", price: 2000 },
        { name: "bata", image: "/images/shoe.jpg", price: 2000 },
      ],
    },
    {
      category: "fashion",
      subcategory: "T-Shirt",
      items: [
        { name: "bata", image: "/images/t.jpg", price: 2000 },
        { name: "bata", image: "/images/t1.jpg", price: 2000 },
        { name: "bata", image: "/images/t2.jpg", price: 2000 },
        { name: "bata", image: "/images/t3.jpg", price: 2000 },
        { name: "bata", image: "/images/t1.jpg", price: 2000 },
        { name: "bata", image: "/images/t.jpg", price: 2000 },
      ],
    },
    {
      category: "electronics",
      subcategory: "smart phone",
      items: [
        { name: "nokia", image: "/images/nokia.jpeg", price: 2000 },
        { name: "samsung", image: "/images/samsong.jpg", price: 2000 },
        { name: "lanphone", image: "/images/lanphone.webp", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
      ],
    },
    {
      category: "electronics",
      subcategory: "old phone",
      items: [
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
        { name: "moto", image: "/images/moto.jpg", price: 2000 },
      ],
    },
  ];

  // Convert search term to lowercase for comparison
  const search = searchTerm?.toLowerCase() || "";

  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate("/productdetails", {
      state: {
        name:  item.name,
        price: item.price,
        image: item.image,
      },
    });
  };

  return (
    <div>
      {products.map((section, index) => {
        const matchedItems = section.items.filter(item =>
          item.name.toLowerCase().includes(search) ||
          section.category.toLowerCase().includes(search) ||
          section.subcategory.toLowerCase().includes(search)
        );
           
        // Skip category if no match
        if (matchedItems.length === 0) return null;

        return (
          <div key={index} className="border border-dark border-3 rounded-3 mt-3" style={{ backgroundColor: "#e6e6fa" }}>
            <h4 className="p-2">{section.category}:</h4>
            <h4 className="ps-3">{section.subcategory}:</h4>

            <div className="d-flex flex-wrap gap-3 p-3">
              {matchedItems.map((item, idx) => (
                <div key={idx} onClick={() => handleBuyNow(item)}> 
                  <div className="p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "200px", height: "200px", borderRadius: "20px" }}
                    />
                  </div>
                  <div className="ps-3"><h6>{item.name}</h6></div>
                  <div className="ps-3"><h6>price - ${item.price}</h6></div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
