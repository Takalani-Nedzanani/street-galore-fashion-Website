// src/components/ProductCard.js
import React from 'react';
import '../App.css';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.img} alt={product.name} />
    <h4>{product.name}</h4>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
