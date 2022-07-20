// function renderizarNav(obj){
    let tagBody = document.querySelector("body");
    let tagHeader = document.createElement("header");
    let tagDiv = document.createElement("div");
    let logo = document.createElement("img");
    let tagNav = document.createElement("nav");
    let tagMenu = document.createElement("ul");
    let menuTodos = document.createElement("li");
    let menuPop = document.createElement("li");
    let menuRock = document.createElement("li");
    let menuAlternativo = document.createElement("li");

    tagHeader.classList.add("menu");
    tagDiv.classList.add("menu-logo");
    logo.classList.add("menu-img");
    tagMenu.classList.add("menu-estilos");
    logo.src = "./img/logo-musique.png"
    menuTodos.innerText = "Todos";
    menuPop.innerText = "Pop";
    menuRock.innerText = "Rock";
    menuAlternativo.innerText = "Alternativo";

    tagBody.appendChild(tagHeader)
    tagHeader.append(tagDiv, tagNav)
    tagDiv.appendChild(logo)
    tagNav.appendChild(tagMenu)
    tagMenu.append(menuTodos, menuPop, menuRock, menuAlternativo)
// }

// renderizarNav(produtos)

    // let tagBodyProd = document.querySelector("body");
    let tagMain = document.createElement("main");
    let tagArticle = document.createElement("article");
    let tagSection = document.createElement("section");
    let tagUl = document.createElement("ul");

    tagMain.classList.add("principal");
    tagSection.classList.add("produtos");
    tagUl.classList.add("produtos-lista")

function renderizarCard(arr){
    for(let i = 0; i < arr.length; i++){
        let prodCard = document.createElement("li");
        let prodImagem = document.createElement("img");
        let prodInfo = document.createElement("main");
        let prodCategoria = document.createElement("p");
        let prodNome = document.createElement("h1");
        let prodDesc = document.createElement("h5");
        let prodPreco = document.createElement("strong");
        let prodCarrinho= document.createElement("button");

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

        tagBody.appendChild(tagMain)
        tagMain.append(tagArticle, tagSection, tagUl)
        tagUl.appendChild(prodCard)
        prodCard.append(prodImagem, prodInfo, prodCategoria, prodNome, prodDesc, prodPreco, prodCarrinho)
    }
}

renderizarCard(produtos)

// let tagBodyLateral = document.querySelector("body")
let tagAside = document.createElement("aside");
tagBody.appendChild(tagAside)

function renderizarPesquisa(obj){
    let tagSectionPesq = document.createElement("section");
    let tagInput = document.createElement("input");
    let tagButton = document.createElement("button");

    tagAside.classList.add("lateral");
    tagSectionPesq.classList.add("pesquisa");
    tagInput.classList.add("pesquisa-digitar");
    tagButton.classList.add("pesquisa-botao");
    tagButton.innerText = "Pesquisa";

    tagAside.appendChild(tagSectionPesq)
    tagSectionPesq.append(tagInput, tagButton)
}

renderizarPesquisa(produtos)

function renderizarCarrinho(obj){
    let tagSectionCar = document.createElement("section");
    let tagCarTitulo = document.createElement("h5");
    let tagCarMain = document.createElement("main");
    let tagCarLista = document.createElement("ul");
    // let tagCarAdd = document.createElement("p");

    tagSectionCar.classList.add("carrinho");
    tagCarTitulo.classList.add("carrinho-titulo");
    tagCarMain.classList.add("carrinho-lista");
    tagCarLista.classList.add("titulo");
    // tagCarAdd.classList.add("subtitulo");
    tagCarTitulo.innerText = "Carrinho de Compras"
    // tagCarMsg.innerText = "Carrinho Vazio"
    // tagCarAdd.innerText = "Adicionar itens"

    tagAside.appendChild(tagSectionCar)
    tagSectionCar.append(tagCarTitulo, tagCarMain)
    tagCarMain.appendChild(tagCarLista)
}

renderizarCarrinho(produtos)