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
  var productoIngresado;
  var cantidaddebolsas;
  var precioporbolsa;
  var seguir;
  var bolsasYerba;
  var precioYerba;
  var bolsasAzucar;
  var precioAzucar;
  var bolsasCafe;
  var precioCafe;
  var bolsasTotal;
  var precioTotal;
  var descuento;
  var precioDescuento;
  var mayorcantidadbolsas;
  var productomayorcantidadbolsas;
  var preciomasbarato;
  var productomasbarato;

  seguir = true;
  bolsasYerba = 0;
  precioYerba = 0;
  bolsasAzucar = 0;
  precioAzucar = 0;
  bolsasCafe = 0;
  precioCafe = 0;
  mayorcantidadbolsas = 0;
  preciomasbarato = 0;

  while(seguir == true)
  {
    productoIngresado = prompt("Ingrese el producto alimenticio: ");

    while(productoIngresado != "yerba" && productoIngresado != "azucar" && productoIngresado != "cafe")
    {
      productoIngresado = prompt("Error... Reingrese el producto alimenticio (yerba/azucar/cafe): ");
    }

    cantidaddebolsas = prompt("Ingrese la cantidad de bolsas del producto: ");
    cantidaddebolsas = parseInt(cantidaddebolsas);

    while(isNaN(cantidaddebolsas) || cantidaddebolsas < 1)
    {
     cantidaddebolsas = prompt("Error... Reingrese la cantidad de bolsas: ");
     cantidaddebolsas = parseInt(cantidaddebolsas);
    }

    precioporbolsa = prompt("Ingrese el precio por bolsa: ");
    precioporbolsa = parseFloat (precioporbolsa);

    while(isNaN(precioporbolsa) || precioporbolsa < 1)
    {
      precioporbolsa = prompt("Error... Reingrese el precio por bolsa: ");
      precioporbolsa = parseFloat(precioporbolsa);
    }   
   
    seguir = confirm("Quiere ingresar otro producto?");

    switch(productoIngresado)
    {
      case "yerba":
      bolsasYerba = bolsasYerba + cantidaddebolsas;
      precioYerba = precioporbolsa * bolsasYerba; 

      if(mayorcantidadbolsas < bolsasYerba)
      {
        mayorcantidadbolsas = bolsasYerba;
        productomayorcantidadbolsas = productoIngresado;
      }

      if (preciomasbarato > precioYerba) 
      {
        preciomasbarato = precioYerba;
        productomasbarato = productoIngresado;
      }
      break;

      case "azucar":
      bolsasAzucar = bolsasAzucar + cantidaddebolsas;
      precioAzucar = precioporbolsa * bolsasAzucar;
      
      if(mayorcantidadbolsas < bolsasAzucar)
      {
        mayorcantidadbolsas = bolsasAzucar;
        productomayorcantidadbolsas = productoIngresado;
      }

      if (preciomasbarato > precioAzucar) 
      {
        preciomasbarato = precioAzucar;
        productomasbarato = productoIngresado;
      }
      break;
      
      default:
      bolsasCafe = bolsasCafe + cantidaddebolsas;
      precioCafe = precioporbolsa * bolsasCafe;

      if(mayorcantidadbolsas < bolsasCafe)
      {
        mayorcantidadbolsas = bolsasCafe;
        productomayorcantidadbolsas = productoIngresado;
      }

      if (preciomasbarato > precioCafe)
      {
        preciomasbarato = precioCafe;
        productomasbarato = productoIngresado;
      }
      break;
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
  } 

  precioDescuento = precioTotal - (precioTotal * descuento/100); 

  document.write("El importe total a pagar sin descuento es $ " + precioTotal + "<br>");
  document.write("El importe total a pagar con descuento es $ " + precioDescuento + "<br>");
  document.write("El producto con más cantidad es " + productomayorcantidadbolsas + " con " + mayorcantidadbolsas + " bolsas. " + "<br>");
  document.write("El producto más barato es " + productomasbarato + ". ");
}
