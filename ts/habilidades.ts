function generarFormularioHabilidad(){
    let container:any = document.getElementById("containerFormularioHabilidad");
    container.style.display = "none";

    let divHabilidades:any = document.createElement("div");
    divHabilidades.className = "col-md-4 col-sm-2";
    divHabilidades.id = "divHabilidades";

    let divrow:any = document.createElement("div"); 
    divrow.className = "row";

    let divcol:any = document.createElement("div");
    divcol.className="col-md-6";

    let form:any = document.createElement("form");
    form.id = "formularioHabilidad";

    let div:any = document.createElement("div");
    div.className = "form-group";
    div.id = "formHabilidades";

    let divcolHabilidad:any = document.createElement("div"); //se crea una estas por cada componente del formulario
    divcolHabilidad.className="col-md-6 col-sm-2";
    divcolHabilidad.id = "divcolHabilidad";

    let inputHabilidad:any = document.createElement("input");
    inputHabilidad.id = "inputHabilidad";
    inputHabilidad.type = "text";
    inputHabilidad.placeholder = "habilidad";

    let botonHabilidad:any = document.createElement("button");
    botonHabilidad.type = "button";
    botonHabilidad.textContent = "Adicionar";
    botonHabilidad.id = "botonAgregarHabilidad";

    botonHabilidad.onclick = function agregar(){
        agregarHabilidadAFormularioCliente();
    }


    divcolHabilidad.appendChild(inputHabilidad);
    div.appendChild(divcolHabilidad);
    div.appendChild(botonHabilidad);
    form.appendChild(div);
    divHabilidades.appendChild(form);
    divrow.appendChild(divHabilidades);
    container.appendChild(divrow);
    //document.body.appendChild(container);
}

function mostrarFormulario(){
    let container:any = document.getElementById("containerFormularioHabilidad");
    container.style.display = "inline";
}

function agregarHabilidadAFormularioCliente(){

        let habilidades:any = document.getElementById("listaDeHablidades");
        let liHabilidad:any = document.createElement("li");
        let div:any = document.createElement("div");
        div.id = "contenedorHabilidades";
        let p:any = document.createElement("p");

        let habilidadIngresada: any = document.getElementById("inputHabilidad");
        console.log(habilidadIngresada.value);
        p.textContent = habilidadIngresada.value;
        

        div.appendChild(p);
        liHabilidad.appendChild(div);
        habilidades.appendChild(liHabilidad);

        let container:any = document.getElementById("containerFormularioHabilidad");
        container.style.display = "none";
}

window.addEventListener("load", this.generarFormularioHabilidad);