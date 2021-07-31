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
	var preciominimoSDD;
	var banderaminimoSDD;
	var cantidadminimoSDD;
	var marcaminimoSDD; 
	var preciomaximoHDD;
	var banderamaximoHDD;
	var capacidadmaximaHDD;
	var cantidadmaximaHDD; 
	var contadorHDD; 
	
	
	contador = 0;
	banderaminimoSDD = true;
	banderamaximoHDD = true;//
	contadorHDD = 0;
	preciominimoSDD = 0;
	preciomaximoHDD = 0;

		
	while (contador < 5)
	{
		productoIngresado = prompt("Ingrese el producto deseado : HDD/SDD/SSDM2");
		while (productoIngresado != "HDD" && productoIngresado != "SDD" && productoIngresado != "SSDM2")
		{
			productoIngresado = prompt("Error... Reingrese  el producto deseado : HDD/SDD/SSDM2");
		}

		precioIngresado = prompt("Ingrese el precio del producto:");
		precioIngresado = parseFloat(precioIngresado);
		while (isNaN(precioIngresado) || precioIngresado < 5000 || precioIngresado > 18000)
		{
			precioIngresado = prompt("Error... Reingrese el precio del producto: ");
			precioIngresado = parsefloat(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese la cantidad del producto:");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 50)
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

		switch(productoIngresado)
		{
			case "HDD": //Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
			{
				if(preciomaximoHDD > precioIngresado || banderamaximoHDD == true)
				{
					preciomaximoHDD = precioIngresado;
					capacidadmaximaHDD = capacidadIngresada;
					cantidadmaximaHDD = cantidadIngresada;
					banderamaximoHDD = false;
				} //c) Cuántas unidades de HDD hay en total.

				contadorHDD = contadorHDD + cantidadIngresada;
			}
			break;

			case"SDD": //a) Del más barato de los SSD, la cantidad de unidades y marca.
			{
				if(preciominimoSDD < precioIngresado || banderaminimoSDD == true)
				{
					preciominimoSDD = precioIngresado;
					cantidadminimoSDD = cantidadIngresada;
					marcaminimoSDD = marcaIngresada;
					banderaminimoSDD = false;
				}
			}
			break;

			default:
			break;
		}

		contador++;
	}

	if (preciominimoSDD != 0)
	{
		document.write("Del más barato de los SSD, la cantidad de unidades es: " + cantidadminimoSDD + "y la marca es: " + marcaminimoSDD + "<br>");
	}
	else
	{
		document.write("No se ingresaron discos del tipo SDD.")
	}
	
	if (preciomaximoHDD != 0)
	{
		document.write("Del más caro de los HDD, la capacidad de almacenamiento es: " + capacidadmaximaHDD + "y la cantidad de unidades es: " + cantidadmaximaHDD + "<br>");
		document.write("La cantidad total de unidades HDD es " + contadorHDD);
	}
	else
	{
		document.write("No se ingresaron discos del tipo HDD.")
	}
	
}
/*Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
c) Cuántas unidades de HDD hay en total.*/
