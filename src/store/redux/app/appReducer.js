import {HIDE_LOADER, SHOW_ERROR, SHOW_LOADER, HIDE_ERROR} from '../types'

const initialState = {
    loading: false,
    error: null,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case HIDE_LOADER:
            return { ...state, loading: false }
        case SHOW_LOADER:
            return { ...state, loading: true }
        case SHOW_ERROR: return { ...state, error: action.payload }
        case HIDE_ERROR: return { ...state, error: null }
        default: return state
    }
}