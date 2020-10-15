const datos = [{
	id: 1,
	tittle: "Iron Man",
	year: 2008
},{
	id: 2,
	tittle: "Spiderman Homecoming",
	year: 2017
},{
	id: 3,
	tittle: "Avengers: Endgame",
	year: 2019
}]

const getDatos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>
			resolve(datos)
			//
			//return(datos);
		,1500);
		if(datos.length === 0){
			reject(new Error("No existen datos"));
		}
	})
}
//console.log(getDatos());
//
getDatos()
	.then((datos) => console.log(datos))
	.catch((error) => {
		console.log("Fallo!");
	})