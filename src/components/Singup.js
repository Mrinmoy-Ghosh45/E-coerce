import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Signup successful! ');
      navigate('/');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Sign Up</h3>
      <form onSubmit={handleSignup} className="w-50 mx-auto border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
    </div>
  );
}
