const seSt = sessionStorage

/**
 * Guarda el usuario
 * @param {string} userId - Usuario actual en seesionStorage
 */
const setCurrentUser = (userId) => {
    seSt.setItem('currentUser', JSON.stringify(userId))
}

// Retorna el item de sessionStorage
const getCurrentUser = () => {
    const currentUser = JSON.parse(seSt.getItem('currentUser'))
    return currentUser
}

// Si existe algo en sessionStorage retorna true, sino false
const currentUserLoggedIn = () => {
    if (seSt.getItem('currentUser') === null) {
        return false
    }
    return true
}

export {
    setCurrentUser,
    getCurrentUser,
    currentUserLoggedIn
}