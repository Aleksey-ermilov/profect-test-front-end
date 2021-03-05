import fetchIntercept from 'fetch-intercept'
import { store } from "../store/redux";

export const request = async (url, method = 'GET', body = null, headers = {}) => {
    try{
        if (body){
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, {method,body,headers})
        const data = await response.json()

        if (!response.ok){
            throw new Error(data.message || 'что-то пошло не так...')
        }

        return data
    }   catch (e) {
        throw e
    }
}

const unregister = fetchIntercept.register({
    request: (url, config) => {
        const { user: {token} } = store.getState()
        if (token){
            config.headers['Authorization'] = 'Bearer ' + token
        }
        // console.log('token',token)
        // console.log('intercept',config)
        return [url, config]
    }
})