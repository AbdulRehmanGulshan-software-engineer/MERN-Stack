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
export function cartAddItem(productData) {
    return {
        type: CART_ADD_ITEM,
        payload: productData
    }
}

//Reducer
export default function cartReducer(state = [], action = { type: '' }) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const existingItem = state.find((cartItem) => cartItem.productID === action.payload.productID)
            if (existingItem) return state.map((cartItem) => {
                if (cartItem.productID === existingItem.productID) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
            return [...state, { ...action.payload, quantity: 1 }]
        case CART_REMOVE_ITEM:
            return state.filter(
                (cartItem) => cartItem.productID !== action.payload.productID)
        case CART_ITEM_INCREASE_QUANTITY:
            return state.map((cartItem) => {
                if (cartItem.productID === action.payload.productID) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 }
                }
                return cartItem
            })
        case CART_ITEM_DECREASE_QUANTITY:
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