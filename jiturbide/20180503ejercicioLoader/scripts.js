(function(){
  'use strict';

  const element = document.getElementById('boton');

  element.addEventListener('click', () => {
    var elem = document.getElementById("mibarra");
    var width = 0;
    var id = setInterval(progress, 10);

    function progress() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width   + '%';
      }
    }
  });
})();
