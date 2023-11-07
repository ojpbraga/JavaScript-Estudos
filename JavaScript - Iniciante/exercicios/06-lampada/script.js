const imagem = document.getElementById("imagem");
const ligado = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
const desligado = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";

function interruptor() {
    if (imagem.src === desligado) {
        imagem.src = ligado;
    }
    
    if (imagem.src === ligado) {
        imagem.scr = desligado;
        console.log("Rodou");
    }
    
}

imagem.addEventListener('click', ()=> {
    interruptor();
});