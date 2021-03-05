import {LOGIN, LOGOUT, RERUN} from "../types";

const initialState = {
    user: null,
    token: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN: return {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
        case LOGOUT: return { ...state, user: null, token: null }
        case RERUN: return {
        ...state,
            user: action.payload.user,
            token: action.payload.token
    }
        default: return state
    }
}