import React, { useState, useEffect } from "react";
import ProductCard from '../../components/cardComponent/index';
import ProductFilter from '../../components/filter/index';
import './homepage.css';

const HomePage = () => {

    const dummyState = [{
        id: "1",
        imgUrl: "blackForest.jpg",
        name: "Black Forest Cake",
        price: "15",
        addedToCart: false,
    },
    {
        id: "2",
        imgUrl: "butterscotch.jpg",
        name: "Butterscotch Cake",
        price: "12",
        addedToCart: false,
    },
    {
        id: "3",
        imgUrl: "redVelvet.jpg",
        name: "Red Velvet Cake",
        price: "15",
        addedToCart: false,
    },
    {
        id: "4",
        imgUrl: "strawberryCake.jpg",
        name: "Strawberry Cake",
        price: "14",
        addedToCart: false,
    }
    ]

    const [products, setProducts] = useState(dummyState);
  
    return (
        <div className="products-wrapper">
    <header class="product-header">
    <h1 class="product-title">NEW PRODUCTS</h1>
    <div className="product-underline-wrapper">
        <div className="underline"></div>
        <img src={process.env.PUBLIC_URL + "/cakeLogo.png"}></img>
        <div className="underline"></div>
    </div>
  </header>
      <ProductFilter products={products} setProducts={setProducts}/>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            cakeId={product.id}
            image={product.imgUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      </div>
    );
  };
  
  export default HomePage;
