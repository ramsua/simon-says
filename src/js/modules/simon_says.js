import { replaceClass } from './global_functions'

const colors = Array.from(document.querySelectorAll('.simon-says__color'))
// const sequencePc = []
const sequencePc = ['blue', 'green', 'blue', 'red', 'blue', 'red', 'yellow', 'blue', 'yellow']
let currentPosition = 0

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
        }

        sequencePc.push(color)
    }
}

const runSequencePc = () => {

    const color = sequencePc[currentPosition]
    currentPosition += 1

    replaceClass(color, `simon-says__color--${color}-off`, `simon-says__color--${color}-on`)

    if (currentPosition <= sequencePc.length) {
        setTimeout(() => {
            replaceClass(color, `simon-says__color--${color}-on`, `simon-says__color--${color}-off`)
            setTimeout(() => {
                runSequencePc()
            }, 250);
        }, 1000);
    }

}
export { runSequencePc, setNewColor }