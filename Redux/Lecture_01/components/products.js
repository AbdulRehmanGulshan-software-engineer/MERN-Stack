import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartAddItem } from '../store/slices/cartSlice.js'
import Success from './Success.jsx'

export default function Product({
  productID,
  title,
  rating,
  price,
  imageUrl,
}) {
  const dispatch = useDispatch()
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAddToCart = () => {
    dispatch(
      cartAddItem({
        productID
      })
    )

    setShowSuccess(true)

    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <>
      {showSuccess && <Success message={`${title} added to cart!`} />}

      <div className="product">
        <div className="product-image">
          <img src={imageUrl} alt={title} />
        </div>

        <div className="title-container">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>

        <div className="price-rating-container">
          <p className="rating">{+rating} ★ ★ ★ ★</p>
          <p className="price">${price}</p>
        </div>

        <div className="cta-container">
          <button onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}