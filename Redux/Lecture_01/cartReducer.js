// Action Types
const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

//Action Creators
export function decreaseCartItemQuantity(productID) {
    return {
        type: CART_ITEM_DECREASE_QUANTITY,
        payload: { productID },
    }
}
export function increaseCartItemQuantity(productID) {
    return {
        type: CART_ITEM_INCREASE_QUANTITY,
        payload: { productID },
    }
}
export function cartRemoveItem(productID) {
    return {
        type: CART_REMOVE_ITEM,
        payload: { productID }
    }
}
export function cartAddItem(productID, quantity = 1) {
    return {
        type: CART_ADD_ITEM,
        payload: { productID, quantity }
    }
}

//Reducer
export default function cartReducer(state = [], action = { type: '' }) {
    switch (action.type) {
        case 'cart/addItem':
            return [...state, action.payload]
        case 'cart/removeItem':
            return state.filter(
                (cartItem) => cartItem.productID !== action.payload.productID)
        case 'cart/increaseItemQuantity':
            return state.map((cartItem) => {
                if (cartItem.productID === action.payload.productID) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
        case 'cart/decreaseItemQuantity':
            return state
                .map((cartItem) => {
                    if (cartItem.productID === action.payload.productID) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem
                })
                .filter((cartItem) => cartItem.quantity > 0)

        default:
            return state
    }
}