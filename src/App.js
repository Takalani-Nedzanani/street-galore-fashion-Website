// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import WomenCategory from './pages/WomenCategory';
import KidsCategory from './pages/KidsCategory';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) => setCart(cart.filter((item) => item !== product));

  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category addToCart={addToCart} />} />
        <Route path="/women-category" element={<WomenCategory addToCart={addToCart} />} />
        <Route path="/kids-category" element={<KidsCategory addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  );
};

export default App;
