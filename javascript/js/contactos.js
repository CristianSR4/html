class Contacto
{
	// -n: Nombre, t: Telefono, d: Direccion
	constructor(n, t, d)
	{
		this.nombre = n;
		this.telefono = t;
		this.direccion = d;
	}

	Escribir(elementoHTML)
	{
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML +=
		"Nombre: " + this.nombre + "<br>" +
		"Telefono: " + this.telefono + "<br>" +
		"Direccion: " + this.direccion + "<br>";
	}

	EscribirNombre(elementoHTML)
	{
		var resultado;

		resultado = document.getElementById(elementoHTML);
		resultado.innerHTML +=
		"Nombre: " + this.nombre + "<br>"; 
	}

	CambiarTelefono(NuevoNombre, NuevoTelefono, NuevaDireccion)
	{
		this.telefono = NuevoTelefono;
		
	}
	CambiarDireccion(elementoHTML)
	{
		this.direccion = NuevaDireccion;
	}
}

class ListaContactos
{
	constructor()
	{
		this.nContactos = 0;
		this.lista = new Array(5);
	}

	InsertarContacto(nom, tel, dir)
	{
		var contacto = new Contacto(nom, tel, dir);

		this.lista[this.nContactos] = contacto;
		this.nContactos ++;
	}

	EscribirNombre(elementoHTML)
	{
		// Escribir elementos existentes en la lista.
		//lista. El número de elementos se almacena en this.nContactos
		var resultado = document.getElementById(elementoHTML);
		resultado.innerHTML = "";
		for (var i = 0; i < this.nContactos; i++) 
		{
			this.lista[i].EscribirNombre(elementoHTML);
		}
	}
}

var miLista = new ListaContactos();

function InsertarContactoLista()
{
	var miNombre,
		miTelefono,
		miDireccion;

	miNombre = document.getElementById('Nombre').value;
	miTelefono = document.getElementById('Telefono').value;
	miDireccion = document.getElementById('Direccion').value;

	miLista.InsertarContacto(miNombre,miTelefono,miDireccion);
	miLista.EscribirNombre('ListaContactoNombre');
}

/*
var c = new Array();
	c[0] = new Contacto("Isco", 657483927, "Madrid");
	c[1] = new Contacto("Cristiano", 657489389, "Lisboa");

function MostrarContacto()
{
	var opciones;

	opciones = document.getElementById('Opciones');
	for (var i = 0; 0<c.length; i++ ) {
		c[i].Escribir();
	}
}

function CambiarContacto()
{
	var nombre,
		telefono,
		direccion,
		cambiar;

    nombre=document.getElementById('Nombre').value;
    telefono=document.getElementById('Telefono').value;
    direccion=document.getElementById('Direccion').value;
    cambiar=document.getElementById('Cambiar').value;
    c[cambiar-1].Cambiar(nombre,telefono,direccion);

   	for(var i = 0 ; i<c.length ; i++){
         c[i].Escribir();
    }
             
}

function AñadirContacto()
{
	var nombre,
		telefono,
		direccion;

	nombre = document.getElementById('Nombre').value;
	telefono = document.getElementById('Telefono').value;
	direccion = document.getElementById('Direccion').value;

	c[2] = new Contacto(nombre,telefono,direccion);
              for(var i = 0 ; i<c.length ; i++){
                    c[i].Escribir();
}
}
*/
