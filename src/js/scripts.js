import {
    mainContent, userForm, toggleProfile, game
} from './config/vars';
import { toggleClass } from './modules/global_functions';
import * as component from './exports/exports';
import func from './modules/simon_says';

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
        component.setNewPlayer(player)
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
        func().then((res) => {
            console.log(res);
        })
    }
})