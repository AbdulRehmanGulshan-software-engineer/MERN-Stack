//Action Types
export const WISHLIST_ADD_ITEM = 'wishList/addItem'
export const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

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