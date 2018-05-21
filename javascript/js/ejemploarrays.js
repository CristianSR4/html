function CrearElemento()
{
	// Creacion de una tabla de 4 elementos: 0,1,2,3
	var miTabla = new Array(4),
		resultado;

	miTabla[0] = "hola";
	miTabla[1] = "hola?";
	miTabla[2] = "eyy";
	miTabla[3] = "holaaaaaaaaaa";


	resultado = document.getElementById('Resultado');
	for (var i = 0; i < miTabla.length; i++)
	{
		resultado.innerHTML += miTabla[i] + " ";
	}


}