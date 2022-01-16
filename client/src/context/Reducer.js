import { useReducer } from "react";
//won't use defaultState in here, just for demonstration 
const defaultState = {
    user: null,
    isFetching: false,
    error: false,
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };

        case 'LOGIN_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: true
            };

        case 'LOGIN_OUT':
            return{
                user:null,
                isFetching:false,
                error:false,
            }
        default:
            return {
                state
            }
    }

}
