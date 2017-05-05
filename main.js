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

function darNumeroArcos( )
{
	var count = 0;
	for(i = 0; i < grafo.lenght; i++)
	{
		var vertice = grafo[i];
		count += vertice.lenght;
	}
	return count;
}

function agregarArco(verticeOrigen, verticeDestino, peso)
{
	var verticeOri = grafo[verticeOrigen];
	for(i = 0; i < verticeOri.lenght; i++)
	{
		
	}

}
// PARTE 2
var grafoAlternativo;

