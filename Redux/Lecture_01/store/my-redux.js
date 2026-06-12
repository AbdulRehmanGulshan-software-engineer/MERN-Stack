export function myCreateStore(reducer) {
    //creating state
    let state
    // listeners for subscribe method
    const listeners = []

    const store = {
        // getState: function () { },
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action)
            listeners.forEach((listener)=>{
                listener()
            })
        },
        subscribe(listener) {
            listeners.push(listener)
        }
    }

    store.dispatch({ type: '@@INIT' })
    return store
}