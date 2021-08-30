salario = parseFloat(prompt("Insira o salário: "));
bonif = 0;

if (salario <= 500) {
	bonif = salario*0.05;
} else if (salario >= 500.01 && salario <= 1200) {
	bonif = salario * 0.12;
}

aux = 0;

if (salario <= 600) {
	aux = 150;
} else {
	aux = 600;
}

salario = salario + bonif + aux;

console.log("Salário atual: "+ salario.toFixed(2))