// Variables globales

// Array de los elementos HTML donde se va a iterar
// Puede ser una lista o varias, se creará un array para cada una
const arrayOfHTMLElement = Array.from(document.querySelectorAll('.list'));

// Elemento donde se van a imprimir items del FRAGMENTO en memoria creado en una función más abajo
const finalValuesOnScreen = document.getElementById('finalValues');

// Formulario
const howOftenForm = document.getElementById('howOftenForm');

// Elemento HTML donde se imprime la cantidad de vueltas que se eligió en el formulario
const counter = document.getElementById('counter')

const arrayOfChildElements = () => {

    // Si el ARRAY en que se ejecuta el bucle,
    // tiene más elementos hijos...
    arrayOfHTMLElement.forEach((HTMLElem) => {
        // Crea un array con sus elementos por cada hijo del ARRAY padre
        const childrens = Array.from(HTMLElem.children);

        // Un array vacío al cual se le asignará como
        // valores el texto de los elementos del ARRAY anterior
        const contentElems = [];

        // Bucle que asigna los valores al ARRAY vacío
        childrens.forEach((contentElem) => {
            contentElems.push(contentElem.textContent)
        });
        // Se asigna el array con los elementos pertinentes
        getRandomValue(contentElems);
    });
    // Se remueven del DOM los elementos que ya existan
    removeElementsHTMLChilds();
}

const removeElementsHTMLChilds = () => {

    // Si ya existen elementos y son más de 4, los borra del DOM
    if (finalValuesOnScreen.children.length >= 5) {
        finalValuesOnScreen.textContent = ''
    }
}

// Recibe dos parámetros
// Uno es el numero que devuelve la función => getRandomValue
// Y el segundo es un array del cual se obtiene el contenido a mostrar en pantalla
const createElemsHTML = (number, array) => {
    // Crea en memoria un fragmento de código donde se inluirán los items
    const fragment = document.createDocumentFragment();

    // Se crea un item por cada vuelta de bucle
    // Y se le asigna una clase para tratarlo por CSS
    const itemFragment = document.createElement('LI');
    itemFragment.classList.add('values-li');

    // Se inserta el item creado como último hijo del FRAGMENTO en memoria
    fragment.appendChild(itemFragment);

    // Contenido que va a mostrar ese item
    itemFragment.textContent = array[number];

    // Y por último se inserta en el DOM el fragmento terminado
    finalValuesOnScreen.appendChild(fragment);
}

// Toma un valor aleatorio de los ARRAYS
// Se le indica un ARRAY como parámetro
const getRandomValue = (isArray) => {

    // Pregunta si es un ARRAY
    if (Object.prototype.toString.call(isArray) === '[object Array]') {

        // Crea un numero random a partir de la longitud del o los ARRAYS
        const randomNumber = Math.floor(Math.random() * isArray.length);

        createElemsHTML(randomNumber, isArray);
    } else {
        // Si no es un array manda un mensaje a consola
        console.log(`El valor procesado es un => ${Object.prototype.toString.call(isArray)}`)
    }
}

// El parámetro toma el valor del input como límite para limpiar el setInterval
const counterIntervals = (intervals) => {

    // Desactiva el boton de submit para evitar que el
    // setInterval se ejecute más de una vez sin antes terminar
    howOftenForm.howOftenGenerate.disabled = true;

    // variable de comparación con el parámetro
    // Por defecto en cero
    let count = 0;

    const timerUpdate = setInterval(() => {

        // Le suma uno al valor que ya tenía
        count += 1;

        arrayOfChildElements();

        // Pregunta si la varable de comparación es igual o mayor que el parámetro ingresado
        if (count >= intervals) {

            // Limpia el setInterval
            clearInterval(timerUpdate);

            // Vuelve a habilitar el boton de submit
            howOftenForm.howOftenGenerate.disabled = false;
        }
        // Muestra el número de veces que se ejecuta la función
        counter.textContent = count;

        // Cada 1 segundo
    }, 2000);
    howOftenForm.howOftenStop.addEventListener('click', (e) => {
        e.preventDefault()
        clearInterval(timerUpdate);
        howOftenForm.howOftenGenerate.disabled = false;
    });
}

howOftenForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Que sea numero
    if (!isNaN(howOftenForm.howOftenValue.value)

        // Que no tenga decimales
        && howOftenForm.howOftenValue.value % 1 === 0

        // Que no sea un string vacío
        && howOftenForm.howOftenValue.value.trim() !== ''

        // Que no tenga espacios
        && howOftenForm.howOftenValue.value.indexOf(' ') === -1

        // Que sea menor a 500
        && howOftenForm.howOftenValue.value <= 500) {

        counterIntervals(howOftenForm.howOftenValue.value);
    }
})

window.addEventListener('DOMContentLoaded', () => {
    arrayOfChildElements()
})