(() => {
    var scrolltop = document.querySelector(".scrolltop");
    const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal]'),
    bodyScrollLock: document.querySelector('[data-modal-scroll-lock]')
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.bodyScrollLock.classList.toggle('modal-open');
    scrolltop.classList.toggle("showBtn");
  }
})();