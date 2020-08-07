/**
 * Alterna la clase que se pase como parámetro al elemento
 * @param {string} target id
 * @param {string} toggleClass class
 */
const toggleClass = (target, toggleClass) => {

    const t = document.getElementById(target);

    if (t.classList.contains(toggleClass)) {

        t.classList.remove(toggleClass)

    } else {

        t.classList.add(toggleClass)
    }
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
const removeChild = (removeTo) => {

    const elem = document.getElementById(removeTo);

    if (elem) {
        elem.textContent = ''
    }
}
export {
    toggleClass,
    replaceClass,
    removeChild
}