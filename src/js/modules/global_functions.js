/**
 * Alterna la clase que se pase como parámetro al elemento
 * @param {string} target id
 * @param {string} toggleClass class
 */
const toggleClass = (target, toggleClass) => {
    const t = document.getElementById(target);
    if (!t) return
    t.classList.toggle(toggleClass)
}

/**
 * Alterna una clase de css por otra
 *
 * @param {string} element - ID del elemento que se quiere reemplazar una clase
 * @param {string} oldClass - Clase a reemplazar
 * @param {string} newClass - Clase nueva
 */
const replaceClass = (element, oldClass, newClass) => {
    const elem = document.getElementById(element)
    if (elem && elem.classList.contains(oldClass)) {
        elem.classList.replace(oldClass, newClass)
    }
}

/**
 * Remueve los hijos de un elemento dado
 *
 * @param {string} removeTo - ID tal cual se escribió en el html
 */
const removeChilds = (removeTo) => {
    const elem = document.getElementById(removeTo);
    if (!elem) return
    elem.textContent = ''
}

/**
 *
 * @param {string} elemId - Elemento que se le añadirá el texto
 * @param {string} text - Cadena de texto
 */
const writeText = (elemId, text) => {
    const elem = document.getElementById(elemId);
    if (!elem) return
    elem.textContent = text
}

export {
    toggleClass,
    replaceClass,
    removeChilds,
    writeText
}