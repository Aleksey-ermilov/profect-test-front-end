import {
    CLEAR_SELECTED_TEST,
    CLEAR_TESTS,
    FETCH_TESTS,
    FETCH_USER_STORY,
    LOGIN,
    LOGOUT,
    RERUN,
    SELECTED_TEST
} from '../types'
import {request} from "../../../helpers/http";
import {sortUserStoryByDate} from "../../../helpers/sort";
import {hideLoader, showError, showLoader} from "../app/actionApp";
import {localStorageRemove, localStorageSetUser} from "../../localStorage";
import {baseUrl} from "../../../config";

export function login (body) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const json = await request(`${baseUrl}/user/singIn`, 'Post', body)
            dispatch({ type: LOGIN, payload: {user: json.user, token: json.token}})
            localStorageSetUser(json)
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showError(e.message))
            dispatch(hideLoader())
        }
    }
}

export function logout () {
    return async dispatch => {
        try {
            dispatch(showLoader())
            await request(`${baseUrl}/user/logout` )
            dispatch({ type: LOGOUT })
            localStorageRemove()
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showError(e.message))
            dispatch(hideLoader())
        }
    }
}

export function rerun (token, user) {
    return {
        type: RERUN,
        payload: { token, user }
    }
}

export function fetchUserStory () {
    return async (dispatch, getState) => {
        try{
            const { user:{user: {_id}} } = getState()
            dispatch(showLoader())
            const data = await request(`${baseUrl}/student-story/findByIdUser`)
            dispatch({ type: FETCH_USER_STORY, payload: sortUserStoryByDate(data) })
            dispatch(hideLoader())
        } catch (e){
            dispatch(showError(e.message))
            dispatch(hideLoader())
        }
    }
}



