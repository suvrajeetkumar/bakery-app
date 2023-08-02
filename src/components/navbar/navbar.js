import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar  = () => {
    const [ showBurgerMenu, setShowBurgerMenu ] = useState(null);

    const humbergerMenuHandler = () => {
        setShowBurgerMenu(!showBurgerMenu);
        
    }

    useEffect(()=>{

        const navbarCard = document.querySelector(".navbar-card");
        if(showBurgerMenu !== null){
            if(!showBurgerMenu) {
                navbarCard.classList.remove("show-navbar");
                navbarCard.classList.add("hide-navbar");
            } else if(showBurgerMenu) {
                navbarCard.classList.remove("hide-navbar");
                navbarCard.classList.add("show-navbar");
            }
        }
    }, [showBurgerMenu])

    return <div className='navbar-wrapper'>
        <div className='navbar-wrapper-grey'></div>
        <span className='navbar-bars' onClick={humbergerMenuHandler}>
            &#9776;
          </span>
          <Link className='cart-button-wrapper' to='/cart'>
            <img className='cart-logo' src={process.env.PUBLIC_URL + '/cart-icon.png'} />
          </Link>
          <div className='navbar-card'>
            <Link to="/" className='navbar-items'>
                <div className='navbar-image-wrapper-cake'>
                    <img className='navbar-image' src={process.env.PUBLIC_URL + '/cake.png'}></img>
                </div>
                <div className='navbar-text-item-product'>
                    <div className='navbar-item-header'>Products</div>
                    <div className='navbar-item-content'>Lorem ipsum dolor sit amet,</div>
                </div>
            </Link>
            <div className='navbar-items'>
                <div className='navbar-image-wrapper-class'>
                    <img className='navbar-image' src={process.env.PUBLIC_URL + '/cakeClass.png'}></img>
                </div>
                <div className='navbar-text-item-cake'>
                    <div className='navbar-item-header'>Cake Class</div>
                    <div className='navbar-item-content'>Lorem ipsum dolor sit amet,</div>
                </div>
            </div>
            <div className='navbar-items'>
                <div className='navbar-image-wrapper-recipe'>
                    <img className='navbar-image' src={process.env.PUBLIC_URL + '/recipes.png'}></img>
                </div>
                <div className='navbar-text-item-recipe'>
                    <div className='navbar-item-header'>Recipes</div>
                    <div className='navbar-item-content'>Lorem ipsum dolor sit amet,</div>
                </div>
            </div>
        </div>
    </div>
}

export default Navbar;