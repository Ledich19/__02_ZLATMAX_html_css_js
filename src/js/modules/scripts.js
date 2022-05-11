
const menuBlocks= document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks) {
    menuBlocks.forEach(menuBlcok => {
        const menuBlockItems = menuBlcok.querySelectorAll('.sub-menu-catalog__category').length;
   menuBlcok.classList.add(`sub-menu-catalog__block_${menuBlockItems}`)
    })
}