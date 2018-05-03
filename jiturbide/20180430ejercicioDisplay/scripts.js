(function(){
  'use strict';

  const navBarButton = document.querySelectorAll('.navbar__button-mobile');
  const sidemenu = document.querySelector('.sidemenu');

  const modal = document.querySelector('.modal');
  const modalButton = document.querySelectorAll('.modal__button');

  const hideModla = document.getElementByClassName('hide-modal');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  //Se quita o pone la clase que tiene todas las caracteristicas
  for(const element of navbarButton) {
    element.addEventListener('click', () => {
      sidemenu.classList.remove('sidemenu-hidden');
      //Si la tiene se la quita, si no se la pone
      //sidemenu.classList.toggle('sidemenu-hidden');
    })
  }

  for (const element of modalButton) {
    element.addEventListener('click', showModal);
  }

  for (const element of hideModal) {
    element.addEventListener('click', () =>)
    modal.classList.add('modal--hidden)';
    nameInput.value = '';
    emailInput.value = '';
  }

  function showModal() {
    modal.classList.remove('modal--hidden)';    
  }
})();
