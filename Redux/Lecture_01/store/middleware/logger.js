export const logger = (store) => (next) => (action) => {
    console.log('store: ', store)
    console.log('next: ', next)
    console.log('action: ', action)
    next(action)
}
export const auth = store => next => action => {
    console.log("Checking auth")
    next(action)
}

export const analytics = store => next => action => {
    console.log("Saving analytics")
    next(action)
}