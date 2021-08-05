/* Melisa Carla Nadeo
Ejercicio 2
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)  El importe total a pagar bruto, sin descuento.
b)  El importe total a pagar con descuento (solo si corresponde)
c)  Informar el tipo con más cantidad de bolsas.
d)  El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var seguir;
  var productoIngresado;
  var cantidaddebolsas;
  var precioporbolsa;
  var bolsasYerba;
  var precioYerba;
  var totalYerba;
  var bolsasAzucar;
  var precioAzucar;
  var totalAzucar;
  var bolsasCafe;
  var precioCafe;
  var totalCafe;
  var bolsasTotal;
  var precioTotal;
  var descuento;
  var precioDescuento;
  var mayorcantidadbolsas;
  var compramasbarata;
 
  seguir = true;
  bolsasYerba = 0;
  totalYerba = 0;
  bolsasAzucar = 0;
  totalAzucar = 0;
  bolsasCafe = 0;
  totalCafe = 0;
  precioDescuento = 0;


  while(seguir == true)
  {
    productoIngresado = prompt("Ingrese el producto alimenticio: yerba/azucar/cafe");
    while(productoIngresado != "yerba" && productoIngresado != "azucar" && productoIngresado != "cafe")
    {
      productoIngresado = prompt("Error... Reingrese el producto alimenticio yerba/azucar/cafe ");
    }

    cantidaddebolsas = prompt("Ingrese la cantidad de bolsas del producto:");
    cantidaddebolsas = parseInt(cantidaddebolsas);

    while(isNaN(cantidaddebolsas) || cantidaddebolsas < 1)
    {
     cantidaddebolsas = prompt("Error... Reingrese la cantidad de bolsas:");
     cantidaddebolsas = parseInt(cantidaddebolsas);
    }

    precioporbolsa = prompt("Ingrese el precio por bolsa:");
    precioporbolsa = parseFloat (precioporbolsa);

    while(isNaN(precioporbolsa) || precioporbolsa < 1)
    {
      precioporbolsa = prompt("Error... Reingrese el precio por bolsa:");
      precioporbolsa = parseFloat(precioporbolsa);
    }   
   
    
    switch(productoIngresado)
    {
      case "yerba":
      bolsasYerba = bolsasYerba + cantidaddebolsas; // contador inicializar
      precioYerba = precioporbolsa * bolsasYerba;  
      totalYerba = totalYerba + precioYerba; //acumulador suma inicializar  
      break;

      case "azucar":
      bolsasAzucar = bolsasAzucar + cantidaddebolsas;//contador
      precioAzucar = precioporbolsa * bolsasAzucar;
      totalAzucar = totalAzucar + precioAzucar; acumulador
      break;
      
      default:
      bolsasCafe = bolsasCafe + cantidaddebolsas;
      precioCafe = precioporbolsa * bolsasCafe;
      totalCafe = totalCafe + precioCafe;
      break;

    }
    
    seguir = confirm("Quiere ingresar otro producto?");
  } 


  if(bolsasYerba > bolsasAzucar &&  bolsasYerba > bolsasCafe)
  {
    mayorcantidadbolsas = "Yerba";
  }
  else 
  {
    if (bolsasAzucar > bolsasYerba &&  bolsasAzucar > bolsasCafe)
    {
      mayorcantidadbolsas = "Azucar";
    }
    else
    {
      mayorcantidadbolsas = "Cafe";
    }
  }

  if(totalYerba < totalAzucar &&  totalYerba < totalCafe)
  {
    compramasbarata = "Yerba";
  }
  else 
  {
    if (totalAzucar < totalYerba &&  totalAzucar < totalCafe)
    {
      compramasbarata = "Azucar";
    }
    else
    {
      compramasbarata = "Cafe";
    }
  }

  bolsasTotal = bolsasYerba + bolsasAzucar + bolsasCafe;
  precioTotal = precioYerba + precioAzucar + precioCafe; 

  if(bolsasTotal > 4)
  {
    descuento = 10;
  }
  if(bolsasTotal > 9)
  {
    descuento = 15;
  }
  else 
  {
      descuento = 0;
  }

  precioDescuento = precioTotal - (precioTotal * descuento/100); 

  document.write("El importe total a pagar sin descuento es $ " + precioTotal + "<br>");
  if(precioDescuento > 0)
  {
    document.write("El importe total a pagar con descuento es $ " + precioDescuento + "<br>");
  }
  document.write("El producto con más cantidad es " + mayorcantidadbolsas + "<br>");
  document.write("El producto más barato es " + compramasbarata + ". ");
}
/* Melisa Carla Nadeo
Ejercicio 1
Se ingresan 10 notas, nombre del alumno y materia (Matematica, Lectura o Programación).
Calcular y mostrar:
   a. Minima nota con el nombre del alumno
   b. La materia con maxima nota.
   c. Promedio de notas para lectura.
   d. Porcentaje de alumnos que rindio cada materia.

function mostrar()
{
  
   var contador;
   var notaIngresada;
   var nombreIngresado;
   var materiaIngresada;
   var banderaminimoNota;
   var minimaNota;
   var minimanotaAlumno;
   var banderamaximaNota;
   var maximaNota;
   var maximanotaMateria;
   var sumanotasLectura;
   var contadorLectura;
   var promedionotaLectura;
   var sumaalumnosMatematica;
   var sumaalumnosLectura;
   var sumaalumnosProgramacion;
   var totalalumnosMaterias;
   var porcentajealumnosMatematica;
   var porcentajealumnosLectura;
   var porcentajealumnosProgramacion;

   contador = 0; 
   banderaminimoNota = true;
   banderamaximaNota = true;
   sumanotasLectura = 0;
   contadorLectura = 0;
   sumaalumnosMatematica = 0;
   sumaalumnosLectura = 0;
   sumaalumnosProgramacion = 0;

   while (contador < 10)
   {
      notaIngresada = prompt("Ingrese una nota:");
      notaIngresada= parseInt(notaIngresada);
      while (isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10)
      {
         notaIngresada= prompt("Error... Reingrese la nota: ");
         notaIngresada= parseInt(notaIngresada);
      }

      nombreIngresado = prompt("Ingrese el nombre del alumno/a:");

      materiaIngresada = prompt("Ingrese la materia:");
      while ( materiaIngresada!= "matematica" &&  materiaIngresada!= "lectura" && materiaIngresada!= "programacion")
      {
         materiaIngresada = prompt("Error... Reingrese la materia: matematica/lectura/programacion");
      }

      //a. Minima nota con el nombre del alumno
      if(minimaNota > notaIngresada || banderaminimoNota == true)
      {
         minimaNota = notaIngresada;
         minimanotaAlumno = nombreIngresado;
         banderaminimoNota = false;
      }

      //b.  La materia con maxima nota.
      if(maximaNota < notaIngresada || banderamaximaNota == true)
      {
         maximaNota = notaIngresada;
         maximanotaMateria = materiaIngresada;
         banderamaximaNota= false;
      } 

      switch(materiaIngresada)
      {
         case "matematica":  
         {
            sumaalumnosMatematica = sumaalumnosMatematica + nombreIngresado;
         }
         break;

         case"lectura": 
         {
            sumanotasLectura = sumanotasLectura + notaIngresada;
            contadorLectura ++;
            sumaalumnosLectura = sumaalumnosLectura + nombreIngresado;
         }
         break;

         default: //programacion
         {
            sumaalumnosProgramacion = sumaalumnosProgramacion + nombreIngresado;
         }
         break;
      }

      contador++;
   }

   //c.  Promedio de notas para lectura.
   promedionotaLectura = sumanotasLectura / contadorLectura;

   //d. Porcentaje de alumnos que rindio cada materia.
   totalalumnosMaterias = sumaalumnosMatematica + sumaalumnosLectura + sumaalumnosProgramacion;
   porcentajealumnosMatematica = (sumaalumnosMatematica * 100) / totalalumnosMaterias;
   porcentajealumnosLectura = (sumaalumnosLectura * 100) / totalalumnosMaterias;
   porcentajealumnosProgramacion = (sumaalumnosProgramacion * 100) / totalalumnosMaterias;

   document.write("La mínima nota es: " + minimaNota + " del alumno/a: " + minimanotaAlumno + "<br>");
   document.write("La materia con máxima nota es: " + maximanotaMateria + "<br>");
   if (contadorLectura != 0)
   {
      document.write("El promedio de notas de lectura es: " + promedionotaLectura + "<br>");
   }
   else
   {
      document.write("No se ingresaron notas de lectura.")
   }
   document.write("El porcentaje de alumnos que rindió matemática es: " + porcentajealumnosMatematica + ", el porcentaje que rindió lectura es:" + porcentajealumnosLectura + " y el porcentaje que rindió programación es: " + porcentajealumnosProgramacion + "<br>");
}


/*Melisa Carla Nadeo División H
Ejercicio 2.  
La empresa de cosmetica AVON necesita establecer un sistema de premios para las sucursales de  
distintas zonas de Bs As. Para ello, en base a distintas planillas que se cargan (pueden ser varias
planillas para la misma sucursal), se ingresan los siguientes datos:
  • Sucursal (SUR, CABA, COSTA)
  • Importe de la venta (número positivo NO menor que 5000)

  Al terminar de cargar las planillas, se debe calcular el total de ventas de cada sucursal. 
Si la sucursal logro superar los $2500000 en ventas tendra un premio del 10% que se repartira entre
los empleados de la sucursal, en caso contrario no tendran premio.

Mostrar:
a.  Para cada sucursal, el importe total de las ventas, cantidad de ventas y premio (si corresponde)
b.  La sucursal que obtuvo el mayor premio.  

function mostrar()
{
  var seguir;
  var sucursalIngresada;
  var importeIngresado;
  var ventasSur;
  var ventasCABA;
  var ventasCOSTA;
  var PremioSur;
  var PremioCABA;
  var PremioCOSTA;
  var contadorventasSur;
  var contadorventasCABA;
  var contadorventasCOSTA;
  var ventasSur;
  var ventasCABA;
  var ventasCOSTA;
  var mayorPremio;

  seguir = true;
  contadorventasSur = 0;
  contadorventasCABA  = 0;
  contadorventasCOSTA = 0;
  ventasSur = 0;
  ventasCABA = 0;
  ventasCOSTA = 0;


  while(seguir == true)
  {
    sucursalIngresada = prompt("Ingrese la sucursal: ");
    while(sucursalIngresada != "SUR" && sucursalIngresada != "CABA" && sucursalIngresada != "COSTA")
    {
      sucursalIngresada = prompt("Error... Reingrese la sucursal: SUR, CABA, COSTA");
    }

    importeIngresado = prompt("Ingrese el importe de la venta: ");
    importeIngresado = parseInt(importeIngresado);
    while(isNaN(importeIngresado) || importeIngresado < 1 || importeIngresado > 5000)
    {
      importeIngresado = prompt("Error... Reingrese el importe de la venta (entre $1 y $5000):");
      importeIngresado = parseInt (importeIngresado);
    }

    switch(sucursalIngresada)
    {
      case "SUR":  
      {
        ventasSur = ventasSur + importeIngresado;  
        contadorventasSur ++;
      }
      break;

      case"CABA": 
      {
        ventasCABA = ventasCABA + importeIngresado; 
        contadorventasCABA ++; 
      }
      break;

      default: //COSTA
      {
        ventasCOSTA = ventasCOSTA + importeIngresado;  
        contadorventasCOSTA ++;
      }
      break;
    }

    seguir = confirm("Quiere continuar?");
  }

  //Si la sucursal logro superar los $2500000 en ventas tendra un premio del 10% que se repartira entre
  //los empleados de la sucursal, en caso contrario no tendran premio.
  PremioSur = ventasSur * 0.10;
  PremioCABA = ventasCABA * 0.10;
  PremioCOSTA = ventasCOSTA * 0.10;

  if(ventasSur > 2500000)
  {
    document.write("En la sucursal SUR, le importe total de las ventas es: " + ventasSur + " la cantidad de ventas es: " + contadorventasSur + " y el premio es $" + PremioSur + "<br>");
  }
  else
  {
    document.write("En la sucursal SUR, le importe total de las ventas es: " + ventasSur + " la cantidad de ventas es: " + contadorventasSur + "<br>");
  }
  
  if(ventasCABA > 2500000)
  {
    document.write("En la sucursal CABA, le importe total de las ventas es: " + ventasCABA + " la cantidad de ventas es: " + contadorventasCABA + " y el premio es $" + PremioCABA + "<br>");
  }
  else
  {
    document.write("En la sucursal CABA, le importe total de las ventas es: " + ventasCABA + " la cantidad de ventas es: " + contadorventasCABA + "<br>");
  }
  
  if(ventasCOSTA > 2500000)
  {
    document.write("En la sucursal COSTA, le importe total de las ventas es: " + ventasCOSTA + " la cantidad de ventas es: " + contadorventasCOSTA + " y el premio es $" + PremioCOSTA + "<br>");
  }
  else
  {
    document.write("En la sucursal COSTA, le importe total de las ventas es: " + ventasCOSTA + " la cantidad de ventas es: " + contadorventasCOSTA + "<br>");
  }

  //La sucursal que obtuvo el mayor premio. 
  if(PremioSur > PremioCABA && PremioSur > PremioCOSTA)
  {
    mayorPremio = "SUR";
  }
  else 
  {
    if (PremioCABA > PremioSur && PremioCABA > PremioCOSTA)
    {
      mayorPremio = "CABA";
    }
    else
    {
      mayorPremio = "COSTA";
    }
  }

  document.write("La sucursal que obtuvo el mayor premio fue: " + mayorPremio);
}*/

/*/* Melisa Carla Nadeo División H
Ejercicio 3 
De los 15 empleados de una PYME se ingresan los siguientes datos:
• Nombre y apellido
• Genero del empleado ("Femenino", "Masculino", "No Binario")
• Cantidad de hijos (no puede ser un numero negativo)

El programa deberá mostrar:
  a.  El nombre del empleado Masculino con mas cantidad de hijos.
  b.  Nombre y apellido del primer empleado No Binario que no tiene hijos.

Sabiendo que: 
   *Si no tiene hijos no le corresponde asignación familiar 
   *Si tiene un hijo le corresponde 3000
   *Si tiene dos hijos le corresponde 5000 por sus dos hijos
   *Y si tiene más de dos hijos le corresponde 8000

  c.  Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones
  d.  En caso de que el total de asignaciones supere los 500000, el Gobierno Nacional asistirá a la PYME 
subvencionando el 10% de las asignaciones. Mostrar el valor de la subvención si corresponde.

function mostrar()
{
  var contador;
  var nombreIngresado;
  var apellidoIngresado;
  var generoIngresado;
  var cantidadhijosIngresado;
  var maximocantidadHijos;
  var banderamaximocantidadHijos;
  var nombremaximoHijos;
  var primerempleadoNBsinhijos;
  var NombreprimerempleadoNBsinhijos;
  var ApellidoprimerempleadoNBsinhijos;

  contador = 0; 
  banderamaximocantidadHijos = true;
  primerempleadoNBsinhijos == true;

  while (contador < 15)
  {
    nombreIngresado = prompt("Ingrese el nombre del empleado/a:");
    apellidoIngresado = prompt("Ingrese el apellido del empleado/a:");
    
    generoIngresado = prompt("Ingrese el género del empleado/a:");
    while (generoIngresado!= "Femenino" && generoIngresado!= "Masculino" && generoIngresado!= "No Binario")
    {
      generoIngresado= prompt("Error... Reingrese el género del empleado/a (Femenino/Masculino/No Binario):");
    }

    cantidadhijosIngresado= prompt("Ingrese la cantidad de hijos/as del empleado/a:");
    cantidadhijosIngresado= parseInt(cantidadhijosIngresado);
    while (isNaN(cantidadhijosIngresado) || cantidadhijosIngresado < 0)
    {
      cantidadhijosIngresado= prompt("Error... Reingrese la cantidad de hijos/as del empleado/a: ");
      cantidadhijosIngresado= parseInt(cantidadhijosIngresado);
    }

    switch(generoIngresado)
    {
      case "Femenino":  
      {

      }
      break;

      case"Masculino": 
      {
        //El nombre del empleado Masculino con mas cantidad de hijos.
        if(maximocantidadHijos < cantidadhijosIngresado || banderamaximocantidadHijos == true)
        {
          maximocantidadHijos = cantidadhijosIngresado;
          nombremaximoHijos = nombreIngresado;
          banderamaximocantidadHijos = false;
        } 
      }
      break;
      
      default: //No Binario
      {
        //b.  Nombre y apellido del primer empleado No Binario que no tiene hijos.
        if(cantidadhijosIngresado == 0 && primerempleadoNBsinhijos == true)
        {
          NombreprimerempleadoNBsinhijos = nombreIngresado;
          ApellidoprimerempleadoNBsinhijos = apellidoIngresado;
          primerempleadoNBsinhijos = false;
        } 
      }
      break;
    }

    contador++;
  }

  document.write("El nombre del empleado masculino con más cantidad de hijos/as es: " + nombremaximoHijos + "<br>");
  document.write("El nombre y apellido del empleado No Binario que no tiene hijos es: " + NombreprimerempleadoNBsinhijos + ApellidoprimerempleadoNBsinhijos);
}*/