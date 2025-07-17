import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Checkbox({ searchTerm, setSearchTerm }) {
  const options = ["phone", "laptop", "food", "shoe"];

  return (
    <div style={{
      display: 'flex',
      gap: '10px',
      backgroundColor: "white",
      width: '550px',
      padding: '8px',
      borderRadius: '8px',
    }}>
      <div className="pt-1"><i className="fa-solid fa-magnifying-glass" style={{ color: 'black' }}></i></div>

      <input
        list="product-options"
        id="products"
        name="products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search name"
        style={{
          width: '500px',
          border: 'none',
          outline: 'none',
          fontSize: '16px',
        }}
      />
      <datalist id="product-options">
        {options.map((item, index) => (
          <options key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
}
