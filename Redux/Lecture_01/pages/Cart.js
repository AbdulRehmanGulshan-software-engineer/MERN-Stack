import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

import {
  getCartError,
  getCartItems,
  getCartLoadingState,
} from '../store/slices/cartSlice'

export default function Cart() {
  const cartItems = useSelector(getCartItems)

  const isLoading = useSelector(getCartLoadingState)
  const error = useSelector(getCartError)

  const total = cartItems.reduce(
    (total, item) =>
      total + Math.round(item.quantity * item.price * 100) / 100,
    0
  )

  if (isLoading) {
    return (
      <div className="cart-loading">
        <div className="cart-loader"></div>
        <h2>Loading your cart items...</h2>
      </div>
    )
  }

  if (error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>
  }

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>

      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>

        {cartItems.map(
          ({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productID={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          )
        )}

        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">{total}</div>
        </div>
      </div>
    </div>
  )
}