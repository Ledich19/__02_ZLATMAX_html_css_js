document.addEventListener('click', documentActions);
const log = console.log;

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest("[data-parent]")) {
        e.preventDefault();
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelector('.catalog-header');
        if (subMenu) {
            const activeLink = document.querySelector('._sub-menu-active')
            const activeBlock = document.querySelector('._sub-menu-open')
            const activeCatalog = document.querySelector('._sub-menu-catalog')

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active')
                activeBlock.classList.remove('_sub-menu-open')
                document.documentElement.classList.remove('sub-menu-open')

            }

            document.documentElement.classList.toggle('sub-menu-open')
            targetElement.classList.toggle('_sub-menu-active')
            subMenu.classList.toggle('_sub-menu-open')
        } else {
            console.log("чтото пошло не так")
        }

    }

    if (targetElement.closest(".menu-top-header__link_catalog")) {
        e.preventDefault();
        document.documentElement.classList.add('catalog-open')
    }
    if (targetElement.closest(".menu-catalog__back")) {
        e.preventDefault();
        document.documentElement.classList.remove('catalog-open')

        const activeLink = document.querySelector('._sub-menu-active')
        const activeBlock = document.querySelector('._sub-menu-open')


        activeLink ?
        activeLink.classList.remove('_sub-menu-active') 
        : null
        
        activeBlock ?
        activeBlock.classList.remove('_sub-menu-open') 
        : null
     
    }
    if (targetElement.closest(".sub-menu-catalog__back")) {
        e.preventDefault();
        const activeLink = document.querySelector('._sub-menu-active')
        const activeBlock = document.querySelector('._sub-menu-open')
        document.documentElement.classList.remove('sub-menu-open')


      activeLink ?
      activeLink.classList.remove('_sub-menu-active') 
      : null
      
      activeBlock ?
      activeBlock.classList.remove('_sub-menu-open') 
      : null
     
    }

    
}