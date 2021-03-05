import {CLEAR_SELECTED_TEST, CLEAR_TESTS, LOGIN, LOGOUT, RERUN} from '../types'
import {request} from "../../../helpers/http";
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
            await request(`${baseUrl}/user/logout`, 'Post' )
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



