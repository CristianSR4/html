function EscribirNumeros(){

	var campoResultado,
		numero,
		contador;
		

	campoResultado = document.getElementById('Resultado');
	numero = parseInt(document.getElementById('Numero').value);

	contador = 1;

	while (contador<=numero) {
		campoResultado.innerHTML += " " + contador++;
	}

}

function EscribirNumeros2(){

	var campoResultado,
		numero,
		contador;
		

	campoResultado = document.getElementById('Resultado1');
	numero = parseInt(document.getElementById('Numero1').value);

	contador = 1;

	do {
	  campoResultado.innerHTML += " " + contador++;
	}
	while(contador <= numero);
}