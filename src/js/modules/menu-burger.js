const iconMenu = document.querySelector('.menu__icon')
const bodyMenu = document.querySelector('.menu__body')


if (iconMenu) {
    iconMenu.addEventListener('click', () => {
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_menu-open');
        if (document.documentElement.classList.contains('catalog-open')) {
            document.documentElement.classList.remove('catalog-open');
            document.documentElement.classList.remove('sub-menu-open');

            const activeLink = document.querySelector('._sub-menu-active')
            const activeBlock = document.querySelector('._sub-menu-open')
    
    
          activeLink ?
          activeLink.classList.remove('_sub-menu-active') 
          : null
          
          activeBlock ?
          activeBlock.classList.remove('_sub-menu-open') 
          : null
        }

    })

}