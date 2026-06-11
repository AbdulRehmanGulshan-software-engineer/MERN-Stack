import { createStore } from "redux"
import { productsList } from "./productsList"

const initialState = {
    products: productsList,
    cartItems: [],
    wishList: []
}

const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'cart/addItem':
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case 'cart/removeItem':
            return { ...state, cartItems: [...state.cartItems.filter((cartItem) => cartItem.productID !== action.payload.productID)] }
        case 'cart/increaseItemQuantity':
            return {
                ...state, cartItems: state.cartItems.map((cartItem) => {
                    if (cartItem.productID === action.payload.productID) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    }
                    return cartItem
                })
            }
        case 'cart/decreaseItemQuantity':
            return {
                ...state, cartItems: state.cartItems.map((cartItem) => {
                    if (cartItem.productID === action.payload.productID) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem
                })
                    .filter((cartItem) => cartItem.quantity > 0)
            }
        case 'wishList/addItem':
            return { ...state, wishList: [...state.wishList, action.payload] }
        case 'wishList/removeItem':
            return { ...state, wishList: [...state.wishList.filter((wishListItem) => wishListItem.productID !== action.payload.productID)] }

        default:
            return state
    }
}

//Added Store Enhancer  __REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

store.dispatch({ type: CART_ADD_ITEM, payload: { productID: 1, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productID: 4, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productID: 18, quantity: 1 } })
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productID: 18 } })
store.dispatch({ type: CART_ITEM_INCREASE_QUANTITY, payload: { productID: 4 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productID: 4 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productID: 4 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productID: 4 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productID: 4 } })
store.dispatch({ type: CART_ITEM_DECREASE_QUANTITY, payload: { productID: 4 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productID: 4 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productID: 4 } })