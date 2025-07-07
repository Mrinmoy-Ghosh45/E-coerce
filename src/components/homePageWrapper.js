import React from 'react';
import Checkbox from './checkbox';
import { useState } from 'react';
import Homepage from './homepage';
import { Link } from 'react-router-dom';

export default function HomePageWrapper({ user }) { 
  const [searchTerm, setSearchTerm] = useState('');

  const displayName = user?.name || 'Guest'; 

  return (
    <>
      <div className='bg-primary text-center text-white py-3 position-relative'>
        <h2>E-Sel</h2>

        <div
          className="dropdown"
          style={{ position: 'absolute', top: '15px', right: '20px' }}
        >
          <button
            className="btn btn-light btn-sm dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hello, {displayName} {/* ✅ dynamic name */}
          </button>

          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li>
              <Link to="/profile" className="dropdown-item">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/orders" className="dropdown-item">
                My Orders
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button className="dropdown-item">Logout</button>
            </li>
          </ul>
        </div>

        <div style={{ paddingLeft: "480px" }}>
          <Checkbox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <div className='pt-2 ps-2'>
        <Homepage searchTerm={searchTerm} />
      </div>
    </>
  );
}
