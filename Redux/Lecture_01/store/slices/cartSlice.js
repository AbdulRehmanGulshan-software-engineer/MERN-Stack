import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

const findItemIndex = (list, action) =>
  list.findIndex(
    cartItem => cartItem.productId === action.payload.productId
  )

// Used Async Thunk By RTK, followed convention
export const fetchCartItemsData = createAsyncThunk('cart/fetchCartItems', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts/5')
        return response.json()
    } catch (err) {
        throw err
    }
})


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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItemsData.pending, (state) => {
            state.loading = true;
        }).addCase(fetchCartItemsData.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload.products
        }).addCase(fetchCartItemsData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || 'Something Went Wrong!'
        })
    },
})

/* Selectors */

const selectProducts = state => state.products.list
const selectCartList = state => state.cartItems.list

export const getCartItems = createSelector(
    [selectProducts, selectCartList],
    (products, cartList) =>
        cartList
            .map(({ productId, quantity }) => {
                const product = products.find(
                    product => product.id === productId
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

// //Thunk action Creator
// export const fetchCartItemsData = () => (dispatch) => {
//     dispatch(fetchCartItems())
//     fetch(`https://fakestoreapi.com/carts/5`)
//         .then((res) => res.json())
//         .then((data) => {
//             dispatch(loadCartItems(data))
//         })
//         .catch(() => {
//             dispatch(fetchCartItemsError())
//         })
// }

export const {
    cartAddItem,
    cartRemoveItem,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
} = slice.actions

export default slice.reducer