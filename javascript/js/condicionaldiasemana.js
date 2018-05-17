function CalcularDia() 
{
	var campoResultado,
	    fechaActual,
	    diaActual;

	campoResultado = document.getElementById('Resultado');
	fechaActual = new Date();

	//La función getDay devuelve el dia de la semana
	//de la fecha:
	//	0: Domingo  --> 1
	//	1: Lunes    --> 2
	//	6: Sabado
	diaActual = fechaActual.getDay();
	switch(diaActual){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			campoResultado.innerHTML = "Entre semana";
			break;
		case 6:
			campoResultado.innerHTML = "Fin de semana";
			break;
		default:
			campoResultado.innerHTML = "Dia no válido";
			break;
	}

}