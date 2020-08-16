// Vars
import {
    toggleAside, asideContent, userForm
} from './config/vars';

// Global functions
import {
    toggleClass
} from './modules/global_functions';

// Local Storage
import setNewPlayer from './modules/local_storage';

userForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('user-name');
    const user = username.value.trim()

    if (user !== '') {
        const player = {
            user,
            score: {}
        }
        setNewPlayer(player);
        // mainContent.classList.add('is-user-active')
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