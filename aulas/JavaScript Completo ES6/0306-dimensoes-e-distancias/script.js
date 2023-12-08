// Height e Width
// São propriedades e métodos dos objetos Element e HTMLElement, a maioria é read-only

const animais = document.querySelector('.animais-lista');
console.log(animais.clientHeight); // heigth + padding
console.log(animais.scrollHeight); // height total do scroll
console.log(animais.offsetHeight); // height + padding + border

// Distancia entre elementos
const menu = document.querySelector('.menu');
const menuTop = menu.offsetHeight;
const animaisTop = animais.offsetHeight;
console.log(menuTop);
console.log(animaisTop);

// offsetTop e offsetLeft
const raposaH2 = document.querySelector('h2');
console.log(raposaH2.offsetLeft);

// getBoudingClientReact()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const rect = raposaH2.getBoundingClientRect();
console.log(rect);

// Window - tamanho de tela
console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth, // Pega também se o inspecionar estiver aberto
    window.outerHeight,

    window.screenY, // Scroll da página
    );

// Verificando o tamanho da tela do usuário
if(window.innerWidth < 600) {
    console.log('Tela menor que 600px')
}

// metchMedia() - Responsividade
const small = window.matchMedia('(max-width: 600px)');  // posso colocar .matches no final retorna true/false
if(small.matches) {
    console.log('Tela menor que 600px');
} else {
    console.log('Tela maior que 600px');
}

// Exercícios 
// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetHeight);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
let largura = 0;
console.log(imgs);
imgs.forEach((img)=> {
    largura += img.clientWidth;
    console.log(largura);
});

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksPagina = document.querySelectorAll('a');


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
