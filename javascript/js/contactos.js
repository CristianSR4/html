class Contacto
{
	constructor(Nombre, Telefono, Direccion)
	{
		this.nombre = Nombre;
		this.telefono = Telefono;
		this.direccion = Direccion;
	}

	Escribir()
	{
		var resultado;

		resultado = document.getElementById('Resultado');
		resultado.innerHTML +=
		"Nombre: " + this.nombre + "<br>" +
		"Telefono: " + this.telefono + "<br>" +
		"Direccion: " + this.direccion + "<br>";
	}

	Cambiar(NuevoNombre, NuevoTelefono, NuevaDireccion)
	{
		this.nombre = NuevoNombre;
		this.telefono = NuevoTelefono;
		this.direccion = NuevaDireccion;
	}
}

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