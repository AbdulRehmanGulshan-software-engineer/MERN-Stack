import { createContext, useState, useContext, useEffect } from "react";

// Making Own Context-API
const StoreContext = createContext();

export function Provider({ children, store }) {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        {
            store.subscribe(() => {
                console.log(store.getState())
                setState(store.getState())
            })
        }
    }, [])

    return (
        <StoreContext.Provider
            value={{
                state,
                dispatch: store.dispatch
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export const useDispatch = () => {
    const store = useContext(StoreContext);
    return store.dispatch;
};

export const useSelector = (selector) => {
    const store = useContext(StoreContext);
    return selector(store.state);
};