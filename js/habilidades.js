"use strict";
function generarFormularioHabilidad() {
    var container = document.getElementById("containerFormularioHabilidad");
    container.style.display = "none";
    var divHabilidades = document.createElement("div");
    divHabilidades.className = "col-md-4 col-sm-2";
    divHabilidades.id = "divHabilidades";
    var divrow = document.createElement("div");
    divrow.className = "row";
    var divcol = document.createElement("div");
    divcol.className = "col-md-6";
    var form = document.createElement("form");
    form.id = "formularioHabilidad";
    var div = document.createElement("div");
    div.className = "form-group";
    div.id = "formHabilidades";
    var divcolHabilidad = document.createElement("div"); //se crea una estas por cada componente del formulario
    divcolHabilidad.className = "col-md-6 col-sm-2";
    divcolHabilidad.id = "divcolHabilidad";
    var inputHabilidad = document.createElement("input");
    inputHabilidad.id = "inputHabilidad";
    inputHabilidad.type = "text";
    inputHabilidad.placeholder = "habilidad";
    var botonHabilidad = document.createElement("button");
    botonHabilidad.type = "button";
    botonHabilidad.textContent = "Adicionar";
    botonHabilidad.id = "botonAgregarHabilidad";
    botonHabilidad.onclick = function agregar() {
        agregarHabilidadAFormularioCliente();
    };
    divcolHabilidad.appendChild(inputHabilidad);
    div.appendChild(divcolHabilidad);
    div.appendChild(botonHabilidad);
    form.appendChild(div);
    divHabilidades.appendChild(form);
    divrow.appendChild(divHabilidades);
    container.appendChild(divrow);
    //document.body.appendChild(container);
}
function mostrarFormulario() {
    var container = document.getElementById("containerFormularioHabilidad");
    container.style.display = "inline";
}
function agregarHabilidadAFormularioCliente() {
    var habilidades = document.getElementById("listaDeHablidades");
    var liHabilidad = document.createElement("li");
    var div = document.createElement("div");
    div.id = "contenedorHabilidades";
    var p = document.createElement("p");
    var habilidadIngresada = document.getElementById("inputHabilidad");
    console.log(habilidadIngresada.value);
    p.textContent = habilidadIngresada.value;
    div.appendChild(p);
    liHabilidad.appendChild(div);
    habilidades.appendChild(liHabilidad);
    var container = document.getElementById("containerFormularioHabilidad");
    container.style.display = "none";
}
window.addEventListener("load", this.generarFormularioHabilidad);
