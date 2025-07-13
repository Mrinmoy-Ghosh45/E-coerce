import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({ setUser }) { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    setUser({ name: username, email: `${username}@example.com` });

    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Login</h3>
      <form onSubmit={handleLogin} className="w-50 mx-auto border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">User name</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
