// import { produce } from "immer"
import { createSlice } from '@reduxjs/toolkit'

// // Action Types
// const CART_ADD_ITEM = 'cart/addItem'
// const CART_REMOVE_ITEM = 'cart/removeItem'
// const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
// const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

// //Action Creators
// export function decreaseCartItemQuantity(productID) {
//     return {
//         type: CART_ITEM_DECREASE_QUANTITY,
//         payload: { productID },
//     }
// }
// export function increaseCartItemQuantity(productID) {
//     return {
//         type: CART_ITEM_INCREASE_QUANTITY,
//         payload: { productID },
//     }
// }
// export function cartRemoveItem(productID) {
//     return {
//         type: CART_REMOVE_ITEM,
//         payload: { productID }
//     }
// }
// export function cartAddItem(productData) {
//     return {
//         type: CART_ADD_ITEM,
//         payload: productData
//     }
// }

// //Reducer
// export default function cartReducer(orignalState = [], action = { type: '' }) {
//     return produce(orignalState, (state) => {

//         // finding existing
//         const existingItemIndex = state.findIndex(
//             (cartItem) => cartItem.productID === action.payload.productID
//         )

//         switch (action.type) {
//             case CART_ADD_ITEM:
//                 if (existingItemIndex !== -1) {
//                     state[existingItemIndex].quantity += 1;
//                     break
//                 }
//                 state.push({ ...action.payload, quantity: 1 })
//                 break

//             case CART_REMOVE_ITEM:
//                 state.splice(existingItemIndex, 1);
//                 break

//             case CART_ITEM_INCREASE_QUANTITY:
//                 state[existingItemIndex].quantity += 1;
//                 break

//             case CART_ITEM_DECREASE_QUANTITY:
//                 state[existingItemIndex].quantity -= 1;
//                 if (state[existingItemIndex].quantity === 0) {
//                     state.splice(existingItemIndex, 1)
//                 }
//         }
//         return state
//     })
// }



const findItemIndex = (state, action) =>
 state.findIndex(
        cartItem => cartItem.productID === action.payload.productID
    )
   

//CreateSlice Function
const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        cartAddItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            if (existingItemIndex !== -1) {
                state[existingItemIndex].quantity += 1;

            } else {
                state.push({ ...action.payload, quantity: 1 })
            }
        },
        cartRemoveItem(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1);
        },
        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity += 1;
        },
        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity -= 1;
            if (state[existingItemIndex].quantity === 0) {
                state.splice(existingItemIndex, 1)
            }
            // console.log(action.payload)
        },

    }
})


export const {
    cartAddItem,
    cartRemoveItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity
} = slice.actions

export default slice.reducer