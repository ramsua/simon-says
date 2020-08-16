/* eslint-disable array-callback-return */
/**
 * Compara si los arrays parametrados son iguales, retorna true o false
 * @param {array} arrA - Array de referencia
 * @param {array} arrB - Array a comparar
 */
const compareResults = (arrA, arrB) => {
    let falses = 0;

    arrA.map((v, i) => {
        if (v !== arrB[i]) {
            falses += 1
        }
    })
    if (falses !== 0) {
        return false
    }
    return true
}
export default compareResults