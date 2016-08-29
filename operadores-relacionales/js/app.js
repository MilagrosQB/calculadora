do {
	var operacion = parseInt(prompt(
		"Escoja la operación que desea: \n" + 
		"1. Suma \n" + 
		"2. Resta \n" + 
		"3. Multiplicación \n" + 
		"4. División \n" + 
		"5. Residuo \n" + 
		"6. Mayor que \n" + 
		"7. Menor que \n" + 
		"8. Igual que \n" + 
		"0. Salir"));

	if (operacion >=1 && operacion <= 8){
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
			case 6:
			if (num1 > num2)
				alert("El mayor es: " + num1);
			else 
				alert("El mayor es: " + num2);
			break;
			case 7:
			if (num1 < num2)
				alert("El menor es: " + num1);
			else
				alert("El mayor es: " + num2);
			case 8:
			if (num1 == num2)
				alert("Los números son iguales");
			else 
				alert("Los números son diferentes");
			break;
			default:
			break;
		}
	}
}  
while (operacion >= 1 && operacion <= 8) 

			