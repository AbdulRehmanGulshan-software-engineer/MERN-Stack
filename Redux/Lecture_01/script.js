import { createStore } from "redux"
// import { combineReducers } from "redux"
import cartReducer, { CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, CART_REMOVE_ITEM } from "./cartReducer"
import wishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./wishListReducer"
import productReducer from "./productsReducer"
// import { productsList } fromed/productsList"


//custom combinedReducer
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers)

    return function (state = {}, action) {
        const nextstate = {}

        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];

            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action)
            // // instead use this
            // nextstate[key] = reducer(state[key], action);

            nextstate[key] = nextStateForKey;
        }
        return nextstate

    }
}


//Combined All Reducers
const reducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
})


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

console.log(store.getState())