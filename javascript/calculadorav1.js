function ObtenerDato1()
{
	/* Realiza operaciones aritmetivcas con elementos del documento HTML */

var miResultado;
var miDato;

miDato = document.getElementById('Dato1');
miResultado = document.getElementById('Resultado');
miResultado.innerHTML =
	"El valor del primer dato es " +miDato.value;	

miDato = document.getElementById('Dato2');
miResultado = document.getElementById('Resultado2');
miResultado.innerHTML =
	"El valor del segundo dato es " +miDato.value;	 	
}
