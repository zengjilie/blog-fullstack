import { createContext, useReducer } from 'react';
import reducer from './Reducer';

const defaultState = {
    user: null,
    isFetching: false,
    error: false,
}

const userContext = createContext(defaultState);

export default function UserContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, defaultState);
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