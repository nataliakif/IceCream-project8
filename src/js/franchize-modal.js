(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-franchize-modal-open]'),
      closeModalBtn: document.querySelector('[data-franchize-modal-close]'),
      modal: document.querySelector('[data-franchize-modal]'),
      bodyScrollLock: document.querySelector('[data-modal-scroll-lock]')
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.bodyScrollLock.classList.toggle('modal-open');
    }    
  })();