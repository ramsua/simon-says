import { disabledElem, replaceClass } from './global_functions'

const colors = Array.from(document.querySelectorAll('.simon-says__color'))
// const sequencePc = []
const sequencePc = ['blue', 'green', 'red', 'yellow']
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

    disabledElem('trigger')

    const color = sequencePc[currentPosition]
    currentPosition += 1

    replaceClass(color, `simon-says__color--${color}-off`, `simon-says__color--${color}-on`)

    const addColor = setTimeout(() => {

        if (currentPosition <= sequencePc.length) {
            replaceClass(color, `simon-says__color--${color}-on`, `simon-says__color--${color}-off`)

            const removeColor = setTimeout(() => {
                runSequencePc()

                if (currentPosition === sequencePc.length) {
                    clearTimeout(removeColor)
                }
            }, 150);

        } else {
            clearTimeout(addColor)
            disabledElem('trigger', false)
            currentPosition = 0
        }
    }, 1000);

}

const asyncFunction = async () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('solved function');
    }, 2000);
})

const callAsyncFunction = async () => {
    console.log('waiting...');
    const result = await asyncFunction();
    console.log(result);
}

export { callAsyncFunction, runSequencePc }
