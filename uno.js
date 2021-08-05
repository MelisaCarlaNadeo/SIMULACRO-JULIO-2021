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
				if(preciomaximoHDD < precioIngresado || banderamaximoHDD == true)
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
				if(preciominimoSDD > precioIngresado || banderaminimoSDD == true)
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
/*
----CUANDO HAY UNA CANTIDAD DETERMINADA:
contador = 0; 
while (contador < )
{
	contador++;
}


CUANDO SE PUEDE INGRESAR HASTA QUE EL USUARIO QUIERA:
seguir = true;
while(seguir == true)
{
  	seguir = confirm("Quiere ingresar otro ?");
} 


----CUANDO SE INGRESAN LETRAS O PALABRAS: 
	= prompt("Ingrese :");
	while ( != "" &&  != "" &&  != "")
	{
		= prompt("Error... Reingrese : ");
	}

CUANDO SE INGRESAN NÚMEROS:
	= prompt("Ingrese :");
	= parseFloat();
	while (isNaN() ||  <  || precioIngresado > )
	{
		= prompt("Error... Reingrese : ");
		= parseFloat();
	}

	= prompt("Ingrese :");
	= parseInt();
	while (isNaN() ||  <  || precioIngresado > )
	{
		= prompt("Error... Reingrese : ");
		= parseInt();
	}


---CUANDO SE USA SWITCH PARA VARIOS CASOS:
		switch()
		{
			case "":  
			{

			}
			break;

			case"": 
			{

			}
			break;

			default:
			break;
		}


---BANDERAS:
banderamaximo = true;

	if(maximo <  || banderamaximo == true)
	{
		banderamaximo = false;
	} 

banderaminimo = true;

	if(minimo >  || banderaminimo == true)
	{
		banderaminimo = false;
	}


PARA MOSTRAR CANTIDADES TOTALES: (DENTRO DEL SWITCH)
contador... = 0;
contador = contador + ;


----OTROS PEDIDOS:
PARA MOSTRAR SUMAR LA CANTIDAD INGRESADA Y CALCULAR EL PRECIO TOTAL DEL TIPO INGRESADO: (DENTRO DEL SWITCH)
 	
 	bolsas = bolsas + cantidaddebolsas; // contador inicializar
   precio = precioporbolsa * bolsas;  
   total = total + precio; //acumulador suma inicializar 

PARA BUSCAR MAYOR CANTIDAD DEL TOTAL DE UN PRODUCTO INGRESADO: (FUERA DEL WHILE) 
	if(bolsas > bolsas &&  bolsas > bolsas)
	  {
	    mayorcantidadbolsas = "";
	  }
	  else 
	  {
	    if (bolsas > bolsas &&  bolsas > bolsas)
	    {
	      mayorcantidadbolsas = "";
	    }
	    else
	    {
	      mayorcantidadbolsas = "";
	    }
	  }

PARA BUSCAR COMPRA MÁS BARATA: (FUERA DEL WHILE)
if(total < total &&  total < total)
  {
    compramasbarata = "";
  }
  else 
  {
    if (total < total &&  total < total)
    {
      compramasbarata = "";
    }
    else
    {
      compramasbarata = "";
    }
  }

PARA CALCULAR TOTAL DE CANTIDADES Y EL PRECIO TOTAL BRUTO (FUERA DEL WHILE)
bolsasTotal = bolsas + bolsas + bolsas;
precioTotal = precio + precio + precio; 

PARA CALCULAR DESCUENTOS (FUERA DEL WHILE)
	if(bolsasTotal > )
	{
	   descuento = ;
	}
	if(bolsasTotal > )
	{
	   descuento = ;
	}
	else 
	{
	   descuento = 0;
	}
   precioDescuento = precioTotal - (precioTotal * descuento/100); 

PARA PROMEDIOS (EJERCICIO TRES DEL SIMULACRO)

  
----PARA MOSTRAR LOS DATOS OBTENIDOS:
document.write(" " +  + "<br>");

PARA MOSTRAR CUANDO NO SE INGRESA UN TIPO DE PRODUCTO O DATOS  Y SE CALCULARON MÁXIMOS O MÍNIMOS :
	preciominimo = 0; SE INICIALIZA
	preciomaximo = 0; SE INICIALIZA

	if (minimo != 0)
	{
		document.write(" " +  + "<br>");
	}
	else
	{
		document.write("No se ingresaron .")
	}
	

	if (maximo != 0)
	{
		document.write(" " +  + " " +  + "<br>");
	}
	else
	{
		document.write("No se ingresaron .")
	}

PARA MOSTRAR EL PRECIO CON  Y SIN DESCUENTO:
	precioDescuento = 0; HAY QUE INICIALIZARLO

	document.write("El importe total a pagar sin descuento es $ " + precioTotal + "<br>");
 	if(precioDescuento > 0)
   {
     document.write("El importe total a pagar con descuento es $ " + precioDescuento + "<br>");
   }