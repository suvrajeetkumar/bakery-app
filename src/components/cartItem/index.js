import React, { useState } from 'react';
import './cartItem.css';

const CartItem = ({ cakeId, image, name, price, quantity, removeFromCartHandler, changeQuantity }) => {

    return (
      <div className="cart-item">
        <div className='cart-cake-image-wrapper'>
            <img className='cake-image' src={`${process.env.PUBLIC_URL}/${image}`} alt={name} />
        </div>
        <div className='cart-item-content-wrapper'>
          <div className='cart-item-name'>{name}</div>
          <p className='cart-item-price'>Price: ${price}</p>
          <div>quantity: <input type='number' className='quantity-input' value={quantity} onChange={(e) => changeQuantity(cakeId, e.target.value)}/></div>
          <button className='remove-from-cart' onClick={() => removeFromCartHandler(cakeId)}>Remove from Cart</button>
        </div>
      </div>
    );
  };

export default CartItem;