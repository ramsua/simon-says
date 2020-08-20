import * as component from './exports/exports';

component.userForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById('user-name');
    const user = username.value.trim()

    if (user !== '') {
        const player = {
            user,
            score: {}
        }
        component.setNewPlayer(player);
        component.mainContent.classList.add('is-user-active')
        component.toggleClass('toggle-profile', 'menu__item--active')
        component.userForm.reset()
    }
})

component.toggleProfile.addEventListener('click', () => {
    component.toggleClass('toggle-profile', 'menu__item--active')
    component.toggleClass('main-content', 'is-user-active')
})