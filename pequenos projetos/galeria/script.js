const imagens = document.querySelectorAll("li img");
const imagem_principal = document.querySelector("#imagem-principal");

function galeriaTrocar(event) {
    
    // É possível ter o alt com .alt ou .getAtttribute("alt")
    const clicado = event.currentTarget;
    imagem_principal.alt = clicado.alt;
    imagem_principal.src = clicado.src;
  
}

function trocaImagens(imagem) {
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(trocaImagens);