function ObtenerOperando(idOperando) 
{
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);

}

function ObtenerOp1()
{
	var miOperando1,
		valorOp1;

	miOperando1 = document.getElementById('Operando1');
	valorOp1 = parseInt(miOperando1.value);
	return valorOp1;
}

function ObtenerOp2()
{
	var miOperando2,
		valorOp2;

	miOperando2 = document.getElementById('Operando2');
	valorOp2 = parseInt(miOperando2.value);
	return valorOp2;
}

function Sumar()
{
	var miResultado,
		valorOperando1,
		valorOperando2,
		valor;

	miResultado = document.getElementById('Resultado');
	valorOperando1 = ObtenerOperando('Operando1');
	valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 + valorOperando2;
	miResultado.innerHTML = valor;
}

function Restar()
{
	var miResultado,
		valorOperando1,
		valorOperando1,
		valor;

	miResultado = document.getElementById('Resultado');
	valorOperando1 = ObtenerOperando('Operando1');
	valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 - valorOperando2;
	miResultado.innerHTML = valor;
}

function Multiplicar()
{
	var miResultado,
		valorOperando1,
		valorOperando2,
		valor;

	miResultado = document.getElementById('Resultado');
	valorOperando1 = ObtenerOperando('Operando1');
	valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 * valorOperando2;
	miResultado.innerHTML = valor;
}

function Dividir()
{
	var miResultado,
		valorOperando1,
		valorOperando2,
		valor;

	miResultado = document.getElementById('Resultado');
	valorOperando1 = ObtenerOperando('Operando1');
	valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 / valorOperando2;
	miResultado.innerHTML = valor;
}