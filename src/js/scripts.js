import '@babel/polyfill';
import {
    mainContent, userForm, toggleProfile, game
} from './config/vars';
import { setNewPlayer } from './exports/exports';
import { toggleClass } from './modules/global_functions';

const { callAsyncFunction, runSequencePc } = require('./modules/simon_says');

// Form
userForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('user-name');
    const name = username.value.trim()

    if (name !== '') {
        const player = {
            name,
            score: 0
        }
        setNewPlayer(player)
        mainContent.classList.add('is-user-active')
        toggleClass('toggle-profile', 'menu__item--active')
        userForm.reset()
    }
})

// Profile
toggleProfile.addEventListener('click', () => {
    toggleClass('toggle-profile', 'menu__item--active')
    toggleClass('main-content', 'is-user-active')
})

// Game
game.addEventListener('click', (e) => {
    if (e.target.id === 'trigger') {
        // setNewColor()
        runSequencePc()
    } else {
        switch (e.target.id) {
            case 'green':
                console.log('Green');
                break;
            case 'red':
                console.log('Red');
                break;
            case 'yellow':
                console.log('Yellow');
                break;
            case 'blue':
                console.log('Blue');
                break;
            default:
                break;
        }
    }
})

callAsyncFunction()
