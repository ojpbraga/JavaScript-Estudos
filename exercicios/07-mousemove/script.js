const imagem = document.getElementById("imagem");
const ligado = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
const desligado = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const botao = document.getElementById("botao");

function interruptor() {
    if (imagem.src === desligado) {
        imagem.src = ligado;
    }
    
    if (imagem.src === ligado) {
        imagem.scr = desligado;
        console.log("Rodou");
    }
    
}

function saudacao() {
    // let nome2 = nome.value;
    // let sobrenome2 = sobrenome.value;

    alert("Saudação "   + " "  + "!");
}

botao.addEventListener('click', saudacao);

imagem.addEventListener('mouseover', ()=> {
    interruptor();
});

