class Contacto 
{
	//Creacion del constructor
	// -n: Nombre, t: Telefono
	constructor(n,t)
	{
		this.nombre = n;
		this.telefono = t;
	}

	Escribir()
	{
		var resultado;

		resultado = document.getElementById('Resultado');
		resultado.innerHTML +=
			"Nombre: " + this.nombre + "<br>" +
			"Telefono: " + this.telefono + "<br>";
	}

	CambiarTelefono(nuevoT)
	{
		this.Telefono = nuevoT;
	}
}

function CrearContacto()
{
	var c1 = new Contacto("Pepe", 1111),
		c2 = new Contacto("Ana", 9374);
		
	c1.Escribir();
	c2.Escribir();
}

//Sacar 3 contactos y que pueda modificarlo desde la web.