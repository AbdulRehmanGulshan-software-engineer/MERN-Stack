import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/products'
import CartItemShimmer from './ProductGridShimmer'
import { getAllProducts, getProductError, getLoadingState } from '../store/slices/productsSlice'

export default function Home() {
  const productsList = useSelector(getAllProducts)
  const isLoading = useSelector(getLoadingState)
  const error = useSelector(getProductError)

  useSelector(console.log)

  return (
    isLoading
      ?
      // (<h1 style={{textAlign:'center'}}>Loading...</h1>)
      <CartItemShimmer />
      :
      (
        error ||
        (
          <div className="products-container">
            {productsList.map(({ id, title, rating, price, image }) => (
              <Product
                productID={id}
                key={id}
                title={title}
                rating={rating.rate}
                price={price}
                imageUrl={image}
              />
            ))}
          </div>
        )
      )
  )
}