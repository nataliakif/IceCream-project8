(() => {
    const refs = {
    openModalBtn: document.querySelector('[data-map-modal-open]'),
    closeModalBtn: document.querySelector('[data-map-modal-close]'),
    modal: document.querySelector('[data-map-modal]'),
    bodyScrollLock: document.querySelector('[data-modal-scroll-lock]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function aload(t){"use strict";var e="data-aload";return t=t||window.document.querySelectorAll("["+e+"]"),void 0===t.length&&(t=[t]),[].forEach.call(t,function(t){t["LINK"!==t.tagName?"src":"href"]=t.getAttribute(e),t.removeAttribute(e)}),t}

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyScrollLock.classList.toggle('modal-open');
    aload();
  }
})();