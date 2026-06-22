import { createSelector, createSlice } from '@reduxjs/toolkit'

const findItemIndex = (list, action) =>
    list.findIndex(
        cartItem => cartItem.productID === action.payload.productID
    )

const slice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        list: [],
        error: '',
    },

    reducers: {
        cartAddItem(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)

            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity += 1
            } else {
                state.list.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
        },

        cartRemoveItem(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)

            if (existingItemIndex !== -1) {
                state.list.splice(existingItemIndex, 1)
            }
        },

        increaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)

            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity += 1
            }
        },

        decreaseCartItemQuantity(state, action) {
            const existingItemIndex = findItemIndex(state.list, action)

            if (existingItemIndex !== -1) {
                state.list[existingItemIndex].quantity -= 1

                if (state.list[existingItemIndex].quantity === 0) {
                    state.list.splice(existingItemIndex, 1)
                }
            }
        },

        fetchCartItems(state) {
            state.loading = true
        },

        fetchCartItemsError(state, action) {
            state.loading = false
            state.error = action.payload || 'Something Went Wrong!'
        },

        loadCartItems(state, action) {
            state.loading = false

            state.list = action.payload.products.map(item => ({
                productID: item.productId,
                quantity: item.quantity,
            }))
        },
    },
})

/* Selectors */

const selectProducts = state => state.products.list
const selectCartList = state => state.cartItems.list

export const getCartItems = createSelector(
    [selectProducts, selectCartList],
    (products, cartList) =>
        cartList
            .map(({ productID, quantity }) => {
                const product = products.find(
                    product => product.id === productID
                )

                return product
                    ? {
                          ...product,
                          quantity,
                      }
                    : null
            })
            .filter(Boolean)
)

export const getCartLoadingState = state =>
    state.cartItems.loading

export const getCartError = state =>
    state.cartItems.error

export const {
    cartAddItem,
    cartRemoveItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    loadCartItems,
    fetchCartItems,
    fetchCartItemsError,
} = slice.actions

export default slice.reducer