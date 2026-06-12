// Action Types
export const CART_ADD_ITEM = 'cart/addItem'
export const CART_REMOVE_ITEM = 'cart/removeItem'
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

export default function cartReducer(state = [], action) {
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