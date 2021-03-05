import {
    CLEAR_LIST_ANSWERS,
    CLEAR_SELECTED_TEST,
    CLEAR_TESTS,
    CREATE_TEST,
    FETCH_POST,
    FETCH_TESTS,
    SELECTED_TEST,
    SET_LIST_ANSWERS,
    SEND_LIST_ANSWERS,
} from '../types'
import {hideLoader, showError, showLoader} from "../app/actionApp";

import {request} from "../../../helpers/http";
import { disassemblyTest } from "../../../helpers/disassembly";

import { baseUrl } from "../../../config";

export function createTest (test) {
    return {
        type: CREATE_TEST,
        payload: test
    }
}

export function fetchedPost () {
    return async dispatch => {
        try{
            dispatch(showLoader())
            const json = await request('https://jsonplaceholder.typicode.com/posts')
            dispatch({ type: FETCH_POST, payload: json})
            dispatch(hideLoader())
        } catch (e){
            dispatch(showError(e.message))
            dispatch(hideLoader())
        }
    }
}

export function fetchedTests () {
    return async (dispatch, getState) => {
        try{
            const { user } = getState()
            dispatch(showLoader())
            const data = await request(`${baseUrl}/test/testStudent/${user.user._id}`)
            const tests = data.map( test => disassemblyTest(test) )
            dispatch({ type: SELECTED_TEST, payload: tests[0] })
            dispatch({ type: FETCH_TESTS, payload: tests })
            dispatch(hideLoader())
        } catch (e){
            dispatch(showError(e.message))
            dispatch(hideLoader())
        }
    }
}

export function selectedTest (selected) {
    return {
        type: SELECTED_TEST,
        payload: selected
    }
}

export function setListAnswers (listAnswers){
    return {
        type: SET_LIST_ANSWERS,
        payload: listAnswers
    }
}

export function clearTests () {
    return {
        type: CLEAR_TESTS,
        payload: null
    }
}
export function clearCurrentTest () {
    return {
        type: CLEAR_SELECTED_TEST
    }
}
export function clearListAnswers () {
    return {
        type: CLEAR_LIST_ANSWERS
    }
}


