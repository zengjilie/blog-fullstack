import { useEffect, createContext, useReducer } from 'react';
import reducer from './Reducer';
const defaultState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
}

export const userContext = createContext(defaultState);

export default function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultState);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);
    return (
        <userContext.Provider
            value={
                {
                    user: state.user,
                    isFetching: state.isFetching,
                    error: state.error,
                    dispatch: dispatch
                }
            }>
            {children}
        </userContext.Provider >
    )
}