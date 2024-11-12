// src/components/CategoryCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CategoryCard = ({ name, img }) => (
  <Link to={`/category/${name.toLowerCase()}`} className="category-card">
    <img src={img} alt={`${name}`} />
    <h3>{name}</h3>
  </Link>
);

export default CategoryCard;
