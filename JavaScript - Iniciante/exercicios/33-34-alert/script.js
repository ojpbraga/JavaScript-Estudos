const botao = document.getElementById("bnt");
var numUsuario = document.getElementById("numero");


botao.addEventListener('click', () => {
    
    var numAleatorio = Math.floor(Math.random() * (100-0) + 0);
    numUsuario = Number(numUsuario.value);

    if (numAleatorio === numUsuario) {
        alert("Você acertou!!!");
    } else {
        alert("Você errou! O número era: " + numAleatorio);
    }

});