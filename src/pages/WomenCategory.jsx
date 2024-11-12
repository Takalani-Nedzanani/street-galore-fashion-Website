


// src/pages/Category.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const WomenCategory = ({ category }) => {
  const { addToCart } = useCart();
  const products = [
    { id: 1, name: 'Flowered Dress', price: 50, img: 'https://th.bing.com/th/id/R.d104109f5ff7f4b9acc2284e79f87282?rik=leg7%2fc7FJiUwkA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-WSxpb-jWNFQ%2fUTHBTiDE2yI%2fAAAAAAAAA9g%2fKGNwUll7uOc%2fs1600%2flatest%2bdresses7.jpg&ehk=T%2bAhSUDD1H%2f7ObNR8GyqbkIbROq1udA4rEzmGdnuZyU%3d&risl=&pid=ImgRaw&r=0' },
    { id: 3, name: 'High Heels', price: 20, img: 'https://th.bing.com/th/id/OIP.pIw0I8Dat5mxZdXp3Qa2WAHaHK?w=201&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  
    { id: 2, name: 'Silver Double Beaded RhineStone', price: 35, img: 'https://i5.walmartimages.com/asr/1f6b05ce-dfe7-454c-b0e5-c040df39cdec_1.e6bc35eff6d50f22644c0dfab873428e.jpeg' },
    { id: 3, name: 'Short Dress', price: 15, img: 'https://imgix.bustle.com/uploads/image/2019/8/15/d7934bba-f936-49e6-b25f-9ceff414d066-best-dresses-for-short-women-5.jpg?w=450&fit=crop&crop=faces&auto=format&q=70' },
    { id: 3, name: 'Hat For Weddings', price: 18, img: 'https://i.etsystatic.com/5824523/r/il/bc98f2/1591813541/il_fullxfull.1591813541_96gh.jpg' },
  ];
  
  const products1 = [
    { id: 4, name: 'Soft Pink Elegant Bedding', price: 40, img: 'https://th.bing.com/th/id/R.3ae6f728fb0b3b6d9cdfa72a71f2cb6a?rik=KjQfDP%2fdphjYCA&pid=ImgRaw&r=0' },
    { id: 5, name: 'Color Pallete Makeup', price: 60, img: 'https://m.media-amazon.com/images/I/7149totO3GL._SL1500_.jpg' },
    { id: 6, name: 'Sandals', price: 15, img: 'https://th.bing.com/th/id/OIP.RW-TVwsjBzOkfCU190D_SgHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, name: ' Socks', price: 20, img: 'https://th.bing.com/th/id/OIP.pesK2b3cWEkMMcw4SGJ2FQHaHk?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Summer Top', price: 11, img: 'https://th.bing.com/th/id/OIP.Hpaxbev2DGStFokougQZSwHaJ4?rs=1&pid=ImgDetMain' },
  
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

export default WomenCategory;
