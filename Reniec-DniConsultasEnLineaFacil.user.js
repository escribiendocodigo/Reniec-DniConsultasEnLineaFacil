// ==UserScript==
// @name        Reniec - DNI Consultas en linea fácil
// @namespace   https://github.com/escribiendocodigo/Reniec-DniConsultasEnLineaFacil
// @include     https://cel.reniec.gob.pe/valreg/valreg.do
// @version     0.x
// @grant       none
// ==/UserScript==


var contadorTecla = 0;


document.addEventListener('DOMContentLoaded', function (event) {

    var txtDni = document.querySelector('input[name=nuDni]'),
        txtCodigo = document.querySelector('input[name=imagen]');


    txtDni.setAttribute('autofocus', '');
    txtDni.setAttribute('required', '');
    txtDni.setAttribute('pattern', '[0-9]{8}');
    txtDni.removeAttribute('readonly');

    txtCodigo.setAttribute('required', '');
    txtCodigo.setAttribute('pattern', '[a-zA-Z0-9]{4}');


    unsafeWindow.Math.ceil = function (x) {

        return contadorTecla ++;
    };

});
