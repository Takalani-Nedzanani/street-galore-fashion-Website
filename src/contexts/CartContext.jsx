// src/contexts/CartContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to clear the cart (used after checkout)
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total number of items in the cart
  const cartItemCount = useMemo(() => cart.length, [cart]);

  // Calculate total amount of items in the cart
  const totalAmount = useMemo(
    () => cart.reduce((total, item) => total + item.price, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartItemCount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart Context
export const useCart = () => useContext(CartContext);
