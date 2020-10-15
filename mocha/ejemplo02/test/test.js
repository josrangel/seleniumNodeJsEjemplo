const assert = require('assert');
const assert = require('../kmmx.js');

describe("Manipulacion de cadenas",function(){
	describe("quitaAr",function(){
		it("Si termina con ar el ar se quita", function(){
			assert.equal(kmmx.quitaAr("Programar"),"Program");
		})
	});
	//TO DO
	
	it("Si comienza con Z, PE es añadido al final", function(){
		assert.equal(kmmx.ponerPeFinal('Zorro'),'Zorrope')
	})
	/*it("Si tiene diez o mas caracteres ponemos un guion - en medio", function(){
		assert.equal(kmmx.ponerPeFinal('Abecedario'),'Abece-dario')
	})
	it("Si es un palindrome, no se aplica ninguna regla sol se mayusculas intercaladas", function(){
		assert.equal(kmmx.ponerPeFinal('Sometemos'),'SoMeTeMos')
	})
	*/
});