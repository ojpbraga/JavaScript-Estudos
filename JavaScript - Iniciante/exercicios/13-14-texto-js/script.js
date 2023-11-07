const resultado = document.getElementById("resultado");
const texto = document.getElementById("texto");
const bntTexto = document.getElementById("bnt-texto");

window.onload = () => {
    resultado.innerText = "Esse conteúdo foi inserido pelo JavaScript"; 
};

bntTexto.addEventListener('click', () => {
    texto.innerText = "Esse conteúdo foi inserido pelo JavaScript"; 
    texto.classList.toggle('ativo');
});