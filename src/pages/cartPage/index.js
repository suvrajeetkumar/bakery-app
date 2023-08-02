import React, { useState, useEffect } from 'react';
import CartItem from '../../components/cartItem/index';
import './cartPage.css';

const Cart = () => {

  const [cartItems, setCartItems] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem("cartItems")) {
      const stringifiedItem = localStorage.getItem("cartItems");
      const cartItemObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
      const cartItemsArray = Object.values(cartItemObj);
      setCartItems(cartItemsArray);
  } else {
    setCartItems([]);
  }
  },[])

  const checkoutHandler = () => {
    console.log('you have ordered ===> ');
    cartItems.forEach(item => {
      console.log(`${item.quantity} ${item.name},`);
    })
   
    const totalBill = cartItems.reduce((totalAmount, currentItem) => totalAmount + currentItem.quantity*currentItem.price, 0)

    console.log('your total amount to pay is: $', totalBill);
    console.log('Thanks for visiting us. Have a nice day!')
  }

  function removeItemById(id) {
      setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const removeFromCartHandler = (cakeId) => {
    if(localStorage.getItem("cartItems")) {
      const stringifiedItem = localStorage.getItem("cartItems");
      const cartItemObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
      if(cartItemObj && (cakeId in cartItemObj)){
        delete cartItemObj[cakeId];
        localStorage.setItem("cartItems", JSON.stringify(cartItemObj));
        removeItemById(cakeId);
      }
    }
  }

  const changeQuantity = (cakeId, newQuantity) => {
    if(newQuantity > 0) {
    const updatedCart = cartItems.map(item => {
      if (item.id === cakeId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);

    if(localStorage.getItem("cartItems")) {
      const stringifiedItem = localStorage.getItem("cartItems");
      const cartItemObj = JSON.parse(stringifiedItem ? stringifiedItem : "{}");
      if(cartItemObj && (cakeId in cartItemObj)){
        cartItemObj[cakeId] = {
          ...cartItemObj[cakeId],
          quantity: newQuantity
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItemObj));
      }
    }
    }
  }

  return <div className='cart-item-container'>
    {cartItems ? cartItems.length > 0 ? 
    cartItems.map((product, key) => {
      return <CartItem 
      key={product.id}
      cakeId={product.id}
      image={product.image}
      name={product.name}
      price={product.price} 
      quantity={product.quantity}
      removeFromCartHandler={removeFromCartHandler}
      changeQuantity={changeQuantity}/>
    })
     : <div>you donot have any items added to cart</div> : <div>...Loading</div>}
     {cartItems && cartItems.length > 0 && <button className='checkout-button' onClick={checkoutHandler}>Checkout</button>}
    </div>
}

export default Cart;