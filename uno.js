/* Melisa Carla Nadeo
Ejercicio 1
Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
c) Cuántas unidades de HDD hay en total.
*/


function mostrar()
{
	var contador;
	var productoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var capacidadIngresada;
	var precioFinal;
	var preciominimoSDD;
	var banderaminimoSDD;
	var cantidadminimoSDD;
	var marcaminimoSDD;
	var preciomaximoHDD;
	var banderamaximoHDD;
	var capacidadmaximaHDD;
	var cantidadmaximaHDD; 
	var banderamaximoHDD;
	var contadorHDD; 
	
	
	contador = 0;
	banderaminimoSDD = 0;
	banderamaximoHDD = 0;
	contadorHDD = 0;

		
	while (contador < 5)
	{
		productoIngresado = prompt("Ingrese el producto deseado : HDD/SDD/SSDM2");
		while (productoIngresado != "HDD" && productoIngresado != "SSD" && productoIngresado != "SSDM2")
		{
			productoIngresado = prompt("Error... Reingrese  el producto deseado : HDD/SDD/SSDM2");
		}

		precioIngresado = prompt("Ingrese el precio del producto:");
		precioIngresado = parsefloat(precioIngresado);
		while (isNaN(precioIngresado) || precioIngresado < 5000 || precioIngresado > 18000)
		{
			precioIngresado = prompt("Error... Reingrese el precio del producto: ");
			precioIngresado = parsefloat(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese la cantidad del producto:");
		cantidadIngresada = parseInt(cantidadIngresada)
		while (isNaN(cantidadIngresada) || precioIngresado < 1 || precioIngresado > 50)
		{
			cantidadIngresada = prompt("Error... Reingrese la cantidad del producto:");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese la marca del producto: Seagate/Western Digital/Kingston");
		while(marcaIngresada != "Seagate" && marcaIngresada != "Western Digital" && marcaIngresada != "Kingston")
		{
			marcaIngresada = prompt("Error... Reingrese la marca del producto: Seagate/Western Digital/Kingston");
		}

		capacidadIngresada = prompt("Ingrese la capacidad del producto: 250Gb/500Gb/1Tb/2Tb");
		while(capacidadIngresada != "250Gb" && capacidadIngresada != "500Gb" && capacidadIngresada != "1Tb" && capacidadIngresada != "2Tb")
		{
			capacidadIngresada = prompt("Error... Reingrese la capacidad del producto. ");
		}

		precioFinal = cantidadIngresada * precioIngresado; //ver esto que NO va

		//a) Del más barato de los SSD, la cantidad de unidades y marca.
		if(productoIngresado == "SDD")
		{
			if(precioFinal < preciominimoSDD|| banderaminimoSDD == true)
			{
				preciominimoSDD = precioFinal;
				cantidadminimoSDD = cantidadIngresada;
				marcaminimoSDD = marcaIngresada;
				banderaminimoSDD = false;
			}
		}
		else //b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
		{
			if(productoIngresado == "HDD")
			{
				if(precioFinal > preciomaximoHDD || banderamaximoHDD == true)
				{
					preciomaximoHDD = precioFinal;
					capacidadmaximaHDD = capacidadIngresada;
					cantidadmaximaHDD = cantidadIngresada;
					banderamaximoHDD = false;
				} 
				//c) Cuántas unidades de HDD hay en total.
				contadorHDD = contadorHDD + cantidadIngresada;
			}
		}
		
		contador++;
	}

	document.write("Del más barato de los SSD, la cantidad de unidades es: " + cantidadminimoSDD + "y la marca es: " + marcaminimoSDD + "<br>");
	document.write("Del más caro de los HDD, la capacidad de almacenamiento es: " + capacidadmaximaHDD + "y la cantidad de unidades es: " + cantidadmaximaHDD + "<br>");
	document.write("La cantidad total de unidades HDD es " + contadorHDD);
}
/*Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
c) Cuántas unidades de HDD hay en total.*/
