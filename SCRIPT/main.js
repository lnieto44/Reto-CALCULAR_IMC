
let informacion = new Array();
let calcular = document.querySelector("#diagnostico");



calcular.addEventListener("click", (e) => {
  e.preventDefault();
    let Sexo = document.querySelector('input[type = "radio"]:checked');
    sexo = Sexo.value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    const imc = (peso/(altura*altura)).toFixed(2);
  calcularIMC(imc);
  almacenarInfo(sexo, edad, peso, altura, imc);

});



///////////////////////////////////////////////////////////////////

const calcularIMC = (imc) =>{
    console.log(imc);
    let diagnostico = document.querySelector("#calculoIMC");
    var diseño = `<h4 id="calculoIMC" class="col-12">${imc}</h4>`
   diagnostico.innerHTML = diseño;
   
   if (imc < 18.5) {
       let dibujarCategoriaIMC= document.querySelector("h6");
       var diseño2 = `<h6 align="left" class="col-12">
    <strong></strong><br><br>

    <img  class="" src="images/imagen1_Imc.png" >
   •<strong>Bajo peso: Debajo 18.5</strong><br>
   <img class="" src="images/imagen2_Imc.png" >
   •Saludable: 18.5 a 24.9 <br>

   <img  class="" src="images/imagen3_Imc.png" >
   •Exceso de peso: 25.0 a 29.9<br>
   <img  class="" src="images/imagen4_Imc.png" >
   •Obeso: 30.0 a 39.9 <br>
   <img class="" src="images/imagen5_Imc.png">
   •Más Obeso: 40.0 o más <br>

   </h6>`
   dibujarCategoriaIMC.innerHTML = diseño2;
   
   } else if(imc>= 18.5 && imc<24.9){
       let dibujarCategoriaIMC1 = document.querySelector("h6");
       var diseño3 = `<h6 align="left" class="col-12">
    <strong></strong><br><br>

    <img class="" src="images/imagen1_Imc.png">
    •Bajo peso: Debajo 18.5<br>
    <img class="" src="images/imagen2_Imc.png">
    •<strong>Saludable: 18.5 a 24.9</strong> <br>
    <img class="" src="images/imagen3_Imc.png">
    •Exceso de peso: 25.0 a 29.9<br>
    <img class="" src="images/imagen4_Imc.png">
    •Obeso: 30.0 a 39.9 <br>
    <img class="" src="images/imagen5_Imc.png">
    •Más Obeso: 40.0 o más <br>

   </h6>`
       dibujarCategoriaIMC1.innerHTML = diseño3;
   
   } else if(imc>=25 && imc<29.9){
       let dibujarCategoriaIMC2 = document.querySelector("h6");
       var diseño4 = `<h6 align="left" class="col-12">

    <strong></strong><br><br>
     <img class="" src="images/imagen1_Imc.png">
   •Bajo peso: Debajo 18.5<br>
   <img class="" src="images/imagen2_Imc.png">
   •Saludable: 18.5 a 24.9 <br>
   <img class="" src="images/imagen3_Imc.png">
   •<strong>Exceso de peso: 25.0 a 29.9</strong><br>
   <img class="" src="images/imagen4_Imc.png">
   •Obeso: 30.0 a 39.9 <br>
   <img class="" src="images/imagen5_Imc.png">
   •Más Obeso: 40.0 o más <br>  

   </h6>`
   dibujarCategoriaIMC2.innerHTML = diseño4;
       
   } else if(imc>=29.9 && imc<39.9){
       let dibujarCategoriaIMC3 = document.querySelector("h6");
       var diseño5 = `<h6 align="left" class="col-12">

   <strong></strong><br><br>

    <img class="" src="images/imagen1_Imc.png">
   •Bajo peso: Debajo 18.5<br>
   <img class="" src="images/imagen2_Imc.png">
   •Saludable: 18.5 a 24.9 <br>
   <img class="" src="images/imagen3_Imc.png">
   •Exceso de peso: 25.0 a 29.9<br>
   <img class="" src="images/imagen4_Imc.png">
   •<strong>Obeso: 30.0 a 39.9</strong> <br>
   <img class="" src="images/imagen5_Imc.png">
   •Más Obeso: 40.0 o más <br>  

   </h6>`
   dibujarCategoriaIMC3.innerHTML = diseño5;
   } else if(imc>=39.9){
       let dibujarCategoriaIMC4 = document.querySelector("h6");
       var diseño6 = `<h6 align="left" class="col-12">

    <strong></strong><br><br>

     <img class="" src="images/imagen1_Imc.png">
   •Bajo peso: Debajo 18.5</strong><br>
   <img class="" src="images/imagen2_Imc.png">
   •Saludable: 18.5 a 24.9 <br>
   <img class="" src="images/imagen3_Imc.png">
   •Exceso de peso: 25.0 a 29.9<br>
   <img class="" src="images/imagen4_Imc.png">
   •Obeso: 30.0 a 39.9 <br>
   <img class="" src="images/imagen5_Imc.png">
   •<strong>Más Obeso: 40.0 o más <br>  

   </h6>`
   dibujarCategoriaIMC4.innerHTML = diseño6;
   }
   }

   
///////////////////////////////////////////////////////////////////
const almacenarInfo = (sexo, edad, peso, altura, imc) => {
    let info = {
      Sexo: sexo,
      años: edad,
      pesaje: peso,
      alto: altura,
      indice: imc
    };
  
    informacion.push(info);
    console.log(informacion);
  
  };

///////////////////////////////////////////////////////////////////

const almacenarObjeto = () => {
  localStorage.setItem('Informacion de usuario',JSON.stringify(informacion));

}

///////////////////////////////////////////////////////////////////

estadistica.addEventListener('click', (e) =>{
let estadistica = localStorage.getItem('Informacion de usuario');
const datos_estadistica = JSON.parse(estadistica);

traeInformacion(datos_estadistica);
});

traeInformacion = (datos_estadistica) =>{

  for (let i = 0; i < datos_estadistica.length; i++) {
      
      let page = document.getElementById('Usuarios');

let dataTable = `
      <table">
<colgroup span="4" class="columns"></colgroup>
<tr>
  <th>Usuario</th>
  <th>Género</th>
  <th>Edad</th>
  <th>Peso</th>
  <th>Altura</th>
  <th>IMC</th>
</tr>
<tr>
  <td>${i+1}</td>
  <td>${datos_estadistica[i].Sexo}</td>
  <td>${datos_estadistica[i].años}</td>
  <td>${datos_estadistica[i].pesaje}</td>
  <td>${datos_estadistica[i].alto}</td>
  <td>${datos_estadistica[i].indice}</td>
</tr>
</table>
      `
      page.innerHTML += dataTable;

  
  }
}

