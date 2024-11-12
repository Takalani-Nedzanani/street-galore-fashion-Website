// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const Navbar = () => {
  const { cartItemCount } = useCart();

  return (
  <nav className="navbar">
    <h1>Street Galore Fashion</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category/men">Men</Link></li>
      <li><Link to="/women-category">Women</Link></li>
      <li><Link to="/kids-category">Kids</Link></li>
      <li>
          <Link to="/cart">
            Cart {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}
          </Link>
        </li>
    </ul>
  </nav>
);
};

export default Navbar;
