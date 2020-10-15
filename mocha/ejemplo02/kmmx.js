let lmmk = {};

kmmx.quitaAr = function(cadena){
	var ultimo = cadena[cadena.length-1];
	var penultimo = cadena[cadena.length-2];
	var twoChar = penultimo + ultimo; 

	if(twoChar === "ar"){
		var newStr = cadena.substring(0,cadena.length-2);
	}

	if(cadena[0] === "Z" || cadena[0] === "z"){
		var newStr = cadena+"pe";
	}
	return newStr;
}

module.exports = kmmx;