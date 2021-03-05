import { useState, useCallback, useEffect } from 'react'

import testStory from '../store/test'

const storageName = 'userData'

export const useAuth = () => {
    const [ token, setToken] = useState(null)
    const [ user, setUser ] = useState(null)
    const [ ready, setReady ] = useState(false)

    const login = useCallback((token, user) => {
        setToken(token)
        setUser(user)

        localStorage.setItem(storageName, JSON.stringify({
            user, token
        }))
    },[])

    const logout = useCallback(() => {
        setToken(null)
        setUser(null)
        testStory.clearMap()
        testStory.clearTest()
        localStorage.removeItem(storageName)
    },[])

    useEffect(()=>{
        /*const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token){
            login(data.token, data.user)
        }*/
        setReady(true)
    },[login])

    return { login, logout, token, user, ready }
}
