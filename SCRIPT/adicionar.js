var adicionar = document.querySelector("#agregar_datos");

adicionar.addEventListener("click", function(event){

	event.preventDefault();

	var itemNombre = document.querySelector("#nombre-registro");
	var itemSexo = document.querySelector("#sexo-registro");
	var itemEdad = document.querySelector("#edad-registro");
	var itemPeso = document.querySelector("#peso-registro");
	var itemAltura= document.querySelector("#altura-registro");;

	var tabladatos = "<tr class='datos'>"+
						"<td class='nombre'id='nombre-1'>"+ itemNombre.value + "</td>"+
						"<td class='sexo' id='sexo-1'>"+ itemSexo.value + "</td>"+
						"<td class='edad' id='edad-1'>"+ itemEdad.value + "</td>"+
						"<td class='peso'id='peso-1'>" + itemPeso.value + "</td>"+
						"<td class='altura' id='altura-1'>"+ itemAltura.value + "</td>"+
						"<td class='imc' id='imc-1'></td>"+
					"</tr>";


	var tabla = document.querySelector("table");
	tabla.innerHTML = tabla.innerHTML +  tabladatos ;

	itemNombre.value = "";
	itemSexo.value = "";
	itemEdad.value = "";
	itemPeso.value = "";
	itemAltura.value = "";

})