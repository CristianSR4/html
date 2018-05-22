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
		this.nombre = nuevoN;
		this.telefono = nuevoT;

	}
}

function CrearContacto()
{
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
//Sacar 3 contactos y que pueda modificarlo desde la web.