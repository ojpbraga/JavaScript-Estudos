// Selecionando por ID
const animais = document.getElementById('animais');
const gridSection = document.getElementsByClassName('grid-section')

console.log(animais);
console.log(gridSection);
console.log(gridSection[2]);

// Seletor geral
const contato = document.querySelector('#contato');
const primeiraLi = document.querySelector('li');
const linksInterno = document.querySelector('[href^="#"]');
console.log(primeiraLi);

// Diferença de NodeList(não atualiza) e HTMLColection(atualiza)
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraLi.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

// Array-Like
// HTMLcollection e NodeList são array-like, parecem uma array mas não são. O método array foreach() só funciona em NodeList
gridSectionNode.forEach((item, index) => {
    console.log(item, index);
});

// Transformanda array like em array comum
const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach((item) => {
    console.log(item);
});

// Exercícios
// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    console.log(img);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgs2 = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgs2);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelectorAll('.animais-descricao h2');
console.log(h2Animais[0]);

// Selecione o último p do site
const p = document.querySelectorAll('p');
console.log(p[p.length -1]);