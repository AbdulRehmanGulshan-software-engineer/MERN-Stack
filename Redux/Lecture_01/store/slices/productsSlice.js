import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Used Async Thunk By RTK, followed convention
export const fetchProductsData = createAsyncThunk('products/fetchCartItems', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json()
    } catch (err) {
        throw err
    }
})
const slice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        list: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.pending, (state) => {
            state.loading = true;
        }).addCase(fetchProductsData.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
        }).addCase(fetchProductsData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || 'Something Went Wrong!'
        })
    },
})


export const getAllProducts = (state) => state.products.list
export const getLoadingState = (state) => state.products.loading
export const getProductError = (state) => state.products.error


export default slice.reducer