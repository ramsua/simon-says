import { toggleAside, asideContent } from "./config/vars";
import { toggleClass } from "./modules/global_functions";

toggleAside.addEventListener('click', (e) => {

    toggleClass('aside', 'aside--active')

    console.log(e.target.parentElement.parentElement);

    if (e.target.dataset.removecomponent === 'remove-component') {

        asideContent.removeChild(e.target.parentElement.parentElement)
    }
})

asideContent.addEventListener('click', (e) => {

    if (e.target.dataset.removecomponent === 'remove-component') {

        asideContent.removeChild(e.target.parentElement.parentElement)
    }
})