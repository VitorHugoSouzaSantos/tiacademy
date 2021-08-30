// Objetos

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa("Vitor Hugo", "Souza Santos", 27);
console.log("Nome "+ ps1.nome +" "+ ps1.sobrenome + " idade" + ps1.idade);

var ps2 = new Pessoa("Juliana");
console.log("Pessoa 2 - Nome "+ps2.nome+" "+ps2.sobrenome);

var objPessoa = {rg:'7767', cpf:'8989'}

//console.log(typeof(objPessoa));
console.log("RG "+objPessoa.rg);

function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc={
		rg:'7767',
		cpf:'8989'
	}
}

var Pessoa2=new Pessoa2("Vitor Hugo");
//console.log("Nome: "+Pessoa2.nome+" "+Pessoa2.doc.rg);
console.log(`Nome ${Pessoa2.nome} - RG: ${Pessoa2.doc.rg}`)