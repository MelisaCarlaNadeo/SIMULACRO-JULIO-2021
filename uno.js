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
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
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
	var preciomasbarato;
	var precioSDD;
	var cantidadmasbarato;
	var marcamasbarata;
	var preciomascaro;
	var precioHDD;
	var capacidadmascaro;
	var cantidadmascaro;
	var cantidadHDD;
	var acumuladorHDD;
	
	contador = 0;
	cantidadHDD = 0;
	acumuladorHDD = 0;
	
	while (contador < 5)
	{
		productoIngresado = prompt("Ingrese el producto");
		
		while (productoIngresado != "HDD" && productoIngresado != "SSD" && productoIngresado != "SSDM2")
		{
			productoIngresado = prompt("Error... Reingrese el producto. ");
		}

		precioIngresado = prompt("Ingrese el precio del producto");
		 
		while (isNaN(precioIngresado) || precioIngresado < 5000 || precioIngresado > 18000)
		{
			precioIngresado = prompt("Error... Reingrese el precio del producto. ");
		}

		cantidadIngresada = prompt("Ingrese la cantidad del producto");
		
		while (isNaN(cantidadIngresada) || precioIngresado < 1 || precioIngresado > 50)
		{
			cantidadIngresada = prompt("Error... Reingrese la cantidad del producto. ");
		}

		marcaIngresada = prompt("Ingrese la marca del producto");
		
		while(marcaIngresada != "Seagate" && marcaIngresada != "Western Digital" && marcaIngresada != "Kingston")
		{
			marcaIngresada = prompt("Error... Reingrese la marca del producto. ");
		}

		capacidadIngresada = prompt("Ingrese la capacidad del producto");
		
		while(capacidadIngresada != "250Gb" && capacidadIngresada != "500Gb" && capacidadIngresada != "1Tb" && capacidadIngresada != "2Tb")
		{
			capacidadIngresada = prompt("Error... Reingrese la capacidad del producto. ");
		}

		seguir = confirm("Quiere ingresar otro producto?");

		if(productoIngresado == "SDD")
		{
			 if (preciomasbarato > precioSDD)
	      {
	      	preciomasbarato = precioSDD;
	      	cantidadmasbarato = cantidadIngresada;
	      	marcamasbarata = marcaIngresada;
	      }
		}

		if(productoIngresado == "HDD")
		{
			 if (preciomascaro < precioHDD)
	      {
	      	preciomascaro = precioHDD;
	      	capacidadmascaro = capacidadIngresada;
	      	cantidadmascaro = cantidadIngresada;
	      }

	      cantidadHDD = cantidadHDD + cantidadIngresada;
	      acumuladorHDD ++;
	   } 
		contador++; 
	}

	document.write("Del más barato de los SSD, la cantidad de unidades es: " + cantidadmasbarato + "y la marca es: " + marcamasbarata + "<br>");
	document.write("Del más caro de los HDD, la capacidad de almacenamiento es: " + capacidadmascaro + "y la cantidad de unidades es: " + cantidadmascaro + "<br>");
	document.write("La cantidad total de unidades HDD es " + cantidadHDD);
}
/*a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/
