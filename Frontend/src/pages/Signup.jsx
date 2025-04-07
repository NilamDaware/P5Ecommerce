import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import './LoginSignup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', {
        name,
        email,
        password
      });
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">📚 Join BookNest Today</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <div className="auth-input-group">
          <FaUser className="auth-input-icon" />
          <input
            className="auth-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="auth-input-group">
          <FaEnvelope className="auth-input-icon" />
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="auth-input-group">
          <FaLock className="auth-input-icon" />
          <input
            className="auth-input"
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {showPass ? (
            <FaEyeSlash className="auth-toggle-icon" onClick={() => setShowPass(false)} />
          ) : (
            <FaEye className="auth-toggle-icon" onClick={() => setShowPass(true)} />
          )}
        </div>
        <button className="auth-button" type="submit">Sign Up</button>
      </form>
      <p className="auth-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
