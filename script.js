console.log(produtos)

// function renderizarNav(obj){
    let bodyLoja = document.querySelector("body");
    let header = document.createElement("header");
    let div = document.createElement("div");
    let logo = document.createElement("img");
    let nav = document.createElement("nav");
    let menu = document.createElement("ul");
    let menuTodos = document.createElement("li");
    let menuPop = document.createElement("li");
    let menuRock = document.createElement("li");
    let menuAlternativo = document.createElement("li");

    header.classList.add("menu");
    div.classList.add("menu-logo");
    logo.classList.add("menu-img");
    menu.classList.add("menu-estilos");
    logo.src = "./img/logo-musique.png"
    menuTodos.innerText = "Todos";
    menuPop.innerText = "Pop";
    menuRock.innerText = "Rock";
    menuAlternativo.innerText = "Alternativo";

    bodyLoja.appendChild(header)
    header.append(div, nav)
    div.appendChild(logo)
    nav.appendChild(menu)
    menu.append(menuTodos, menuPop, menuRock, menuAlternativo)
// }

// renderizarNav(produtos)

    // let tagBodyProd = document.querySelector("body");
    let main = document.createElement("main");
    let article = document.createElement("article");
    let section = document.createElement("section");
    let ul = document.createElement("ul");

    main.classList.add("principal");
    section.classList.add("produtos");
    ul.classList.add("produtos-lista")

function renderizarCard(arr){
    for(let i = 0; i < arr.length; i++){
        let prodCard = document.createElement("li");
        let prodImagem = document.createElement("img");
        let prodInfo = document.createElement("main");
        let prodCategoria = document.createElement("p");
        let prodNome = document.createElement("h1");
        let prodDesc = document.createElement("h5");
        let prodPreco = document.createElement("strong");
        let prodCarrinho= document.createElement("a");

        prodCard.classList.add("produtos-card");
        prodImagem.classList.add("produtos-img");
        prodInfo.classList.add("produtos-info");
        prodCategoria.classList.add("produtos-categoria");
        prodNome.classList.add("produtos-nome");
        prodDesc.classList.add("produtos-descricao");
        prodPreco.classList.add("produtos-preco");
        prodCarrinho.classList.add("produtos-carrinho");
        prodImagem.src = arr[i].imagemProduto;
        prodCategoria.innerText = arr[i].categoria;
        prodNome.innerText = `${arr[i].nome} - "${arr[i].album}"`
        prodDesc.innerText = arr[i].descricao;
        prodPreco.innerText = `R$ ${arr[i].preco}`;
        prodCarrinho.innerText = "Adicionar ao carrinho";
        prodCarrinho.id = arr[i].id

        bodyLoja.appendChild(main)
        main.append(article, section, ul)
        ul.appendChild(prodCard)
        prodCard.append(prodImagem, prodInfo, prodCategoria, prodNome, prodDesc, prodPreco, prodCarrinho)
    }
}

renderizarCard(produtos)

// let tagBodyLateral = document.querySelector("body")
let aside = document.createElement("aside");
bodyLoja.appendChild(aside)

function renderizarPesquisa(obj){
    let sectionPesq = document.createElement("section");
    let input = document.createElement("input");
    let button = document.createElement("button");

    aside.classList.add("lateral");
    sectionPesq.classList.add("pesquisa");
    input.classList.add("pesquisa-digitar");
    button.classList.add("pesquisa-botao");
    button.innerText = "Pesquisa";

    aside.appendChild(sectionPesq)
    sectionPesq.append(input, button)
}

renderizarPesquisa(produtos)

function renderizarCarrinho(obj){
    let sectionCar = document.createElement("section");
    let carTitulo = document.createElement("h5");
    let carMain = document.createElement("main");
    let carLista = document.createElement("ul");
    let tagCarAdd = document.createElement("p");

    sectionCar.classList.add("carrinho");
    carTitulo.classList.add("carrinho-titulo");
    carMain.classList.add("carrinho-lista");
    carLista.classList.add("titulo");
    tagCarAdd.classList.add("subtitulo");
    carTitulo.innerText = "Carrinho de Compras"
    // tagCarMsg.innerText = "Carrinho Vazio"
    // tagCarAdd.innerText = "Adicionar itens"

    aside.appendChild(sectionCar)
    sectionCar.append(carTitulo, carMain)
    carMain.appendChild(carLista)
}

renderizarCarrinho(produtos)

let carrinhoCompras = [];
// let secaoCarrinho = document.querySelector(".produtos-lista")

ul.addEventListener("click", function selecionarProduto(event){
    let prodCarrinho = event.target
    if(prodCarrinho.tagName == "A"){
        // console.log("Clicou no botão")
        // console.log(prodCarrinho)
        let idComprar = prodCarrinho.id
        // console.log(idComprar)
        let produtoLoja = produtos.find(produto => produto.id == idComprar)
            // return produtoLoja
            addCarrinho(produtoLoja)     
    }
    
});

console.log(carrinhoCompras)

function addCarrinho(prod){
    // for(let i = 0; i < obj.length; i++){
    //     let prod = obj[i]
    //     console.log(prod)
        carrinhoCompras.push(prod)
        renderizarProdutoCarrinho(prod)
        // listarProdutos(produtos, secaoCarrinho)
    }

// addCarrinho(produtos)

function renderizarProdutoCarrinho(produto){
    let carLista = document.querySelector(".titulo")
    let liCarrinho = document.createElement("li")
    let divCarrinho = document.createElement("div")
    let imgCarrinho = document.createElement("img")
    let nomeCarrinho = document.createElement("h4")
    let precoCarrinho = document.createElement("strong")
    let removerCarrinho = document.createElement("a")

    liCarrinho.classList.add("item-prod-carrinho")
    divCarrinho.classList.add("div-prod-carrinho")
    imgCarrinho.classList.add("img-prod-carrinho")
    nomeCarrinho.classList.add("nome-prod-carrinho")
    precoCarrinho.classList.add("preco-prod-carrinho")
    removerCarrinho.classList.add("remover-prod-carrinho")
    imgCarrinho.src = produto.imagemProduto
    nomeCarrinho.innerText = `${produto.nome}`
    precoCarrinho.innerText = `R$ ${produto.preco}`
    removerCarrinho.innerText = "Remover do carrinho"
    // let nomeProd = 
    carLista.appendChild(liCarrinho)
    liCarrinho.append(imgCarrinho, divCarrinho)
    divCarrinho.append(nomeCarrinho, precoCarrinho, removerCarrinho)
}

// function listarProdutos(obj, secao){
//     // secao.innerHTML = ""
//     for(let i = 0; i < obj.length; i++){
//         let item = obj[i].preco
//         // let cardProd = renderizarCard(produtos)
//         secao.appendChild(item)
//     }
// }
// listarProdutos(produtos, secaoCarrinho)