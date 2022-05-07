document.addEventListener('click',documentActions);
const log = console.log;

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest("[data-parent]") ) {
        e.preventDefault();
        const subMenu = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        if (subMenu) {
            subMenu.classlist.add('_sub-menu-open')
        } else {
            console.log("чтото пошло не так")
        }

    }
}