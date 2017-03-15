// ==UserScript==
// @name        Reniec - DNI Consultas en linea fácil
// @namespace   https://github.com/escribiendocodigo/Reniec-DniConsultasEnLineaFacil
// @include     https://cel.reniec.gob.pe/valreg/valreg.do*
// @version     0.x
// @grant       none
// ==/UserScript==



var contadorTecla = 0;



unsafeWindow.Math.ceil = function (x) {

    return contadorTecla ++;
};



document.addEventListener('DOMContentLoaded', function (event) {

    var frmConsulta = document.forms[0],
        txtAccion = frmConsulta.accion,
        txtDni = frmConsulta.nuDni,
        txtCodigo = frmConsulta.imagen;


    txtDni.setAttribute('autofocus', '');
    txtDni.setAttribute('required', '');
    txtDni.setAttribute('pattern', '[0-9]{8}');
    txtDni.removeAttribute('readonly');

    txtCodigo.setAttribute('required', '');
    txtCodigo.setAttribute('pattern', '[a-zA-Z0-9]{4}');
    txtCodigo.removeAttribute('onkeypress');
    txtCodigo.addEventListener('keypress', txtCodigo_keypress);
    txtCodigo.addEventListener('keyup', txtCodigo_keyup);


    document.oncontextmenu = null;
    document.onselectstart = null;
    document.ondragstart = null;
});



function txtCodigo_keypress(event) {

    if (event.keyCode == 13) {

        txtAccion.value = 'buscar';

        frmConsulta.removeAttribute('onsubmit');
        frmConsulta.submit();
    }
}


function txtCodigo_keyup(event) {

    this.value = this.value.toUpperCase();
}