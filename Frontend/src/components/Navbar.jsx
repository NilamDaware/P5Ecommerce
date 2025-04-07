
import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    
      <div className="navbar-left">
        <img src="/books1.png" alt="BookNest Logo" className="logo" />
        <h1 className="brand-name">BookNest</h1>
      </div>

    
      <div className="navbar-center">
        <input type="text" placeholder="Search books..." className="search-bar" />
        <button className="search-button"><FaSearch /></button>
      </div>

      
      <div className="navbar-right">
        <Link to="/" className="nav-item">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/wishlist" className="nav-item">
          <FaHeart className="nav-icon" />
          <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="nav-item">
          <FaShoppingCart className="nav-icon" />
          <span>Cart</span>
        </Link>
        <Link to="/login" className="nav-item">
          <FaUser className="nav-icon" />
          <span>Account</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
