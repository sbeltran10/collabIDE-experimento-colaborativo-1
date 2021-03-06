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

	var verticeNuevo = new Array();	
	grafo.push(verticeNuevo);
}

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

function agregarArco(verticeOrigen, verticeDestino, pesoP)
{
	var verticeOri = grafo[verticeOrigen];	
	var yaExiste = false;
	for(i = 0; i < verticeOri.lenght; i++)
	{
		if(verticeOri[i].verticeAdyacente == verticeDestino)
		{
			verticeOri[i].peso = pesoP;
			yaExiste = true;
			break;
		}
	}
	if(!yaExiste)
	{
		var arcoNuevo = { verticeAdyacente: verticeDestino, peso: pesoP };
		verticeOri.push(arcoNuevo);
	}
	
	
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

function caminoBFS(verticeOrigen){

	var CaminoVertice = {};
	
	var verticeDestinoR;
	var verticeIntermedioR = new Array();
	var pesoR = 0;
	var longitudR = 0;

	var vertOrigen = grafo[verticeOrigen];
	var queue = new Array();

	var i;
	for ( i = 0; i < vertOrigen.lenght; i++) {
		queue.push(vertOrigen[i]);
	}

	var ultimoV;
	
	while(queue.lenght != 0)
	{
		ultimoV = queue.shift();

		var j;
		for(j =0, j < ultimoV.lenght; j++)
		{
			var otroVertice = ultimoV[j];

			verticeDestinoR = otroVertice.verticeAdyacente;
			verticeIntermedioR.push(otroVertice.verticeAdyacente);
			pesoR = pesoR + otroVertice.peso;
			longitudR ++;

			queue.push(otroVertice);
		}
	}

	CaminoVertice.verticeDestino = verticeDestinoR;
	CaminoVertice.verticeIntermedio = verticeIntermedioR;
	CaminoVertice.peso = pesoR;
	CaminoVertice.longitud = longitudR;

}

function altCaminoMasCortoDijkstra(verticeOrigen, verticeDestino){

	var distTo = new Array();
	var i;
	var gLenght = grafo.lenght;
	for(i = 0; i < gLenght; i++)
	{
		distTo.push(Infinity);
	}
	distTo[verticeOrigen] = 0;

	
}

function caminoDFS(verticeOrigen)
{
	var marcados;
	var arcos;
	

}

function dfs(v, marcados, arcos)
{
	marcados[v] = true;
	for(i = 0; i < grafo[v].lenght; i++)
	{
		var actual = (grafo[v])[i].verticeAdyacente;
		if(!marcados[actual])
		{
			arcos[actual] = v;
			dfs(w, marcados, arcos);
		}
	}

}
// PARTE 2
var grafoAlternativo;

