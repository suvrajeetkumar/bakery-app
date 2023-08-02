import React, { useState, useEffect } from 'react';
import './cardComponent.css';

const ProductCard = ({ cakeId, image, name, price }) => {
    
    const [isCakeAddedToCart, setCakeAddedToCart] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("cartItems")) {
            const stringifiedItem = localStorage.getItem("cartItems");
            const cartItemObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
            if(cartItemObj && (cakeId in cartItemObj)){
                setCakeAddedToCart(true);
            }
        }
    }, [])

    const addToCartHandler = () => {
        const cakeDetails = {
            id: cakeId,
            image: image,
            name: name,
            price: price,
            quantity: 1,
        }
    
        if(localStorage.getItem("cartItems")) {
            const stringifiedItem = localStorage.getItem("cartItems");
            const cartItemObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
            if(cartItemObj && !(cakeId in cartItemObj)){
                cartItemObj[cakeId] = cakeDetails;
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItemObj));
        } else {
            const cartItemObj = {}
            cartItemObj[cakeId] = cakeDetails;
            localStorage.setItem("cartItems", JSON.stringify(cartItemObj));
        }
        setCakeAddedToCart(true);
      }

    return (
      <div className="product-card">
        <div className='cake-image-wrapper'>
            <img className='cake-image' src={`${process.env.PUBLIC_URL}/${image}`} alt={name} />
        </div>
        <div className='card-content-wrapper'>
          <div className='product-card-name'>{name}</div>
          <p className='product-card-price'>Price: ${price}</p>
          <button className={`add-to-cart ${isCakeAddedToCart ? 'green-txt' : 'red-txt'}`} onClick={addToCartHandler}>{isCakeAddedToCart ? 'Added' : 'Add'} to Cart</button>
        </div>
      </div>
    );
  };

export default ProductCard;