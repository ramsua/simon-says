import { mainContent, toggleAside, asideContent, userForm } from "./config/vars";
import { toggleClass } from "./modules/global_functions";

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    mainContent.classList.add('is-user-active')
})

toggleAside.addEventListener('click', (e) => {

    toggleClass('aside', 'aside--active')

})

asideContent.addEventListener('click', (e) => {

    if (e.target.dataset.removecomponent === 'remove-component') {

        asideContent.removeChild(e.target.parentElement.parentElement)
    }
})