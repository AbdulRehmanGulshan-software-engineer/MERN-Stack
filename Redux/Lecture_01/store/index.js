// import { createStore, combineReducers } from "redux"
import cartReducer, { cartAddItem, cartRemoveItem, increaseCartItemQuantity } from "../store/slices/cartSlice"
import wishListReducer, { addWishList, removeWishList } from "../store/slices/wishListSlice"
import productReducer from "../store/slices/productsSlice"
import { decreaseCartItemQuantity } from "../store/slices/cartSlice"
// import { productsList } fromed/productsList"
import { produce } from 'immer'
import { use } from "react"
import { configureStore } from "@reduxjs/toolkit"
import { analytics, auth, logger } from "./middleware/logger"


// //Combined All Reducers
// const reducer = combineReducers({
//     products: productReducer,
//     cartItems: cartReducer,
//     wishList: wishListReducer
// })


// //currying Middleware function
// function logger(store) {
//     return function (next) {
//         return function (action) {
//             console.log('store: ', store)
//             console.log('next: ', next)
//             console.log('action: ', action)
//             next(action)
//         }
//     }
// }


// const logger = (store) => (next) => (action) => {
//     console.log('store: ', store)
//     console.log('next: ', next)
//     console.log('action: ', action)
//     next(action)
// }


//Added Store Enhancer  __REDUX_DEVTOOLS_EXTENSION__
export const store = configureStore({
    reducer: {
        products: productReducer,
        cartItems: cartReducer,
        wishList: wishListReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, auth, analytics),
})

const users = [
    {
        name: 'Abdul',
        age: 20,
    },
    {
        name: 'Rehman',
        age: 21,
    },
    {
        name: 'Gulshan',
        age: 19,
    },
]

// // NonFunctional
// users[1].age = 20
// console.log(users)

// //Functional
// const newUsers = users.map((user, i) => {
//     if (i == 1) {
//         return { ...user, age: 20 }
//     }
//     return user
// })

// //immutable using immer
// const newUsers = produce(users, (userCopy) => {
//     console.log(users)
//     console.log(userCopy)
//     userCopy[1].age = 20
// })
// console.log(newUsers)

// store.dispatch(cartAddItem(4))
// store.dispatch(cartAddItem(1))
// store.dispatch(cartAddItem(18, 5))
// store.dispatch(cartRemoveItem(18))
// store.dispatch(increaseCartItemQuantity(4))
// store.dispatch(decreaseCartItemQuantity(4))
// store.dispatch(decreaseCartItemQuantity(4))
// store.dispatch(decreaseCartItemQuantity(4))
// store.dispatch(decreaseCartItemQuantity(4))
// store.dispatch(decreaseCartItemQuantity(4))
// store.dispatch(addWishList(4))
// store.dispatch(removeWishList(4))

// console.log(store.getState())