/*
var / let  const
*/
/*
var nome = "Vitor"; // var global
let sobreNome = "Hugo";
if (true) {
	console.log("Var nome= "+ nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+sobreNome)
	let sn = "Souza Santos";
	console.log(sobreNome);
}

console.log("Meu nome é " +nm+" "+sobreNome+" "+sn);
console.log("Var nome= "+ nm);
*/

var Pessoa = {
	nome: "Vitor",
	rua: "Rua 1",
	ncasa: "888",
	dados: function(){
		document.write(
			"Nome...: "+this.nome+"<br>"+
			"Rua...: "+this.rua +"<br>"+
			"Nº...: "+this.ncasa+"<br>")
			}
}

Pessoa.dados();

//console.log("Nome "+Pessoa.nome+" Endereço "+Pessoa.rua+" N." +Pessoa.ncasa);
