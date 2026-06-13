import React from 'react'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from '../react-redux'

export default function Cart() {
  const cartItems = useSelector((state) => {
    return state.cartItems
  })

  console.log(cartItems)

  const total = cartItems.reduce((total, item) => {
    return total + Math.round(item.quantity * item.price * 100) / 100;
  }, 0);

  const dispatch = useDispatch()

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
        {cartItems.map(({ productID, title, rating, price, imageUrl, quantity }) => (
          <CartItem
            key={productID}
            productID={productID}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
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