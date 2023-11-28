// Selecionando elemento
const botao = document.querySelector(".botao");

// Evento 
function somar(event){
    // Selecionando a div que será utilizada
    const qtdElemento = document.querySelector("div");

    // Obtendo as informções dentro da div, as transformando em número e somando 1
    const stringNum = Number(qtdElemento.innerText) + 1;
    
    // Verificando se o número de cliques é superior a 10
    if (stringNum < 10) {
        qtdElemento.innerHTML = stringNum;
    } else {
        console.log("Quantidade excedida!");
    }
    
}

// Verificando se existe algo no elemento
if (botao) {
    botao.addEventListener('click', somar);
}