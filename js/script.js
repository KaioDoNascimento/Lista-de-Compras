// Vetores que guardam os nomes dos produtos e seus respectivos preços.
var produtos = [];
var precos = [];

// Adiciona um produto a lista com seu nome e preço.
function novoProduto() {
    let nome_produto = document.getElementById('produto');
    let preco_produto = document.getElementById('valor');
    if (nome_produto.value === '' || preco_produto.value === '') {
        alert('Algum campo está em branco. Tente novamente!');
    } else {
        let produto = nome_produto.value;
        let preco = preco_produto.value;
        let lista = document.getElementById('itens');
        lista.innerHTML += `<li>${produto} - R$${Number(preco).toFixed(2)} </li> <br>`;
        produtos.push(produto);
    }
}

// Remove um produto (e seu preço) da lista. Por fim, atualiza a lista com a função atualizaLista.
function removeProduto() {
    let produto_removido = document.getElementById('exclusao');
    let remover = produto_removido.value;
    for(let i=0 ; i<produtos.length ; i++){
        if(remover === produtos[i]){
            produtos.splice(i,1);
            precos.splice(i,1);
            atualizaLista();
        }
    }
}

// Atualiza a lista já com os produtos removidos.
function atualizaLista(){
    let lista = document.getElementById('itens');
    lista.innerHTML = '';
    for(let i=0 ; i<produtos.length ; i++){
        let prod = produtos[i];
        let pre = precos[i];
        lista.innerHTML += `<li>${prod} - R$${Number(pre).toFixed(2)} </li> <br>`;
    }
}

// Soma os preços dos produtos contidos na lista
function somaTotal() {
    let preco_produto = document.getElementById('valor');
    let total = document.getElementById('total');
    let soma = 0;
    let converter = parseFloat(preco_produto.value);
    if(!isNaN(converter)){
        precos.push(converter);
    }

    for (let i = 0; i < precos.length; i++) {
        soma += precos[i];
    }
    total.innerHTML = "Total: R$"+Number(soma).toFixed(2).replace(".",",");

}

// Atualiza o valor total com as inserções e remoções de produtos.
function atualizaTotal(){
    let valor_total = document.getElementById('total');
    let soma = 0;
    for (let i = 0; i < precos.length; i++) {
        soma += precos[i];
    }
    valor_total.innerHTML = "Total: R$"+Number(soma).toFixed(2).replace(".",",");
}

// Mostra a section com o valor total atual
function mostraSectionResultado(){
    document.getElementById("resultado").style.display = "block";
}