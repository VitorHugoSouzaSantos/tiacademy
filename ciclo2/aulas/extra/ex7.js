salario = parseFloat(prompt("insira salário base "));
sal_liq = salario + 600 - (salario*0.1);
console.log("Salário liquido a receber: R$"+ sal_liq.toFixed(2));