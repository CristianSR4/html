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
		this.telefono = nuevoT;
	}

	CambiarNombre(nuevoN)
	{
		this.nombre = nuevoN;
	}
}

// Objetos Globales
var c1; //Objeto de clase Contacto

function CrearContacto()
{
	c1 = new Contacto("Pepe", 1111);
		
	c1.Escribir();
}

function ModificarContacto()
{
	var valorNombre,
		valorTelefono;

	valorNombre = document.getElementById('nombre').value;
	valorTelefono = document.getElementById('telefono').value;
	c1.CambiarNombre(valorNombre);
	c1.CambiarTelefono(valorTelefono);
	c1.Escribir();
}

	

//Sacar 3 contactos y que pueda modificarlo desde la web.