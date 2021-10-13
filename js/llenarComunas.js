"use strict";
var barraRegiones = document.getElementById("regiones");
barraRegiones.onchange = function () {
    var regionSelecionada = document.getElementById("regiones").value; //obtenemos la region selecionada
    var comunasRegion = document.getElementById("comunas");
    for (var i = 0; i < comunasRegion.options.length; i++) {
        comunasRegion.options.remove(i);
    }
    if (regionSelecionada == '') {
        for (var i = 0; i < comunasRegion.options.length; i++) {
            comunasRegion.options.remove(i);
        }
    }
    if (regionSelecionada == '1') {
        for (var i = 0; i < comunasRegion.options.length; i++) {
            comunasRegion.options.remove(i);
        }
        var option = document.createElement("option");
        option.value = "1";
        option.textContent = "Valparaiso";
        var option2 = document.createElement("option");
        option2.value = "2";
        option2.textContent = "Viña del mar";
        comunasRegion.appendChild(option);
        comunasRegion.appendChild(option2);
    }
    if (regionSelecionada == '2') {
        for (var i = 0; i < comunasRegion.options.length; i++) {
            comunasRegion.options.remove(i);
        }
        var option = document.createElement("option");
        option.value = "1";
        option.textContent = "Caldera";
        var option2 = document.createElement("option");
        option2.value = "2";
        option2.textContent = "Vallenar";
        comunasRegion.appendChild(option);
        comunasRegion.appendChild(option2);
    }
};
