// let state = {
//     count: 0,
//     counterName: 'Timer',
//     age: 21
// }

// function increment() {
//     // Mutating State 👇
//     // state.count = state.count + 1

//     const prevState = state;
//     console.log(prevState)
//     // Without Mutating 👇
//     state = {...state, count: state.count + 1 }
//     console.log(`New State Is : ${state}`)
//     console.log(prevState==state)
// }

// increment()



import { createStore } from "redux"
import { myCreateStore } from "./my-redux"


const initialState = {
    post: 20,
    name: 'Abdul Rehman Gulshan',
    age: 26
}

const INCREMENT = 'post/increment'
const DECREMENT = 'post/decrement'
const INCREASE_BY = 'post/incrementBy'
const DECREASE_BY = 'post/decrementBy'

// redux restrict us to make reducer function
function reducer(state = initialState, action) {
    // if (action.type === INCREASE_BY) {
    //     return { ...state, post: state.post + action.payload }
    // }
    // else if (action.type === INCREMENT) {
    //     return { ...state, post: state.post + 1 }
    // }
    // else if (action.type === DECREMENT) {
    //     return { ...state, post: state.post - 1 }
    // }
    // else if (action.type === DECREASE_BY) {
    //     return { ...state, post: state.post - action.payload }
    // }

    // Using Switch Statement 👇
    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + 1 }
        case DECREMENT:
            return { ...state, post: state.post - 1 }
        case INCREASE_BY:
            return { ...state, post: state.post + action.payload }
        case DECREASE_BY:
            return { ...state, post: state.post - action.payload }
        default:
            return state
    }


    // state = { ...state, post: state.post + 1 }   ⚠️
    // redux says you don't need to touch state.i will update it.redux will give state to reducer function 
    //we just have to return state 👇

    return state;
}

//what redux will do
// reduxState = reducer(reduxState, { type: 'post/increment' })
// console.log(reduxState)
// reduxState = reducer(reduxState, { type: 'post/increment' })
// console.log(reduxState)
// reduxState = reducer(reduxState, { type: 'post/decrement' })
// console.log(reduxState)
// reduxState = reducer(reduxState, { type: 'post/incrementBy', payload: 2 })
// console.log(reduxState)


//Added Store Enhancer  __REDUX_DEVTOOLS_EXTENSION__
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
const myStore = myCreateStore(reducer)

console.log(myStore)

const postCountElement = document.querySelector('.post-count')

console.log(store)

myStore.subscribe(() => {
    console.log(myStore.getState())
    postCountElement.innerText = myStore.getState().post
})

postCountElement.innerText = myStore.getState().post

// store.dispatch({ type: INCREMENT })
// store.dispatch({ type: INCREMENT })
// store.dispatch({ type: INCREASE_BY, payload: 20 })

myStore.dispatch({ type: INCREMENT })
myStore.dispatch({ type: INCREMENT })
myStore.dispatch({ type: INCREASE_BY, payload: 20 })

setTimeout(() => {
    store.dispatch({ type: DECREMENT })
}, 2000)

postCountElement.addEventListener('click', () => {
    store.dispatch({ type: INCREMENT })
})