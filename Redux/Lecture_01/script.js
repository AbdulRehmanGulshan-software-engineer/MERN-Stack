import { createStore, combineReducers } from "redux"
import cartReducer, { cartAddItem, cartRemoveItem, increaseCartItemQuantity } from "./cartReducer"
import wishListReducer, { addWishList, removeWishList } from "./wishListReducer"
import productReducer from "./productsReducer"
import { decreaseCartItemQuantity } from "./cartReducer"
// import { productsList } fromed/productsList"


//Combined All Reducers
const reducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
})


//Added Store Enhancer  __REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

store.dispatch(cartAddItem(4))
store.dispatch(cartAddItem(1))
store.dispatch(cartAddItem(18, 5))
store.dispatch(cartRemoveItem(18))
store.dispatch(increaseCartItemQuantity(4))
store.dispatch(decreaseCartItemQuantity(4))
store.dispatch(decreaseCartItemQuantity(4))
store.dispatch(decreaseCartItemQuantity(4))
store.dispatch(decreaseCartItemQuantity(4))
store.dispatch(decreaseCartItemQuantity(4))
store.dispatch(addWishList(4))
store.dispatch(removeWishList(4))

console.log(store.getState())