window.onload  = function(){

// Lista de produtos

    (()=>{
        let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

        for(let idx in produtos){
            mostrarProdutosCliente.innerHTML += `<li class='itemProduto' data-precos=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
        }
    })(produtos)

// Compras

    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

    var prodCesta
    var armazenaItem =[];
    var totalPedido = 0;


    itemProduto.forEach((item)=>{
        item.addEventListener('click', ()=>{
            li = document.createElement('li');
            li.className = 'prodCesta'; 
            li.dataset.precos = item.dataset.precos;

            if(armazenaItem.indexOf(item.textContent) == -1){
                armazenaItem.push(item.textContent);
                prodCesta = cestaDoCliente.appendChild(li);
                prodCesta.textContent = item.textContent;

                prodCesta.addEventListener('click', (test)=>{
                    if(confirm(`Remover ${item.textContent} da cesta de compras?`)){
                        armazenaItem.splice(armazenaItem.indexOf(test.target.textContent),1);
                        cestaDoCliente.removeChild(test.target);
                        totalPedido -= Number(test.target.dataset.precos);
                        mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
                    }
                });

                totalPedido += Number(item.dataset.precos);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
                
            }else{
                alert(`Este item ${item.textContent} já consta de sua cesta`);
            };
        });
    });
} // Esse desafio à parte mais difícil foi retornar o valor depois de remover um produto e adicionar outro para fazer a remoção, mas uma tentativa atrás da outra, deu certo.
// O site que o professor passou https://developer.mozilla.org/ ajudou muito, em todos os desafios.