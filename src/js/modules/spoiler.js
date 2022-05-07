
const spoillerArray = document.querySelectorAll('[data-spollers]');
if (spoillerArray.length > 0) {
  const spollersRegular = Array.from(spoillerArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(',')[0];
  })
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  }
}

function initSpollers(spoillersArray, matchMedia = false) {
  spoillersArray.forEach(spollersBlock => {
    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
    if (matchMedia.matches || !matchMedia) {

      spollersBlock.classList.add('_init');
      initSpollerBody(spollersBlock);
      spollersBlock.addEventListener("click", setSpollerAction);
    } else {
      spollersBlock.classList.remove('_init');
      initSpollerBody(spollersBlock, false);
      spollersBlock.removeEventListener("click", setSpollerAction);
    }
  });
}

function initSpollerBody(spollersBlock, hideSpollerBody = true) {

  const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
  if (spollerTitles.length > 0) {
    
    spollerTitles.forEach(spollerTitle => {
      if (hideSpollerBody) {
        spollerTitle.removeAttribute('tabindex');
        if (!spollerTitle.classList.contains('_spoller-active')) {
          spollerTitle.nextElementSibling.hidden = true;
        } else {
          spollerTitle.setAtribete('tabindex', '-1');
          spollerTitle.nextElementSibling.hidden = false;
        }
      }
    })
  }
}

function setSpollerAction(e) {

  const el = e.target;
  if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {

    const spollerTitle = el.hasAttribute('data-spoiller') ? el : el.closest('[data-spoller]');
    const spollersBlock = spollerTitle.closest('[data-spollers]');
    const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
    if (!spollersBlock.querySelectorAll('._slide').length) {

      if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {

        hideSpollerBody(spollersBlock);
      }
      spollerTitle.classList.toggle('_spoller-active');

      _slideToggle(spollerTitle.nextElementSibling, 500);
    }
    e.preventDefault();
  }

}

function hideSpollerBody(spollersBlock) {

  const spollerActiveTitle = spollersBlock.querySelectorAll('[data-spoller]._spoller-active');
  if (spollerActiveTitle) {
    spollerActiveTitle.classList.remove('_spoller-active');
    _slideUp(spollerActiveTitle.nextElementSibling, 500);
  }
}

let _slideUp = (target, duration = 500) => {
  
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.tranzitionProperty = 'height, margin, padding';
    target.style.tranzitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.psddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflo');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
}

let _slideDown = (target, duration = 500) => {

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.psddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.tranzitionProperty = 'height, margin, padding';
    target.style.tranzitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');


    window.setTimeout(() => {
      target.hidden - true;
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-property');
      target.style.removeProperty('transition-duration');
      target.classList.remove('_slide');
    }, duration);
  }
}

let _slideToggle = (target, duration = 500) => {

  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
}