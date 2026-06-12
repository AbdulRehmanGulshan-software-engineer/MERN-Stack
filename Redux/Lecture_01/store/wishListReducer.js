//Action Types
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

//Action Creator
export function addWishList(productID) {
    return {
        type: WISHLIST_ADD_ITEM,
        payload: { productID }
    }
}
export function removeWishList(productID) {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: { productID }
    }
}

export default function wishListReducer(state = [], action) {
    switch (action.type) {
        case 'wishList/addItem':
            return [...state, action.payload]
        case 'wishList/removeItem':
            return [state.filter((wishListItem) => wishListItem.productID !== action.payload.productID)]

        default:
            return state
    }
}