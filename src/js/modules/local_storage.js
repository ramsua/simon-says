const loSt = localStorage

/**
 * Si el usuario existe retorna true, false caso contrario
 * @param {string} username - Usuario que se quiere saber si ya existe en localStorage
 */
const ifUserExists = (username) => {

    if (loSt.getItem('players') !== null) {

        const players = JSON.parse(loSt.getItem('players'))

        let exists = 0

        players.forEach((player) => {
            if (player.user === username) {
                exists = 1
            }
        })

        if (exists === 1) {
            return true
        }
        return false
    }
    return false
}

/**
 * Guarda el usuario si no existe o lo retorna si existe
 * @param {string} newPlayer - Usuario a guardar en localStorage
 */
const setNewPlayer = (newPlayer) => {

    if (loSt.getItem('players') === null) {

        const players = []

        players.push(newPlayer)

        loSt.setItem('players', JSON.stringify(players))

    } else {

        const players = JSON.parse(loSt.getItem('players'))

        const exists = ifUserExists(newPlayer.user)

        if (exists) {
            // Existe el usuario
            console.log(exists);
        } else {
            // No existe el usuario
            players.push(newPlayer)
            console.log(exists);
        }

        loSt.setItem('players', JSON.stringify(players))
    }
}

export default setNewPlayer
