// src/pages/Home.js
import React from 'react';
import CategoryCard from '../components/CategoryCard';
import '../App.css';

const Home = () => {
  const categories = [
    { name: 'Men', img: 'https://media.istockphoto.com/photos/mens-clothing-and-personal-accessories-picture-id864505242?b=1&k=20&m=864505242&s=170667a&w=0&h=SnyZOUXnbqZN0y5MMSAspiNFzJjVTk0KMdjp6zUHryM=' },
    { name: 'Women', img: 'https://th.bing.com/th/id/R.40afa2bb991f0cc072f8fb3986ef2ea1?rik=z8RY7o0VrARbGg&pid=ImgRaw&r=0' },
    { name: 'Kids', img: 'https://ae01.alicdn.com/kf/HTB1aWGOJVXXXXaBXXXXq6xXFXXXr/Summer-Dresses-For-Girls-Cotton-Children-Clothing-Denim-Baby-Clothes-Floral-Short-Sleeve-Kids-Clothes-For.jpg' },
  ];

  return (
    <div className="home">
      <h2>Shop by Category</h2>
      <br/>
      <div className="moving-image-container">
    <img
      src="https://th.bing.com/th/id/R.273f4132e98de19cfb9b2e4c29080806?rik=kSGqNsQ9NPyZSQ&pid=ImgRaw&r=0" 
      alt="Moving" 
      className="moving-image"
      />
      </div>
      <br/>
      <div className="categories">
        {categories.map((category) => (
          <CategoryCard key={category.name} name={category.name} img={category.img} />
        ))}
      </div>
    </div>
  );
};

export default Home;
