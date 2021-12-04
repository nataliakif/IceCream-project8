(() => {
    const refs = {
    openModalBtn: document.querySelector('[data-map-modal-open]'),
    closeModalBtn: document.querySelector('[data-map-modal-close]'),
    modal: document.querySelector('[data-map-modal]'),
    bodyScrollLock: document.querySelector('[data-modal-scroll-lock]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyScrollLock.classList.toggle('modal-open');
  }
})();