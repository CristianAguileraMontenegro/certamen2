 let barraRegiones:any = document.getElementById("regiones");


 barraRegiones.onchange = function(){
    let regionSelecionada:any = (<HTMLSelectElement>document.getElementById("regiones")).value; //obtenemos la region selecionada
    let comunasRegion:any = document.getElementById("comunas");

    for(let i = 0; i < comunasRegion.options.length;i++ )
    {
            comunasRegion.options.remove(i);
    }
    
    if(regionSelecionada == '')
    {
        for(let i = 0; i < comunasRegion.options.length;i++ )
        {
                comunasRegion.options.remove(i);
        }
    }

    if(regionSelecionada == '1')
    {
        for(let i = 0; i < comunasRegion.options.length;i++ )
        {
            comunasRegion.options.remove(i);
        }

        let option:any = document.createElement("option");
        option.value = "1";
        option.textContent = "Valparaiso";

        let option2:any = document.createElement("option");
        option2.value = "2";
        option2.textContent = "Viña del mar";

        comunasRegion.appendChild(option);
        comunasRegion.appendChild(option2);
    }

    if(regionSelecionada == '2')
    {
        for(let i = 0; i < comunasRegion.options.length;i++ )
        {
            comunasRegion.options.remove(i);
        }

        let option:any = document.createElement("option");
        option.value = "1";
        option.textContent = "Caldera";

        let option2:any = document.createElement("option");
        option2.value = "2";
        option2.textContent = "Vallenar";

        comunasRegion.appendChild(option);
        comunasRegion.appendChild(option2);

    }

 }