/*

Víctor Manuel Andreu Felipe

*/



var puntuaciones = [6, 4, 7, 9, 5, 3, 2, 9, 1, 8, 10];

function estrellas() {
    var contenido = '<div>';
    for (var i = 0; i <= puntuaciones.length - 1; i++) {
        contenido += '<div class="fila">';
        for (var j = 1; j <= puntuaciones[i]; j++) { 
            contenido += '<div class="estrella">&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;</div>';
        }
        contenido += '</div>';
    }
    contenido += '</div></div>';

    document.getElementById("contenido").innerHTML = contenido;

}
window.onload = function() {
};