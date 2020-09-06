const colors = Array.from(document.querySelectorAll('.simon-says__color'))
const sequencePc = ['rojo', 'verde', 'gris']

/**
 * Toma un valor al azar del array "colors" y lo asigna al array "sequencePc"
 */
const setNewColor = () => {
    let randomNumber = Math.floor(Math.random() * colors.length)
    let color = colors[randomNumber].id

    if (sequencePc.length === 0) {
        sequencePc.push(color)

    } else {
        const lastColor = sequencePc[sequencePc.length - 1]

        if (color === lastColor) {
            randomNumber = Math.floor(Math.random() * sequencePc.length)
            color = colors[randomNumber].id

            sequencePc.push(color)

        } else {
            sequencePc.push(color)
        }
    }
}

/**
 * Toma la longitud del array de la secuencia de la PC y lo recorre
 */
const getNextColor = async () => {
    const turns = sequencePc.length
    let currentTurn = 0
    if (currentTurn <= turns) {
        currentTurn += 1
        setTimeout(() => currentTurn, 1500);
    }
    return null
}
const func = () => getNextColor()
export default func