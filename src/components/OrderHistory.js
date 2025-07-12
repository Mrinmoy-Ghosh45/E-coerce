import React from 'react';

export default function OrderHistory({ orders }) {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center text-muted fs-5">No orders yet.</div>
      ) : (
        orders.map((item, index) => (
          <div
            className="card mb-4 shadow-sm"
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #ddd'
            }}
          >
            <div className="row g-0 align-items-center">
              <div className="col-md-3 p-3 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ maxWidth: '100%', maxHeight: '140px', borderRadius: '10px' }}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text mb-1">
                    <strong>Price:</strong> ₹{item.price}
                  </p>
                  <p className="card-text">
                    <span className="badge bg-success">Order Confirmed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
