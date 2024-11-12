// src/components/CartItem.js
import React from 'react';
import '../App.css';

const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-item">
    <img src={item.img} alt={item.name} />
    <h4>{item.name}</h4>
    <button onClick={() => removeFromCart(item)}>Remove</button>
  </div>
);

export default CartItem;
