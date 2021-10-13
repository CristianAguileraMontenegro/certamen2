"use strict";
var arregloDeCliente = Array();
function validacion() {
    var flag = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    var nombreclinete = "";
    eliminarMensajes();
    eliminarMensajes();
    eliminarMensajes();
    if (validacionNombre()) {
        console.log(nombreclinete);
        flag = true;
    }
    if (validacionEdadYNacimineto()) {
        flag2 = true;
    }
    if (validarGenero()) {
        flag3 = true;
    }
    if (validarRegionesYComunas()) {
        flag4 = true;
    }
    if (validarDireccionTelefonoYObservacion()) {
        flag5 = true;
    }
    if (flag == true && flag2 == true && flag3 == true && flag4 == true && flag5 == true) {
        agregarACliente();
        generarListaClintes();
    }
}
function eliminarMensajes() {
    var mensajeEliminar = document.getElementsByClassName("mensajeDeError");
    for (var i = 0; i < mensajeEliminar.length; i++) {
        mensajeEliminar[i].parentNode.removeChild(mensajeEliminar[i]);
    }
}
function validacionNombre() {
    var nombre = document.getElementById("Nombres");
    if (nombre.value == "") {
        var nombreCol = document.getElementById("nombrescol");
        var span = document.createElement("span");
        var div = document.createElement("div");
        div.className = "mensajeDeError";
        span.textContent = "nombre invalido, recuerde escribir almenos un caracter";
        div.id = "mensajeDeError1";
        div.appendChild(span);
        nombreCol.appendChild(div);
        return false;
    }
    return true;
}
function validacionEdadYNacimineto() {
    var edad = document.getElementById("edad");
    var fecha = document.getElementById("Nacimineto");
    var añoNacimiento = fecha.value;
    var nuevafecha = new Date(añoNacimiento);
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    if (añoActual - nuevafecha.getFullYear() != edad.value) {
        var edadCol = document.getElementById("edadcol");
        var nacimientoCol = document.getElementById("nacimientocol");
        var span = document.createElement("span");
        var span2 = document.createElement("span");
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        div.className = "mensajeDeError";
        div2.className = "mensajeDeError";
        span.textContent = "edad y fecha de nacimineto no coinciden";
        span2.textContent = "edad y fecha de nacimineto no coinciden";
        div.appendChild(span);
        div2.appendChild(span2);
        edadCol.appendChild(div);
        nacimientoCol.appendChild(div2);
        return false;
    }
    return true;
}
function validarGenero() {
    var radioC = document.getElementsByClassName("form-check-input-genero");
    var flag = false;
    for (var i = 0; i < radioC.length; i++) {
        if (radioC[i].checked) {
            flag = true;
        }
    }
    if (flag == false) {
        var radioCol = document.getElementById("radiocol");
        var span = document.createElement("span");
        var div = document.createElement("div");
        div.className = "mensajeDeError";
        span.textContent = "seleccione una opcion";
        div.id = "mensajeDeError1";
        div.appendChild(span);
        radioCol.appendChild(div);
    }
    return flag;
}
function validarRegionesYComunas() {
    var regiones = document.getElementById("regiones");
    var comunas = document.getElementById("comunas");
    var regionesSelecionada = regiones.options[regiones.selectedIndex];
    var comunaSelecionada = comunas.options[comunas.selectedIndex];
    if (regionesSelecionada.text == "Open this select menu" || comunaSelecionada.text == "Open this select menu") {
        var regionesCol = document.getElementById("regionesCol");
        var comunasCol = document.getElementById("comunasCol");
        var span = document.createElement("span");
        var span2 = document.createElement("span");
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        div.className = "mensajeDeError";
        div2.className = "mensajeDeError";
        span.textContent = "Seleccione una region";
        span2.textContent = "Seleccione una comuna";
        div.appendChild(span);
        div2.appendChild(span2);
        regionesCol.appendChild(div);
        comunasCol.appendChild(div2);
        return false;
    }
    return true;
}
function validarDireccionTelefonoYObservacion() {
    var direccion = document.getElementById("direccion");
    var telefono = document.getElementById("telefono");
    var observaciones = document.getElementById("observaciones");
    var flag = true;
    if (direccion.value == "" || direccion.value.length < 10) {
        var direccionCol = document.getElementById("direccioncol");
        var span = document.createElement("span");
        var div = document.createElement("div");
        div.className = "mensajeDeError";
        span.textContent = "direccion invalida, recuerde escribir una direccion con almenso 10 caracteres";
        div.appendChild(span);
        direccionCol.appendChild(div);
        flag = false;
    }
    if (telefono.value < 900000000 || telefono.value > 999999999) {
        var telefonoCol = document.getElementById("telefonocol");
        var span = document.createElement("span");
        var div = document.createElement("div");
        div.className = "mensajeDeError";
        span.textContent = "telefono invalido, recuerde escribir su numero solo con el digito verificador 9";
        div.appendChild(span);
        telefonoCol.appendChild(div);
        flag = false;
    }
    if (observaciones.value == "") {
        var obCol = document.getElementById("observacionescol");
        var span = document.createElement("span");
        var div = document.createElement("div");
        div.className = "mensajeDeError";
        span.textContent = "observacion invalida, recuerde escribir almenos un caracter";
        div.appendChild(span);
        obCol.appendChild(div);
        flag = false;
    }
    return flag;
}
function agregarACliente() {
    var nombre = document.getElementById("Nombres");
    var edad = document.getElementById("edad");
    var fecha = document.getElementById("Nacimineto");
    var añoNacimiento = fecha.value;
    var radioGenero = document.getElementsByClassName("form-check-input-genero");
    var radioCheck;
    for (var i = 0; i < radioGenero.length; i++) {
        if (radioGenero[i].checked) {
            radioCheck = radioGenero[i].value;
        }
    }
    var regiones = document.getElementById("regiones");
    var comunas = document.getElementById("comunas");
    var regionesSelecionada = regiones.options[regiones.selectedIndex];
    var comunaSelecionada = comunas.options[comunas.selectedIndex];
    var direccion = document.getElementById("direccion");
    var telefono = document.getElementById("telefono");
    var listaHabilidades = document.getElementById("listaDeHablidades");
    var arregloDeHabilidades = Array();
    for (var i = 0; i < listaHabilidades.children.length; i++) {
        arregloDeHabilidades.push(listaHabilidades.children[i].children[0].children[0].textContent);
    }
    var observaciones = document.getElementById("observaciones");
    arregloDeCliente.push({ "id": (arregloDeCliente.length + 1), "nombre": nombre.value, "edad": edad.value, "genero": radioCheck, "nacimineto": añoNacimiento, "region": regionesSelecionada.text, "comuna": comunaSelecionada.text, "direccion": direccion.value, "telefono": telefono.value, "habilidades": arregloDeHabilidades, "observacion": observaciones.value });
}
function generarListaClintes() {
    var rows = document.getElementsByClassName("row lista");
    for (var i = 0; i < rows.length; i++) {
        if (i == 0) {
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                var divCol = document.createElement("div");
                divCol.className = "col-12 datos";
                var img = document.createElement("img");
                img.className = "imgIconoFoto";
                if (arregloDeCliente[j].genero == "Hombre") {
                    img.src = "imagenes/Hombre.png";
                }
                else {
                    img.src = "imagenes/Mujer.png";
                }
                divCol.appendChild(img);
                rows[i].appendChild(divCol);
            }
        }
        if (i == 1) {
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                var divCol = document.createElement("div");
                divCol.className = "col-12 datos";
                var idClinete = document.createElement("p");
                idClinete.textContent = arregloDeCliente[j].id;
                divCol.appendChild(idClinete);
                rows[i].appendChild(divCol);
            }
        }
        if (i == 2) {
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                var divCol = document.createElement("div");
                divCol.className = "col-12 datos";
                var nombreclinete = document.createElement("p");
                nombreclinete.textContent = arregloDeCliente[j].nombre;
                divCol.appendChild(nombreclinete);
                rows[i].appendChild(divCol);
            }
        }
        if (i == 3) {
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                var divCol = document.createElement("div");
                divCol.className = "col-12 datos";
                var regionclinete = document.createElement("p");
                regionclinete.textContent = arregloDeCliente[j].region;
                divCol.appendChild(regionclinete);
                rows[i].appendChild(divCol);
            }
        }
        if (i == 4) {
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                var divCol = document.createElement("div");
                divCol.className = "col-12 datos";
                var comunaclinete = document.createElement("p");
                comunaclinete.textContent = arregloDeCliente[j].comuna;
                divCol.appendChild(comunaclinete);
                rows[i].appendChild(divCol);
            }
        }
        if (i == 5) {
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                var divCol = document.createElement("div");
                //divCol.className = "col-12 datos";
                divCol.id = "habilidadesEnLista";
                for (var k = 0; k < arregloDeCliente[j].habilidades.length; k++) {
                    var contenerdorHabilidades = document.createElement("div");
                    var nombreHabilidad = document.createElement("p");
                    nombreHabilidad.textContent = arregloDeCliente[j].habilidades[k];
                    contenerdorHabilidades.appendChild(nombreHabilidad);
                    divCol.appendChild(contenerdorHabilidades);
                }
                rows[i].appendChild(divCol);
            }
        }
        if (i == 6) {
            var _loop_1 = function (j) {
                var divCol = document.createElement("div");
                divCol.className = "col-12 datos";
                var span = document.createElement("span");
                span.className = "material-icons";
                span.textContent = "delete";
                span.id = j + 1;
                span.onclick = function elimiar() {
                    eliminarCliente(span);
                };
                divCol.appendChild(span);
                rows[i].appendChild(divCol);
            };
            for (var j = arregloDeCliente.length - 1; j < arregloDeCliente.length; j++) {
                _loop_1(j);
            }
        }
    }
}
function eliminarCliente(span) {
    var rows = document.getElementsByClassName("row lista");
    for (var i = 0; i < arregloDeCliente.length; i++) {
        if (span.id == arregloDeCliente[i].id) {
            for (var j = 0; j < rows.length; j++) {
                rows[j].removeChild(rows[j].children[i + 1]);
                console.log("elimine");
            }
            arregloDeCliente.splice(i, 1);
        }
    }
}
function limpiar() {
    var boton = document.getElementById("limpiar1");
    boton.type = "reset";
    var ul = document.getElementById("listaDeHablidades");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}
