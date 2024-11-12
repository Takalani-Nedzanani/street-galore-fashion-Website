


// src/pages/Category.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const KidsCategory = ({ category }) => {
  const { addToCart } = useCart();
  const products = [
    { id: 1, name: 'Casual Shirt', price: 5, img: 'https://th.bing.com/th/id/OIP.kWQam0K3Lh_TjYDTF94DVQHaHa?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Autumn Canvas ', price: 15, img: 'https://th.bing.com/th/id/OIP.JCJHPVsdhhmI1l3Lv9mcwgAAAA?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Elastic Sports Casual', price: 20, img: 'https://th.bing.com/th/id/OIP.Ec8CXpHJ6w73bOGPZCEl9wHaHa?rs=1&pid=ImgDetMain' },
  
    { id: 2, name: 'Club Passing Hats', price: 4, img: 'https://th.bing.com/th/id/R.60558cd0af49eeb102b6c6cdb4e543fd?rik=t%2b9midYgYsTTGQ&pid=ImgRaw&r=0' },
    { id: 3, name: 'Socks', price: 11, img: 'https://th.bing.com/th/id/R.e7da385d845de68c5dd4d5584ff3ebd2?rik=JnT9lQcw0jELfg&pid=ImgRaw&r=0' },
  ];
  const products1 = [
    { id: 4, name: 'Mickey And Friends Pullover', price: 25, img: 'https://th.bing.com/th/id/OIP.BbM2KPuN0S9-51ssniCVwQHaHa?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Girl Sandals', price: 8, img: 'https://th.bing.com/th/id/OIP.di2MFPMB3xaMK0_Udqpi_QHaHa?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Superman T-shirt', price: 2, img: 'https://th.bing.com/th/id/OIP.WJwwYn0YhUPEXqSOqoXP3QHaHa?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Suits', price: 20, img: 'https://i.ebayimg.com/images/g/VKwAAOSwaA5Wi-0a/s-l500.jpg' },
  
    { id: 6, name: 'Party Dress', price: 15, img: 'https://th.bing.com/th/id/OIP.q2JADOgdzUkndGS2dQD9CQHaHa?rs=1&pid=ImgDetMain' },
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

export default KidsCategory;
