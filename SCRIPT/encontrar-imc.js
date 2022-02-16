let informaciones = new Array();
let dat =document.querySelector(".btnresultados");

var encontrar = document.getElementById("calcula-imcs");
encontrar.addEventListener("click", function() {

		var datos = document.getElementsByClassName("datos");

	CorreArray(datos, function(item){
	    var Nombre = item.getElementsByClassName("nombre")[0];
		var Sexo = item.getElementsByClassName("sexo")[0]; 
		var Edad = item.getElementsByClassName("edad")[0];
		var Peso = item.getElementsByClassName("peso")[0]; 
		var Altura = item.getElementsByClassName("altura")[0];

	    var datoActual = {
	        nombre : Nombre.textContent,
			sexo : Sexo.textContent,
			edad : Edad.textContent,
			peso : Peso.textContent, 
			altura : Altura.textContent,
	        pegaImc: function() {

	            if(this.altura != 0){
	                var imc = this.peso / (this.altura * this.altura);
	                return imc;
	            } else{

	            }
	        }
	    }
	    var imc = datoActual.pegaImc();

	    var Imc = item.getElementsByClassName("imc")[0]; 
	    Imc.textContent = imc;

	    console.log(imc);
	});
});

///////////////////////////////////////////////////////////////////
const guardardats = (nombre, sexo, edad, peso, altura, imc) => {
    let infor = {
	 nombres: nombre,
      sexos: sexo,
      años: edad,
      pesos: peso,
      alto: altura,
      indice: imc
    };
  
    dat.push(infor);
    console.log(dat);
  
  };


///////////////////////////////////////////////////////////////////
 //almacena informacion del usuario
const AlmacenaObjeto = () => {
    localStorage.setItem('informacion Usuario',JSON.stringify(informaciones));

}
dat.addEventListener('click', (e) =>{
	let resultado = localStorage.getItem('Datos Usuario');
	const estadisticos = JSON.parse(resultado);
   
	traerdatos(estadisticos);
   });
   
   for (let i = 0; i < estadisticos.length; i++) {

	let pagina = document.getElementById('Usuarios');

let datotabla = `
	<table">
<colgroup span="4" class="columns"></colgroup>
<tr>
<th>Nombre</th>
<th>Edad</th>
<th>Sexo </th>
<th>Edad</th>
<th>Peso</th>
<th>Altura</th>
<th>IMC</th>
</tr>
<tr>
<td>${estadisticos[i].nombre}</td>
<td>${estadisticos[i].datos}</td>
<td>${estadisticos[i].sexo}</td>
<td>${estadisticos[i].años}</td>
<td>${estadisticos[i].pesos}</td>
<td>${estadisticos[i].alto}</td>
<td>${estadisticos[i].indice}</td>
</tr>
</table>
	`
	pagina.innerHTML += datotabla;


}
