import React from 'react'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.list.map(({ productID, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productID
      )
      return {
        ...cartProduct,
        quantity
      }
    })
      .filter(({ title }) => title)
  })

  const total = cartItems.reduce((total, item) => {
    return total + Math.round(item.quantity * item.price * 100) / 100;
  }, 0);

  const dispatch = useDispatch()

  const isLoading = useSelector(state => state.cartItems.loading)
  const error = useSelector(state => state.cartItems.error)
  console.log('checking true or false : ', isLoading)

  return (
    isLoading ?
      (
        <div className="cart-loading">
          <div className="cart-loader"></div>
          <h2>Loading your cart items...</h2>
        </div>
      )
      :
      error ?
        <h2 style={{ textAlign: 'center' }}>{error}</h2>
        :
        <div className="cart-container">
          <h2>Items in Your Cart</h2>
          <div className="cart-items-container">
            <div className="cart-header cart-item-container">
              <div className="cart-item">Item</div>
              <div className="item-price">Price</div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            {cartItems.map(({ id, title, rating, price, image, quantity }) => (
              < CartItem
                key={id}
                productID={id}
                title={title}
                price={price}
                quantity={quantity}
                imageUrl={image}
                rating={rating.rate}
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