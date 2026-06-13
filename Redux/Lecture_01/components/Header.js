import React, { useState } from 'react'
import { useSelector } from '../react-redux'
import { Link } from 'react-router-dom'
// import cartIcon from '../assets/cartIcon.svg'
import cartIcon from 'url:../assets/cartIcon.svg'

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems)

  //Total Quantity
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);


  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={cartIcon} alt="cart-icon" />
          <div className="cart-items-count">{totalQuantity}</div>
        </Link>
      </div>
    </header>
  )
}