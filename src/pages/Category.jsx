


// src/pages/Category.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const Category = ({ category }) => {
  const { addToCart } = useCart();
  const products = [
    { id: 1, name: 'Cargo Pants', price: 50, img: 'https://th.bing.com/th/id/OIP.vLLACfS6CafPB-CjB4e4zwAAAA?rs=1&pid=ImgDetMain' },
    { id: 2, name: 'OutFitter Hoodie', price: 35, img: 'https://th.bing.com/th/id/OIP.BZU-MKhf6FllQwM9yWFhNgHaIe?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Dry-fit T-shirts', price: 20, img: 'https://th.bing.com/th/id/OIP.h5FIiN8gYV5idjrVw2f6tgHaJ4?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Socks', price: 5, img: 'https://th.bing.com/th/id/OIP.NhhooBSp2oTejd2QeW4uigHaJd?w=154&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, name: 'Boxers', price: 10, img: 'https://th.bing.com/th/id/OIP.Mxb36GsQRvUbONPlZYSO6AHaHV?w=208&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  
  ];
  const products1 = [
    { id: 4, name: 'Loose Track Pant', price: 40, img: 'https://th.bing.com/th/id/OIP.k3WOcoIZq1qc77blBPM8dQAAAA?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Casual Shoes', price: 60, img: 'https://th.bing.com/th/id/OIP.R2HzFjGwr3K5HX2IUYR--wAAAA?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Stylish Hats', price: 15, img: 'https://th.bing.com/th/id/OIP.a1ccpyOLsRe2NxthwUm1owAAAA?rs=1&pid=ImgDetMain' },
    { id: 3, name: '3 Piece Tailored Brown Suit', price: 11, img: 'https://happygentleman.com/wp-content/uploads/2020/06/ws22-brown-4.jpg' },
    { id: 3, name: 'Dry-fit T-shirts', price: 7, img: 'https://th.bing.com/th/id/R.b88c7a448665b82650396b854c53b4de?rik=r4PM7Fggez9zsQ&pid=ImgRaw&r=0' },
  
  ];

  return (
    <><div className="category">
    <h2>{category} Collection</h2>
    <div className="products">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
</div><br /><div className="category">
        
        <div className="products">
            {products1.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    </div></>
    
  );
};

export default Category;
