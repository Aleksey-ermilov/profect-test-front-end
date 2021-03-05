import {
    CLEAR_LIST_ANSWERS,
    CLEAR_SELECTED_TEST,
    CLEAR_TESTS,
    CREATE_TEST,
    FETCH_POST,
    FETCH_TESTS,
    SELECTED_TEST,
    SET_LIST_ANSWERS,
} from "../types";

const initialState = {
    tests: [],
    currentTest: null,
    listAnswers: [],
    posts: []
}

export const testReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_TEST:
            // return { ...state, tests: [ ...state.tests, action.payload ] }
            return { ...state, tests: state.tests.concat(action.payload) }
        case FETCH_POST: return { ...state, posts: action.payload }
        case FETCH_TESTS: return { ...state, tests: action.payload }
        case SELECTED_TEST: return { ...state, currentTest: action.payload }
        case SET_LIST_ANSWERS: return { ...state, listAnswers: action.payload }
        case CLEAR_TESTS: {
            console.log('reducer')
            return {...state, tests: []}
        }
        case CLEAR_SELECTED_TEST: return { ...state, currentTest: null }
        case CLEAR_LIST_ANSWERS: return { ...state, listAnswers: [] }
        default: return state
    }
}