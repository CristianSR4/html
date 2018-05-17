function ObtenerOperando(idOperando){
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}

function RealizarOperacion(tipoOperacion) {

	var valor1,
		valor2,
		valor;

	//1. Obtener valor primer Operando.
	valor1 = ObtenerOperando('Operando1');
	//2. Obtener valor segundo Operando.
	valor2 = ObtenerOperando('Operando2');
	//3. Realizar la operacion con los operandos y según el valor de tipoOperacion.
	if (tipoOperacion == '+')
		valor = valor1 + valor2;
	else if (tipoOperacion == '-')
		valor = valor1 - valor2;
	else if (tipoOperacion == '*')
		valor = valor1 * valor2;
	else if(tipoOperacion == '/')
		valor = valor1 / valor2;
	else valor = 0;
	//4. Guardar resultado.
	document.getElementById('Resultado').innerHTML = valor;

}

