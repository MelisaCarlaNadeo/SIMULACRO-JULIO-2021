/* Melisa Carla Nadeo
Ejercicio 3
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)

*/

function mostrar()
{
	var seguir;
	var nombreIngresado;
	var edadIngresada;
	var generoIngresado;
	var vacunaIngresada;
	var temperaturacorporalIngresada;
	var mayorTemperatura;
	var banderamaximaTemperatura;
	var nombremayortemperatura;
	var contadormujeresSputnikV;
 	var contadornbAztra;
 	var contadornbOtra;
 	var totalpersonasNB;
 	var contadortemperaturamayor38;
 	var edadhombressinTemperatura;
	var contadorhombressinTemperatura;
	var promediohombressinfiebre;


 	seguir = true;
 	banderamaximaTemperatura = true;
 	contadormujeresSputnikV = 0;
 	contadornbAztra = 0;
 	contadornbOtra = 0;
 	contadortemperaturamayor38 = 0;
 	edadhombressinTemperatura = 0;
	contadorhombressinTemperatura = 0;
 	
 	while(seguir == true)
  	{
    	nombreIngresado = prompt("Ingrese el nombre: ");
    	edadIngresada = prompt("Ingrese la edad: ");
    	edadIngresada = parseInt(edadIngresada);

    	while(isNaN(edadIngresada) || edadIngresada < 1)
	    {
	    edadIngresada = prompt("Error... Reingrese la edad: ");
	    edadIngresada = parseInt(edadIngresada);
		}

	    generoIngresado = prompt("Ingrese el genero (F/M/NB): ");

	    while(generoIngresado != "F" && generoIngresado != "M" && generoIngresado != "NB")
	    {
	      generoIngresado = prompt("Error... Reingrese el genero (F/M/NB): ");
	    }

	    vacunaIngresada = prompt("Ingrese la vacuna: ");

	    while(vacunaIngresada != "SputnikV" && vacunaIngresada != "AstraZeneca" && vacunaIngresada != "Otra")
	    {
	      vacunaIngresada = prompt("Error... Reingrese la vacuna(SputnikV/AstraZeneca/Otra): ");
	    }

	    temperaturacorporalIngresada = prompt("Ingrese la temperatura corporal durante la primer noche: ");
	    temperaturacorporalIngresada = parseInt(temperaturacorporalIngresada);
		while(isNaN(temperaturacorporalIngresada) || temperaturacorporalIngresada < 36 || temperaturacorporalIngresada > 40)
	    {
	     temperaturacorporalIngresada = prompt("Error... Reingrese la temperatura corporal durante la primer noche: ");
	     temperaturacorporalIngresada = parseInt(temperaturacorporalIngresada);
	    }
	   
		//a) El nombre y vacuna de la persona con mayor temperatura.

		if(mayorTemperatura < temperaturacorporalIngresada || banderamaximaTemperatura == true)
		{
			mayorTemperatura = temperaturacorporalIngresada;
			nombremayortemperatura = nombreIngresado;
			banderamaximaTemperatura = false;
    	}

    	switch(vacunaIngresada)
    	{
    		case "SputnikV": 
    			if(generoIngresado == "F") //Cuántas personas de género Femenino recibieron la vacuna SputnikV.
    			{
    				contadormujeresSputnikV = contadormujeresSputnikV + 1;
    			}
    			
    			if(generoIngresado == "M" && temperaturacorporalIngresada <38)  //e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
    			{
    				edadhombressinTemperatura = edadhombressinTemperatura + 1;
    				contadorhombressinTemperatura ++;
    			}

    		break;

    		case "AstraZeneca":
    			if(generoIngresado == "NB")
    			{
    				contadornbAztra ++; 
    			}

    			if(temperaturacorporalIngresada > 38) //d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
    			{
    				contadortemperaturamayor38 ++; 
    			}
    			
    		break;

    		default:
    		
    			if(generoIngresado == "NB")
    			{
    				contadornbOtra ++; 
    			}
    		break;
    	}

    	seguir = confirm("Quiere ingresar otro nombre?");

  	} 	

  	totalpersonasNB = contadornbAztra + contadornbOtra; //La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
  	promediohombressinfiebre = edadhombressinTemperatura / contadorhombressinTemperatura;

  	document.write("El nombre ingresado con mayor temperatura corporal es:  " + nombremayortemperatura + "<br>");
  	document.write("La cantidad personas de género femenino que recibieron la vacuna SputnikV es:  " + contadormujeresSputnikV + "<br>");
  	document.write("La cantidad de personas de género no binario que recibieron AstraZeneca u Otra es:  " + totalpersonasNB + "<br>");
  	document.write("La cantidad de personas que se aplicaron la vacuna AstraZeneca y presentaron una temperatura mayor a 38° es: " + contadortemperaturamayor38 + "<br>");
  	if (contadorhombressinTemperatura < 0)
  	{
  		document.write("El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y que no presentaron fiebre es :  " + promediohombressinfiebre);
  	}
  	else
  	{
  		document.write("No se ingresaron hombres que se aplicaron la vacuna SputnikV y que no presentaron fiebre.");
  	}
}

/*Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/