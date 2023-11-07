var input = document.getElementById("texto");
var botao = document.getElementById("botao");

function tamanhoTexto() {
    var texto = input.value;
    alert("Seu texto tem " + texto.length + " de tamanho");
}

botao.addEventListener('click', tamanhoTexto);