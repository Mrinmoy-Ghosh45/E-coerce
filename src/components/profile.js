import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import './profile.css';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function Profile({ user, setUser }) {
  const [tab, setTab] = useState('profile');
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setPhone(user.phone || '');
      setDob(user.dob || '');
      setAddress(user.address || '');
      setGender(user.gender || '');
      setPincode(user.pincode || '');
      setCountry(user.country || '');
      setProfilePic(user.profilePic || '');
    }
  }, [user]);

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h4 className="text-danger">⚠️ Please log in to access your profile.</h4>
      </div>
    );
  }

  const handleSave = () => {
    setUser({
      name, email, phone, dob, address, gender, pincode, country, profilePic
    });
    setEditing(false);
  };

  const sendOtp = () => {
    if (!phone) return alert("📱 Enter phone number first");
    const fullPhone = phone.startsWith('+') ? phone : '+91' + phone;

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => sendOtp()
      });
    }

    signInWithPhoneNumber(auth, fullPhone, window.recaptchaVerifier)
      .then((confirmationResult) => {
        setConfirmResult(confirmationResult);
        setOtpSent(true);
        alert("✅ OTP sent to your phone.");
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send OTP.");
      });
  };

  const verifyOtp = () => {
    if (!otp || !confirmResult) return alert("Enter OTP");

    confirmResult.confirm(otp)
      .then(() => alert("✅ Phone number verified!"))
      .catch(() => alert("❌ Incorrect OTP"));
  };

  const renderProfileForm = () => (
    <>
      <div className="profile-pic-container">
        <img
          src={profilePic || "/images/default-profile.png"}
          alt="Profile"
          className="profile-pic"
        />
        {editing && (
          <input type="file" accept="image/*" onChange={(e) => {
            const file = e.target.files[0];
            if (file) setProfilePic(URL.createObjectURL(file));
          }} />
        )}
      </div>

      <div className="profile-fields">
        <div><label>Name:</label><input disabled={!editing} value={name} onChange={(e) => setName(e.target.value)} /></div>
        <div><label>Email:</label><input disabled={!editing} value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div><label>Phone:</label>
          <input disabled={!editing} value={phone} onChange={(e) => setPhone(e.target.value)} />
          {editing && <button onClick={sendOtp}>Send OTP</button>}
          {otpSent && (
            <div>
              <input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
              <button onClick={verifyOtp}>Verify</button>
            </div>
          )}
        </div>
        <div><label>DOB:</label><input disabled={!editing} type="date" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
        <div><label>Gender:</label>
          <select disabled={!editing} value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option><option>Male</option><option>Female</option><option>Other</option>
          </select>
        </div>
        <div><label>Country:</label><input disabled={!editing} value={country} onChange={(e) => setCountry(e.target.value)} /></div>
        <div><label>Pincode:</label><input disabled={!editing} value={pincode} onChange={(e) => setPincode(e.target.value)} /></div>
        <div><label>Address:</label><textarea disabled={!editing} value={address} onChange={(e) => setAddress(e.target.value)} /></div>
      </div>

      {editing ? (
        <div className="profile-buttons">
          <button onClick={handleSave}>💾 Save</button>
          <button onClick={() => setEditing(false)}>❌ Cancel</button>
        </div>
      ) : (
        <button className="edit-btn" onClick={() => setEditing(true)}>✏️ Edit Profile</button>
      )}
    </>
  );

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h4>👤 Hello, {name.split(' ')[0] || 'User'}</h4>
        <ul>
          <li onClick={() => setTab('profile')} className={tab === 'profile' ? 'active' : ''}>My Profile</li>
          <li onClick={() => setTab('wishlist')} className={tab === 'wishlist' ? 'active' : ''}>My Wishlist</li>
          <li onClick={() => setTab('orders')} className={tab === 'orders' ? 'active' : ''}>My Orders</li>
        </ul>
      </div>

      <div className="main-panel">
        {tab === 'profile' && renderProfileForm()}
        {tab === 'wishlist' && <h4>🛍️ You have no items in your wishlist.</h4>}
        {tab === 'orders' && <h4>📦 You haven't placed any orders yet.</h4>}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
