(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-franchize-modal-open]'),
      closeModalBtn: document.querySelector('[data-franchize-modal-close]'),
      modal: document.querySelector('[data-franchize-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }    
  })();