/* eslint-disable no-console */
// Vars
import {
    mainContent, toggleAside, asideContent, userForm
} from './config/vars';

// Global functions
import {
    toggleClass
} from './modules/global_functions';

userForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('user-name');
    const user = username.value.trim()

    if (user !== '') {
        mainContent.classList.add('is-user-active')
    } else {
        console.log('Agrega un usuario');
    }
})

toggleAside.addEventListener('click', () => {
    toggleClass('aside', 'aside--active')
})

asideContent.addEventListener('click', (e) => {
    if (e.target.dataset.removecomponent === 'remove-component') {
        asideContent.removeChild(e.target.parentElement.parentElement)
    }
})