// forEach
// Primeiro parâmetro é o callback. Essa função recebe três parâmetros: valorAtual, index, array.
const imgs = document.querySelectorAll('img');
console.log(imgs);

let i = 0;
imgs.forEach((item, index, array) => {
    console.log(item, index);
    console.log(array);
});

// forEach e Array
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => {
    console.log(item);
});

// Arrow Function 
// () => Sintaxe curta em relação a function expression.
imgs.forEach(() => console.log(i++));

// Exercícios 
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((paragrafo) => {
    console.log(paragrafo);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafo) => {
    console.log(paragrafo.textContent)
});

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log(item, index);
});

imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => i++);

