// src/pages/Cart.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const Cart = () => {
  const { cart, removeFromCart, totalAmount, clearCart } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  // Handle the checkout process
  const handleCheckout = () => {
    clearCart();
    setCheckoutMessage("Thank you for your purchase! Your order has been placed.");
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${totalAmount}</h3>
          <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
      )}

      {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
    </div>
  );
};

export default Cart;
