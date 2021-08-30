
function soma() {
	var x=1;
	var y=2;
	console.log(x+y)
}
//soma();

function somaPar(x,y){
	var r=x+y;
	console.log(r);
}

function mult(n, o){
	var resultado = (n * o); //vars locais
	console.log(resultado);
}

function pot(n, o){
	var resultado = Math.pow(n,o);
	console.log( resultado);
}
mult(3,4);
pot(7,2);

//somaPar(4,9);
/*
(function respostaf(){
	var nome="Vitor Hugo";
	alert(nome)
	return nome;
})();

var f = function(){
	alert("Função sem nome")
}
f();
//respostaf();

//var d = respostaf();
//console.log(d);
*/

//var ar = ()=>{alert("ArFunc")}
//ar ();
//(()=>{alert("ArFunc")})();
