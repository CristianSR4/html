function CambiarTexto()
{
	/* Cambiar el texto de un elemento con id= "Resultado" del documento HTML */

var miParrafo;
var precio = 22.65; /*Tipo de datos: number */

miParrafo = document.getElementById('Resultado');
precio = precio + 10;
miParrafo.innerHTML += 
	"<br>" +
	"El precio es "+precio + "<br>" +
	"El doble del precio es " + (precio*2) + "<br";

	/*Canbiamos tipo de datos de precio */
	precio = 'Muy Caro'; /*Tipo de datos: String */
	miParrafo.innerHTML +=
	"<br>" +
	"Tipo de datos: String" + "<br>" +
	"El precio es "+precio + "<br>" +
	"El doble del precio es " + (precio*2) + "<br";

	/*Canbiamos tipo de datos de precio */
	precio = false; /*Tipo de datos: String */
	miParrafo.innerHTML +=
	"<br>" +
	"Tipo de datos: String" + "<br>" +
	"El precio es "+precio + "<br>" +
	"El doble del precio es " + (precio*2) + "<br";
}