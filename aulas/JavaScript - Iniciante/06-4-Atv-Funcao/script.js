// Selecionar qual elemento iremos usar:
const circulo = document.querySelector(".circulo");

// Função que executa quando o evento ocorrer
function novoMouse(event) {

    // Obtendo as coordenadas x e y do mouse
    y = event.y;
    x = event.x;
    console.log(x, y);

    // Transferindo as coordenadas do mouse para a localização do circulo
    circulo.style.top = y + "px";
    circulo.style.left = x + "px";

}

// Adicionando o evento (casoa algo ocorra, faça)
window.addEventListener('mousemove', novoMouse);
