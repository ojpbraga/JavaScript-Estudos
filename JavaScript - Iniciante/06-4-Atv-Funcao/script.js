function coordenadas(event) {
    const circulo = document.querySelector(".circulo");
    y = event.y;
    x = event.x;
    console.log(x, y);

    circulo.style.top = y + "px";
    circulo.style.left = x + "px";

}

window.addEventListener('mousemove', coordenadas);
