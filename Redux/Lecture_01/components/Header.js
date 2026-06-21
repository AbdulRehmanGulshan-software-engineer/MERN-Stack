import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import cartIcon from '../assets/cartIcon.svg'
import cartIcon from 'url:../assets/cartIcon.svg'
import { fetchProducts, fetchProductsError, updateAllProducts } from '../store/slices/productsSlice'
import { productsList } from '../store/productsList'
import { fetchCartItems, fetchCartItemsError, loadCartItems } from '../store/slices/cartSlice'


export default function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data))
      }).catch(() => {
        dispatch(fetchProductsError())
      })

    dispatch(fetchCartItems())
    // loaded cart item data from fakeAPI
    fetch('https://fakestoreapi.com/carts/5')
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadCartItems(data))
      }).catch(() => {
        dispatch(fetchCartItemsError())
      })

  }, [])


  const cartItems = useSelector((state) => state.cartItems.list)

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