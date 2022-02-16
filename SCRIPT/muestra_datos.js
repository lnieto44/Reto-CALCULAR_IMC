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
    console.log(datoActual.nome);
});