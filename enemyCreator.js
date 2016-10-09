var Monstruo = {
		nombre : "asd",
		imagen : "",
		vida : 0,
		armadura : 0,
		ataque1 : 0,
		dmg1_min : 0,
		dmg1_sum : 0,
		ataque2 : 0,
		dmg2_min : 0,
		dmg2_sum : 0,
		cant_min : 0,
		variacion : 0,
		exp : 0,
		tesoro : 0
};

var errorDisplay = document.getElementById("errorDisplay");

function addMonstruo(){
	
	var nombre = document.getElementById('nombre');
	var vida = document.getElementById('vida');
	var armadura = document.getElementById('armadura');
	var atq1 = document.getElementById('atq1');
	var atq2 = document.getElementById('atq2');
	var dmg1_min = document.getElementById('dmg1_min');
	var dmg2_min = document.getElementById('dmg2_min');
	var dmg2_sum = document.getElementById('dmg2_sum');
	var dmg1_sum = document.getElementById('dmg1_sum');
	var cantidad = document.getElementById('cantidad');
	var variacion = document.getElementById('variacion');
	var exp = document.getElementById('exp');
	var tesoro = document.getElementById('tesoro');
	
	if(construirMonstruo()){
		var result = JSON.stringify(Monstruo);
	}
	
	
}

function construirMonstruo(){
	
	
	if(comprobarCampo("nombre",nombre.value))
		Monstruo.nombre = nombre.value;
	else{
		errorDisplay.innerHTML = "Error en el campo nombre";
		return false;
	}
	
	//ATENCION: el path de imagen no será comprobado!!
	Monstruo.imagen = document.getElementById("imagen").value;
	
	if(comprobarCampo("vida",parseInt(vida.value)))
		Monstruo.vida = parseInt(vida.value);
	else{
		errorDisplay.innerHTML = "Error en el campo vida";
		return false;
	}
	
	if(comprobarCampo("armadura",parseInt(armadura.value)))
		Monstruo.armadura = parseInt(armadura.value);
	else{
		errorDisplay.innerHTML ="Error en el campo armadura";
		return false;
	}
	
	if(comprobarCampo("atq",parseInt(atq1.value)))
		Monstruo.ataque1 = parseInt(atq1.value);
	else{
		errorDisplay.innerHTML ="Error en el campo ataque1";
		return false;
	}
	
	if(comprobarCampo("dmg",parseInt(dmg1_min.value)))
		Monstruo.dmg1_min = parseInt(dmg1_min.value);
	else{
		errorDisplay.innerHTML ="Error en el campo dmg1_min";
		return false;
	}
	if(comprobarCampo("dmg",parseInt(dmg1_sum.value)))
		Monstruo.dmg1_sum = parseInt(dmg1_sum.value);
	else{
		errorDisplay.innerHTML ="Error en el campo dmg1_sum";
		return false;
	}
	
	//comprueba si existe el segundo ataque
	if(atq2.value > 0){
		if(comprobarCampo("atq",parseInt(atq2.value)))
			Monstruo.ataque2 = parseInt(atq2.value);
		else{
			errorDisplay.innerHTML ="Error en el campo ataque2";
			return false;
		}
		if(comprobarCampo("dmg",parseInt(dmg2_min.value)))
			Monstruo.dmg2_min = parseInt(dmg2_min.value);
		else{
			errorDisplay.innerHTML ="Error en el campo dmg2_min";
			return false;
		}
		if(comprobarCampo("dmg", parseInt(dmg2_sum.value)))
			Monstruo.dmg2_sum = parseInt(dmg2_sum.value);
		else{
			errorDisplay.innerHTML ="Error en el campo dmg2_sum";
			return false;
		}
	}
	
	if(comprobarCampo("cantidad",parseInt(cantidad.value)))
			Monstruo.cant_min = parseInt(cantidad.value);
	else{
		errorDisplay.innerHTML ="Error en el campo cantidad";
		return false;
	}
	
	if(comprobarCampo("variacion",parseInt(variacion.value)))
		Monstruo.variacion = parseInt(variacion.value);
	else{
		errorDisplay.innerHTML = "Error en el campo variación";
		return false;
	}
	
	if(comprobarCampo("exp",parseInt(exp.value)))
			Monstruo.exp = parseInt(exp.value);
	else{
		errorDisplay.innerHTML ="Error en el campo exp";
		return false;
	}
	
	if(comprobarCampo("tesoro",parseInt(tesoro.value)))
			Monstruo.tesoro = parseInt(tesoro.value);
	else{
		errorDisplay.innerHTML ="Error en el campo tesoro";
		return false;
	}
	
	return true;
	
}

function comprobarCampo(tipo,valor){
	var res = true;
	
	switch(tipo){
		case "nombre":
			if(valor.length < 1 || valor.length > 15)
				res = false;
			break;
		case "imagen":
			break;
		case "vida":
			if(Number.isNaN(valor) || valor < 1 || valor > 500 )
				res = false;
			break;
		case "armadura":
			if(Number.isNaN(valor) || valor < 5 || valor > 50)
				res = false;
			break;
		case "atq":
			if(Number.isNaN(valor)  || valor < -10 || valor > 50)
				res = false;
			break;
		case "dmg":
			if(Number.isNaN(valor)  || valor < 1 || valor > 500)
				res = false;
			break;
		case "cantidad":
			if( Number.isNaN(valor)  || valor < 1 || valor > 3)
				res = false;
			break;
		case "variacion":
			if( Number.isNaN(valor)  || valor < 0 || valor > 20)
				res = false;
			break;
		case "exp":
			if( Number.isNaN(valor)  || valor < 0 || valor > 10000)
				res = false;
			break;
		case "tesoro":
			if( Number.isNaN(valor)  || valor < 0 || valor > 100)
				res = false;
			break;
	}
	
	
	return res;
}