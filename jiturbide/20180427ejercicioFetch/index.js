(function() {

  'use strict';
	console.log('Inicio del script');

    const API_URL = 'datos.json';

    const control = document.querySelector('#article0');

     fetch('datos.json')
       .then(response => response.json())
       .then(response => printResponse(response))
       .catch(err => console.log('Fallo la peticion ' + err));

	function printResponse(response) {
		 	let theHtml = '';
		 	let theRow = '';

            theHtml = "<table style='width:100%' padd><tr> <th>Concepto</th> <th>Valor</th> </tr>";

            for(let key in response.data) {
                //console.log(response.datos[key]['name']);

                theRow = '<tr><td>' + response.data[key]['id'] + '</td><td>' + response.data[key]['name'] + '</td></tr>';
                theHtml = theHtml + theRow;
            }

            theHtml = theHtml + '</table>';

		 	control.innerHTML = theHtml;
	}


})();
