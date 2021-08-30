window.onload=function(){
const v1 = document.querySelector("#v1");
const v2 = document.querySelector("#v2");
const valorR = document.querySelector("#vresult");
const conf = document.querySelector("#cresul");
	conf.addEventListener('click',()=> {
		
		var cxv1 = v1.value;
		var cxv2 = v2.value;
		var cxresult = Number(valorR.value);

		var result = Number(cxv1) + Number(cxv2);
				
		if(result === cxresult){
			alert('Valor está correto');
		} else {
			alert('O valor informado está incorreto');
		}
	})
}