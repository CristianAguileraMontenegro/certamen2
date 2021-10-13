interface cliente{
    id:number;
    nombre:string;
    edad:number;
    genero:string;
    nacimineto:Date;
    region:string;
    comuna:string;
    direccion:string
    telefono:string
    habilidades:String[];
    observacion:string
}

let arregloDeCliente = Array<cliente>();

function validacion(){

    let flag:boolean = false;
    let flag2:boolean = false;
    let flag3:boolean = false;
    let flag4:boolean = false;
    let flag5:boolean = false;

    let nombreclinete:string = "";

    eliminarMensajes();
    eliminarMensajes();
    eliminarMensajes();

    if(validacionNombre())
    {
        console.log(nombreclinete);
        flag = true;
    }
    

    if(validacionEdadYNacimineto())
    {
        flag2 = true;
    }

    if(validarGenero())
    {
        flag3 = true;
    }

    if(validarRegionesYComunas())
    {
        flag4 = true;
    }

    if(validarDireccionTelefonoYObservacion())
    {
        flag5 = true;
    }


    if(flag == true && flag2  == true && flag3  == true && flag4  == true && flag5 == true)
    {
        agregarACliente();
        generarListaClintes();
    }
}

function eliminarMensajes()
{
    let mensajeEliminar:any = document.getElementsByClassName("mensajeDeError");

    for(let i = 0; i < mensajeEliminar.length; i++)
    {
        mensajeEliminar[i].parentNode.removeChild(mensajeEliminar[i]);
    }
}

function validacionNombre():boolean{
    let nombre:any = document.getElementById("Nombres");
    
    

    if(nombre.value == "")
    {
        let nombreCol:any = document.getElementById("nombrescol");
        let span:any=document.createElement("span");
        let div:any = document.createElement("div");
        div.className = "mensajeDeError";

        span.textContent = "nombre invalido, recuerde escribir almenos un caracter";
        div.id = "mensajeDeError1";
        div.appendChild(span);
        nombreCol.appendChild(div);
        return false;
    }
    
    return true;
}

function validacionEdadYNacimineto():boolean{
    let edad:any = document.getElementById("edad");
    
    let fecha:any =document.getElementById("Nacimineto");
    let añoNacimiento:any = fecha.value;
    let nuevafecha:Date = new Date(añoNacimiento);

    let fechaActual:Date = new Date();
    let añoActual:number = fechaActual.getFullYear();


    if(añoActual-nuevafecha.getFullYear() != edad.value)
    {
        let edadCol:any = document.getElementById("edadcol");
        let nacimientoCol:any = document.getElementById("nacimientocol");

        let span:any=document.createElement("span");
        let span2:any=document.createElement("span");

        let div:any = document.createElement("div");
        let div2:any = document.createElement("div");

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

function validarGenero():Boolean{

    let radioC:any = document.getElementsByClassName("form-check-input-genero");
    let flag:boolean = false;

    for(let i = 0; i < radioC.length; i++)
    {
        if(radioC[i].checked)
        {
            flag = true;
        }
    }


    if(flag == false)
    {
            let radioCol:any = document.getElementById("radiocol");
            let span:any=document.createElement("span");
            let div:any = document.createElement("div");
            div.className = "mensajeDeError";
    
            span.textContent = "seleccione una opcion";
            div.id = "mensajeDeError1";
            div.appendChild(span);
            radioCol.appendChild(div);
    }
    

    return flag;
}

function validarRegionesYComunas():boolean{

    let regiones:any = document.getElementById("regiones");
    let comunas:any = document.getElementById("comunas");

    let regionesSelecionada:any = regiones.options[regiones.selectedIndex];
    let comunaSelecionada:any = comunas.options[comunas.selectedIndex];

    
    if(regionesSelecionada.text == "Open this select menu" || comunaSelecionada.text == "Open this select menu")
    {
        let regionesCol:any = document.getElementById("regionesCol");
        let comunasCol:any = document.getElementById("comunasCol");

        let span:any=document.createElement("span");
        let span2:any=document.createElement("span");

        let div:any = document.createElement("div");
        let div2:any = document.createElement("div");
        
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

function validarDireccionTelefonoYObservacion():boolean{

    let direccion:any = document.getElementById("direccion");
    let telefono:any = document.getElementById("telefono");
    let observaciones:any = document.getElementById("observaciones");
    let flag: boolean = true;


    if(direccion.value == "" || direccion.value.length < 10)
    {
        let direccionCol:any = document.getElementById("direccioncol");
        let span:any=document.createElement("span");
        let div:any = document.createElement("div");
        div.className = "mensajeDeError";

        span.textContent = "direccion invalida, recuerde escribir una direccion con almenso 10 caracteres";
        div.appendChild(span);
        direccionCol.appendChild(div);
        flag = false;
    }
    
    if(telefono.value < 900000000 || telefono.value > 999999999)
    {
        let telefonoCol:any = document.getElementById("telefonocol");
        let span:any=document.createElement("span");
        let div:any = document.createElement("div");
        div.className = "mensajeDeError";

        span.textContent = "telefono invalido, recuerde escribir su numero solo con el digito verificador 9";
        div.appendChild(span);
        telefonoCol.appendChild(div);
        flag = false;
    }

    if(observaciones.value == "")
    {
        let obCol:any = document.getElementById("observacionescol");
        let span:any=document.createElement("span");
        let div:any = document.createElement("div");
        div.className = "mensajeDeError";

        span.textContent = "observacion invalida, recuerde escribir almenos un caracter";
        div.appendChild(span);
        obCol.appendChild(div);
        flag = false;
    }

    return flag
}

function agregarACliente(){
    let nombre:any = document.getElementById("Nombres");

    let edad:any = document.getElementById("edad");
    let fecha:any =document.getElementById("Nacimineto");
    let añoNacimiento:any = fecha.value;

    let radioGenero:any = document.getElementsByClassName("form-check-input-genero");
    let radioCheck:any;
    for(let i = 0; i < radioGenero.length; i++)
    {
        if(radioGenero[i].checked)
        {
            radioCheck = radioGenero[i].value
        }
    }


    let regiones:any = document.getElementById("regiones");
    let comunas:any = document.getElementById("comunas");

    let regionesSelecionada:any = regiones.options[regiones.selectedIndex];
    let comunaSelecionada:any = comunas.options[comunas.selectedIndex];

    let direccion:any = document.getElementById("direccion");
    let telefono:any = document.getElementById("telefono");

    let listaHabilidades:any = document.getElementById("listaDeHablidades");
    let arregloDeHabilidades = Array<String>();

    for(let i = 0; i < listaHabilidades.children.length; i++)
    {
        arregloDeHabilidades.push(listaHabilidades.children[i].children[0].children[0].textContent);
    }
    
    

    let observaciones:any = document.getElementById("observaciones");

    arregloDeCliente.push({"id":(arregloDeCliente.length+1),"nombre":nombre.value,"edad":edad.value,"genero":radioCheck,"nacimineto":añoNacimiento,"region":regionesSelecionada.text,"comuna":comunaSelecionada.text,"direccion":direccion.value,"telefono":telefono.value,"habilidades":arregloDeHabilidades,"observacion":observaciones.value})
   
}



function generarListaClintes(){

    let rows:any = document.getElementsByClassName("row lista");

    for(let i = 0; i < rows.length; i++)
    {
        if(i == 0)
        {

            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                divCol.className = "col-12 datos";

                let img:any = document.createElement("img");
                img.className = "imgIconoFoto";

                if(arregloDeCliente[j].genero == "Hombre")
                {
                    img.src = "imagenes/Hombre.png"
                }
                else
                {
                    img.src = "imagenes/Mujer.png"
                }

                divCol.appendChild(img);
                rows[i].appendChild(divCol);
            }
        }

        if(i == 1)
        {
            
            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                divCol.className = "col-12 datos";

                let idClinete:any = document.createElement("p");
                idClinete.textContent = arregloDeCliente[j].id;

                divCol.appendChild(idClinete);
                rows[i].appendChild(divCol);
            }
        }

        if(i == 2)
        {
        
            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                divCol.className = "col-12 datos";

                let nombreclinete:any = document.createElement("p");
                nombreclinete.textContent = arregloDeCliente[j].nombre;

                divCol.appendChild(nombreclinete);
                rows[i].appendChild(divCol);
            }
        }

        if(i == 3)
        {
    
            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                divCol.className = "col-12 datos";

                let regionclinete:any = document.createElement("p");
                regionclinete.textContent = arregloDeCliente[j].region;

                divCol.appendChild(regionclinete);
                rows[i].appendChild(divCol);
            }
        }

        if(i == 4)
        {

            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                divCol.className = "col-12 datos";

                let comunaclinete:any = document.createElement("p");
                comunaclinete.textContent = arregloDeCliente[j].comuna;

                divCol.appendChild(comunaclinete);
                rows[i].appendChild(divCol);
            }
        }

        if(i == 5)
        {

            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                //divCol.className = "col-12 datos";
                divCol.id = "habilidadesEnLista";

                for(let k = 0; k < arregloDeCliente[j].habilidades.length; k++)
                {
                    let contenerdorHabilidades:any = document.createElement("div");
                    let nombreHabilidad:any = document.createElement("p");

                    nombreHabilidad.textContent = arregloDeCliente[j].habilidades[k];

                    contenerdorHabilidades.appendChild(nombreHabilidad);
                    divCol.appendChild(contenerdorHabilidades);
                    
                }
            rows[i].appendChild(divCol);
               
            }
        }

        if(i == 6)
        {

            for(let j = arregloDeCliente.length-1; j < arregloDeCliente.length; j++)
            {
                let divCol:any = document.createElement("div");
                divCol.className = "col-12 datos";
                
                let span:any = document.createElement("span");
                span.className = "material-icons";
                span.textContent = "delete";
                span.id = j+1;

                span.onclick = function elimiar(){
                    eliminarCliente(span);
                }

                divCol.appendChild(span);
                rows[i].appendChild(divCol);
               
            }
        }
    } 
}

function eliminarCliente(span:any){
    
    let rows:any = document.getElementsByClassName("row lista");
    for(let i = 0; i < arregloDeCliente.length; i++)
    {
        if(span.id == arregloDeCliente[i].id)
        {
            for(let j  = 0; j < rows.length; j++)
            {
                
                rows[j].removeChild(rows[j].children[i+1]);
                console.log("elimine");
            }
           arregloDeCliente.splice(i,1);
        }
    }    
}

function limpiar(){
    let boton:any = document.getElementById("limpiar1");
    boton.type = "reset";
    let ul:any = document.getElementById("listaDeHablidades");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    } 
}

