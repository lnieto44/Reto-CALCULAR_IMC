
function informImc(){

    let sexo = localStorage.getItem("sexo");
    if(!sexo){
        alert('Por favor escoga un sexo');
        return false;
    }
    let nombre = document.getElementById("nombre").value;
	let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    localStorage.setItem("nombre", nombre);
	localStorage.setItem("edad", edad);
	localStorage.setItem("peso", peso);
	localStorage.setItem("altura", altura);
    calcularValores(nombre, edad, peso, altura, sexo);
    return false;
}

function escogerSexo(event, sexo){
    event.currentTarget;
    localStorage.setItem("sexo", sexo);
    
}	
function calcularValores(nombre,edad, peso, altura, sexo){
    let imc = peso / (altura * altura);
    imc = Math.round(imc * 100) / 100;
    document.getElementById('solucion').className= "";
    document.getElementById('calcula').className= "";
    document.getElementById('solucionIMC').innerText = imc;

    let pesoMinSaludable = 18.5*altura*altura;
    pesoMinSaludable  = Math.round(pesoMinSaludable * 100) / 100;
    let pesoMaxSaludable = 24.9*altura*altura;
    pesoMaxSaludable = Math.round(pesoMaxSaludable * 100) / 100;
    document.getElementById('peso_recomendado').innerText = pesoMinSaludable + ' - '+pesoMaxSaludable +' (Kg)';
    

    let datosguardados = localStorage.getItem("");

    if(!datosguardados){
        datosguardados = [];
    } else {
        datosguardados = JSON.parse(datosguardados);
        if(datosguardados.length==15){
            datosguardados.shift();
        }
    }
    let NuevoDato = {
        'nombre': nombre,
        'edad': edad,
        'peso': peso,
        'altura': altura,
        'imc': imc,
        'sexo': sexo
    };
    datosguardados.push(NuevoDato);
    localStorage.setItem("datosguardados", JSON.stringify(datosguardados));
    let elementos = '';
    datosguardados.forEach(guardainfo => {
        elementos +=`<div>
        <table id="g-table"  border="1">
        <colgroup span="6" class="columns"></colgroup>
        <tr>
        <th>Nombre</th>
        <th>Sexo</th>
        <th>Edad </th>
        <th>Peso</th>
        <th>ALtura</th>
        <th>IMC</th>
        </tr>
        <tr>
        <td>${guardainfo.nombre}</td>
        <td>${guardainfo.sexo}</td>
        <td>${guardainfo.edad}</td>
        <td>${guardainfo.peso}</td>
        <td>${guardainfo.altura}</td>
        <td>${guardainfo.imc}</td>
        </tr>
        </table>
        </div>
            `
    
                    
    });
    document.getElementById('datos').innerHTML += elementos;
}

