//Array
var frutas = ["Uva","Banada","Amora","Melão"]; //var frutas = Array()
console.log(`Qtd do arrey: ${frutas.length} fruta: ${frutas[0]}`);

// concat()

var frutas2 = ["Maçã", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);

// indexof()

var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2

// join()

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);

// push()

var outroLista = ["Bola","Peteca"];
var novaLista = outroLista.push("Boneca","Qualquer brinquedo");
console.log(novaLista);
console.log(outroLista);
console.log(outroLista[3]);

// pop()

console.log(outroLista.pop());
console.log(outroLista);

// reverse()

console.log(outroLista.reverse());

// shift()

var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

// sort()

var alfa = [4,6,9,2];
alfa.sort();
console.log(alfa.sort());

// toString()
//vide join

//unshift() insere um novo elemento no início do array

alfa.unshift(10);
console.log(alfa);


/*splice() Corta o arraty em um ponto indicado dos parametros indice e
quantos elemntos quer remover a partir da posição.. */

var f = ["Uva","Banada","Amora","Melão"]; //var f = Array()
var idx = f.indexOf("Banada")
console.log(idx)
console.log(f.splice(idx,2))
console.log(f)
//var r = f.splice()
//console.log(f.splice(2,1))


// arrays de objetos

var dados = [
	{nome:"Vitor Hugo"},//0
	{nome:"Julina"}//1
	]
//console.log(dados[0].nome)
//console.log(dados[1].nome)



function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg: doc[0],
		cpf: doc[1]
	}
}

var Pessoa2 = new Pessoa2("Vitor Hugo", "", "",['22','555']);
//console.log("Nome: "+Pessoa2.nome+" "+Pessoa2.doc.rg);
console.log(`Nome ${Pessoa2.nome} - CPF: ${Pessoa2.doc.cpf}`)