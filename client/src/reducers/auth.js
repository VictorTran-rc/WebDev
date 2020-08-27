import {
    REGISTER_SUCCESS,
    // REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    // LOGIN_FAIL,
    LOGOUT,
    ACCOUNT_DELETED
} from '../actions/types';

// Find token in local storage - this is the state used to see if all the request has gone through 
const initialState = { // Made this into a variable so you can use it throughout the file
    token: localStorage.getItem('token'),
    isAuthenticated: null, // 
    loading: true, // make sure the request has happened 
    user: null
}

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                    loading: false,
                    user: payload
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                    loading: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                    loading: false
            };
        case ACCOUNT_DELETED:
            return {
                ...state,
                token: null,
                    isAuthenticated: false,
                    loading: false,
                    user: null
            };
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                    isAuthenticated: false,
                    loading: false,
                    user: null
            };
        default:
            return state;
    }
}