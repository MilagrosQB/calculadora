var operacion = parseInt(prompt(
	"Escoja la operación que desea: \n" + 
	"1. Suma \n" + 
	"2. Resta \n" + 
	"3. Multiplicación \n" + 
	"4. División \n" + 
	"5. Residuo" ));
var num1 = parseInt(prompt("Ingresa tu primer número"));
var num2 = parseInt(prompt("Ingresa tu segundo número"));
	
	switch (operacion){
		case 1:
			var resultado = num1 + num2;
  			alert("El resultado es " + resultado);
			break;
		case 2:
			var resultado = num1 - num2;
  			alert("El resultado es " + resultado);
			break;
		case 3:
			var resultado = num1 * num2;
  			alert("El resultado es " + resultado);
			break;
		case 4:
			var resultado = num1 / num2;
  			alert("El resultado es " + resultado);
			break;
		case 5:
			var resultado = num1 % num2;
  			alert("El resultado es " + resultado);
			break;
		default:
			alert("No es válida la operación");
			break;
	}