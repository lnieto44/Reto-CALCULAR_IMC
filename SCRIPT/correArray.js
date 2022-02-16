//corre el array 

function CorreArray(datos, funcional) {

    for(var datosAtual = 0; datosAtual <= datos.length - 1; datosAtual++){

        var InformaAtual = datos[datosAtual];
        funcional(InformaAtual);
    }
}