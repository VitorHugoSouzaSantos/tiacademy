/*
var nome = "Vitor Hugo";
console.log(nome.length);
console.log(nome[0]);//Primeira letra
*/
/*
match()
O método match procura uma palavra em uma string.
Existem alguns parâmetros de pesquisa que permite uma maior precisão conforme a
flags g / i / m
*/

var palavras ="Maçã doce";
//	console.log(palavras.match(/D/gi));


/*
search()

*/

//console.log(palavras.search(/d/gi));


// replace()
/*
var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit."+
" In officia repellendus magnam fuga voluptatum nesciunt molestiae adipisci"

var mudarStr = str.replace(/adipisci/gi,'Xxxxx');
	console.log(mudarStr)
*/

/*
localeCompare()
*/
/*
var comp1 = "Comparar"
var comp2 = "comparar"

var c1 = comp1.toLowerCase()
var c2 = comp1.toLowerCase()

console.log(`Este é o c1: ${c1} Este é p c2: ${c2}`)

var comparacao = comp1.localeCompare(/comp2/gi)
//console.log(comparacao)
*/

/*
trim()
Faz a remoção de espaços antes e depois da string especcificada.
*/
/*
var p = ' fpalavra+ ';
	
	var r= p.trim()
	console.log(r)
	var s = r.replace(/f/gi,'')
	console.log(s)
	sub_a = s.replace('+','')
	console.log(`Removido: ${sub_a}`)
//	console.log(p.replace(/f/gi,''))
//	console.log(p);
*/

// toLocaleString
// formatação de moedas
var valor = 1.357 //1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})
console.log(formatarMoeda)

