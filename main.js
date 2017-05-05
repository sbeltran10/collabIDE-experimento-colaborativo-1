var grafo = [];

// Se crea la lista de adyacencia que representa al grafo

var vertice0 = [
    { verticeAdyacente: 4, peso: 4 }
];
var vertice1 = [
    { verticeAdyacente: 3, peso: 1 }
];
var vertice2 = [
    { verticeAdyacente: 0, peso: 2 },
    { verticeAdyacente: 4, peso: 4 }
];
var vertice3 = [
    { verticeAdyacente: 2, peso: 3 }
];
var vertice4 = [
    { verticeAdyacente: 3, peso: 8 },
    { verticeAdyacente: 1, peso: 8 }
];
var vertice5 = [
    { verticeAdyacente: 2, peso: 6 },
    { verticeAdyacente: 3, peso: 4 }
];

grafo.push(vertice0);
grafo.push(vertice1);
grafo.push(vertice2);
grafo.push(vertice3);
grafo.push(vertice4);
grafo.push(vertice5);

console.log(grafo);

// PARTE 1
function agregarVertice(){

	var verticeNuevo = [];
	grafo.push(verticeNuevo);
}

function darPesoArco(verticeOrigen, verticeDestino){
	var vOrigen = grafo[verticeOrigen];
	var vLenght = vOrigen.lenght;
	var i;
	var respuesta = -1;

	for(i = 0; i < vLenght; i++)
	{

		if(vOrigen[i].verticeAdyacente == verticeDestino)
		{
			respuesta = vOrigen[i].peso;
		}
	}

	return respuesta;
}

function darGrado(vertice){

	return grafo[vertice].lenght;
}

caminoBFS(verticeOrigen){

	var vertOrigen
}
// PARTE 2
var grafoAlternativo;

