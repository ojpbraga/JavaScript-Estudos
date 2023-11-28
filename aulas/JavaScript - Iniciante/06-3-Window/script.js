// window: é um objeto que representa a janela do browser e contém todo o dom. Possui diversas propriedades, métodos com informação sobre a página e pode receber eventos globais
console.log(window);

// Altura e largura interna:
console.log(window.innerHeight);
console.log(window.innerWidth);

const Largura = window.innerHeight;
console.log(Largura);

// Adicionando evento da coordenada do mouse
function coordenadaMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y
    }
    console.log(coordenadas);
}
window.addEventListener('mousemove', coordenadaMouse);



function scroll() {
    console.log('Usou o scroll');
    //  Saber a distancia do scroll (animacao)
    console.log(window.scrollY);
}
window.addEventListener("scroll", scroll);