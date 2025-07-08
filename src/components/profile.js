import React, { useState, useEffect, useRef } from 'react';
import { auth } from './firebase'; 


import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function Profile({ user, setUser }) {
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
  const recaptchaRef = useRef(null);

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
      name,
      email,
      phone,
      dob,
      address,
      gender,
      pincode,
      country,
      profilePic
    });
    setEditing(false);
  };

  const handleCancel = () => {
    setName(user.name || '');
    setEmail(user.email || '');
    setPhone(user.phone || '');
    setDob(user.dob || '');
    setAddress(user.address || '');
    setGender(user.gender || '');
    setPincode(user.pincode || '');
    setCountry(user.country || '');
    setProfilePic(user.profilePic || '');
    setEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const sendOtp = () => {
    if (!phone) return alert("📱 Enter phone number first");

    // Add +91 or country code if needed
    const fullPhone = phone.startsWith('+') ? phone : '+91' + phone;

    if (!recaptchaRef.current) {
      recaptchaRef.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => sendOtp()
      });
    }

    signInWithPhoneNumber(auth, fullPhone, recaptchaRef.current)
      .then((confirmationResult) => {
        setConfirmResult(confirmationResult);
        setOtpSent(true);
        alert("✅ OTP sent to your phone.");
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send OTP. Try again.");
      });
  };

  const verifyOtp = () => {
    if (!otp || !confirmResult) return alert("Enter OTP");

    confirmResult.confirm(otp)
      .then(() => {
        alert("✅ Phone number verified!");
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Incorrect OTP");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{
        maxWidth: '700px',
        margin: '0 auto',
        borderRadius: '16px',
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        color: '#333'
      }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">👤 My Profile</h3>
        </div>

        <div className="text-center mb-4">
          <img
            src={profilePic || "/images/default-profile.png"}
            alt="Profile"
            className="rounded-circle border border-primary"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          {editing && (
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleImageChange}
                className="form-control mt-2"
              />
              <small className="text-muted">📸 Choose photo or use camera</small>
            </div>
          )}
        </div>

        {editing ? (
          <>
            <div className="row">
              {/* Input Fields */}
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">👤 Full Name</label>
                <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">📧 Email</label>
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">📱 Phone</label>
                <div className="input-group">
                  <input className="form-control" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <button type="button" className="btn btn-outline-primary" onClick={sendOtp}>Send OTP</button>
                </div>
              </div>

              {otpSent && (
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">🔑 Enter OTP</label>
                  <input className="form-control" type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
                  <button className="btn btn-outline-success mt-2" onClick={verifyOtp}>Verify OTP</button>
                </div>
              )}

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">🎂 Date of Birth</label>
                <input className="form-control" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">🚻 Gender</label>
                <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">🌐 Country</label>
                <input className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">📮 Pin Code</label>
                <input className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label fw-semibold">🏠 Address</label>
                <textarea className="form-control" rows="2" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-success w-50 me-2" onClick={handleSave}>💾 Save</button>
              <button className="btn btn-secondary w-50" onClick={handleCancel}>❌ Cancel</button>
            </div>
          </>
        ) : (
          <>
            <p><strong>👤 Name:</strong> {name || 'N/A'}</p>
            <p><strong>📧 Email:</strong> {email || 'N/A'}</p>
            <p><strong>📱 Phone:</strong> {phone || 'Not provided'}</p>
            <p><strong>🎂 DOB:</strong> {dob || 'Not set'}</p>
            <p><strong>🚻 Gender:</strong> {gender || 'Not selected'}</p>
            <p><strong>📮 Pin Code:</strong> {pincode || 'Not provided'}</p>
            <p><strong>🌐 Country:</strong> {country || 'Not provided'}</p>
            <p><strong>🏠 Address:</strong> {address || 'Not added'}</p>
            <button className="btn btn-primary w-100 mt-3" onClick={() => setEditing(true)}>✏️ Edit Profile</button>
          </>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
