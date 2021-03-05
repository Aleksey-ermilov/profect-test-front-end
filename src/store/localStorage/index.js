const storageName = 'userData'

export const localStorageSetUser = ({user, token}) => {
    localStorage.setItem(storageName, JSON.stringify({
        user, token
    }))
}

export const localStorageRemove = () => {
    localStorage.removeItem(storageName)
}

export const localStorageGetUser = () => {
    return JSON.parse(localStorage.getItem(storageName))
}