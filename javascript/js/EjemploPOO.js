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

	Cambiar(nuevoN,nuevoT)
	{
<<<<<<< HEAD
		this.nombre = nuevoN;
		this.telefono = nuevoT;

=======
		this.telefono = nuevoT;
	}

	CambiarNombre(nuevoN)
	{
		this.nombre = nuevoN;
>>>>>>> 37a36bc37f024d4dc5ac216a785c4dc34d5411f9
	}
}

// Objetos Globales
var c1; //Objeto de clase Contacto

function CrearContacto()
{
<<<<<<< HEAD
	var c1 = new Contacto("Pepe", 1111),
		c2 = new Contacto("Ana", 9374),
		c3 = new Contacto("Pepe", 6578);
		
	c1.Escribir();
	c2.Escribir();
	c3.Escribir();
}

function EditarContacto();
{
	var n,t;

		n = document.getElementById('nuevoN');
		t = document.getElementById('nuevoT');

		c1.Cambiar(n,t);

}

function AñadirContacto(){
    var n,t;

         n=document.getElementById('nuevoN');
         t=document.getElementById('nuevoT');

         var c2 = new Contacto(n,t);

         c1.Escribir();
         c2.Escribir();
}
=======
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

	

>>>>>>> 37a36bc37f024d4dc5ac216a785c4dc34d5411f9
//Sacar 3 contactos y que pueda modificarlo desde la web.