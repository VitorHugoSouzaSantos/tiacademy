var nome = prompt("Digite seu nome: ");

var numero = parseInt(prompt("Olá "+""+ nome +". Digite um número:"));

var num = numero
var comparacao = (numero==numero);
var soma = (num + numero);
var sub = (num - numero);
var divisao = (numero % numero);
var quad = (numero * numero);

document.write("<br>Desafio Aula 2<br>")
if (Number.isInteger(numero)){
	alert("1. O número digitado é um inteiro!")
	document.write("<br>1. O número digitado é um inteiro!<br>")
} else {
	alert("1. O número digitado não é um inteiro!")
	document.write("<br>1. O número digitado não é um inteiro!<br>")
}

if(!typeof(numero)){
	alert("Não é uma string<br>");
} else {
	alert("2. O dado informado é uma string(texto)!");
	alert("3. A string será convertida para número")
	document.write("2. O dado informado é uma string(texto)!<br>");
	document.write("3. A string será convertida para número.<br>")
}

document.write("<br>4. Dados do exercício anterior.<br>")

document.write("<br>Desafio Aula 1 <br>")
document.write("<br>1. Seja bem vindo..: " +nome+"<br>");
document.write("2. Você digitou o número..: (" + numero + ")<br>");
document.write("3. O retorno da comparação bobleana é..: " + comparacao +"<br>");
document.write("4. A soma dos valores é..: " +soma+"<br>");
document.write("5. A subtração dos valores é..: " +sub+"<br>");
document.write("6. O resto da divisão é de..: " + divisao+"<br>");
document.write("7. O quadrado do número digitado é..: " +quad+"<br>");



var fruta=prompt("5. Escolha uma fruta entre: Laranja, Pera, Uva ou Manga.");
document.write("<br>5. Escolha da fruta:<br>");
switch(fruta){
        case "Laranja":
        document.write("Você escolheu: "+fruta);
        break; 

        case "Uva":
        document.write("Você escolheu: "+fruta);
        break; 

        case "Pera": 
        document.write("Você escolheu: "+fruta);
        break;

        case "Manga":
        document.write("Você escolheu: "+fruta);
        break;

        default:
        document.write("A fruta que você digitou não está nas opções apresentadas: "+fruta);
        break;
    }
/*
Posteriormente pedir ao usuário para escolher entre 3 frutas
 [Laranja, Uva, Pera, Manga] 
 	caso não tenha informa ao usuário de nome (?) que a fruta escolhida
 	 não está na lista
 	*/