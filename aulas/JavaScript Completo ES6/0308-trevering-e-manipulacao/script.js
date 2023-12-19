// // outerHTML, innerHTML e innerText
// // Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas.
// // element.innerText = 'Novo Texto';

// const menu = document.querySelector('.menu');

// console.log(menu.outerHTML); // Todo HTML do elemento
// console.log(menu.innerHTML); // HTML interno
// console.log(menu.innerText); // texto, sem tags

// menu.innerText = '<p>Texto</p>';
// menu.innerHTML = '<p>Novo menu</p>';


// console.log("-----------------------")
// // Transversing
// // Navegar pelo DOM, utilizando suas propriedades e métodos.
// // Traversing e Manipulação
// // outerHTML, innerHTML e innerText
// // Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas.

// // const menu = document.querySelector('.menu');

// menu.outerHTML; // todo HTML do elemento
// menu.innerHTML; // HTML interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é redenrizada

// // Transversing 
// // Navegação pelo DOM, utilizando suas propriedades e métodos.

// const lista = document.querySelector('.animais-lista');
// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todos os Li´s
// lista.querySelector('li:last-child'); // último filho

// // Testes

// console.log(lista);
// console.log(lista.parentElement);
// console.log(lista.parentElement.parentElement);
// console.log(lista.parentElement.parentElement.parentElement);

// console.log(lista.nextSibling); // Próximo elemento (abaixo no HTML)
// console.log(lista.previousElementSibling); // Elemento anterior (acima no HTML)

// console.log(lista.children); // retorna os filhos
// console.log(lista.children[--lista.children.length]); // último item da lista
// console.log(lista.querySelector('li:last-child')); // retorna último filho

// // Element vs Node 
// // Element´s representam um elemento HTML, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

// lista.previousSibling; // node acima

// lista.childNodes; // todos os node child

// // Teste
// console.log(lista.children);
// console.log(lista.childNodes); // É o Node (literalmente o que foi digitado, espaços, comentário que foi feito no arquivo)

// console.log(lista.previousElementSibling);
// console.log(lista.previousSibling); // O que vem antes no node é um espaço.


// // Manipulando Elementos
// // É possível mover elementos do DOM com métodos de Node.

// // const lista já declarada
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const animais = document.querySelector('.animais');
// const mapa = document.querySelector('mapa');
// // contato.appendChild(lista);
//  // move lista para o final de contato. Adiciona o elemento como o último filho da lista.

// // contato.insertBefore(lista, titulo);
//  // insere a lista antes de 

// // contato.removeChild(titulo);
//  // remove título de contato

// // contato.replaceChild(lista, contato);
//  // subsititui titulo por lista

// // Teste
// // animais.appendChild(titulo); // Movendo o título para o último filho de animais

// // titulo precisa ser filho de contato
// contato.insertBefore(animais, titulo);

// contato.removeChild(titulo);

// contato.insertBefore(animais, mapa);

// // contato.replaceChild(lista, mapa);


// // Criar novos elementos
// const novoH1 = document.createElement('h1');
// console.log(novoH1);

// novoH1.innerText = "Novo h1";
// novoH1.classList = "titulo";

// animais.appendChild(novoH1);

// // Clonar Elementos
// // Todo elemento é único. Para criarmos um novo é necessário utilizar o método cloneNode().

// const tituloTeste = document.querySelector('h1');
// const tituloTeste2 = document.querySelector('h1');
// const novoTitulo = tituloTeste;
// // Nenhuma dessas formas funcionaria, porque estamos fazendo referência ao mesmo elemento: h1.

// const cloneTitulo = tituloTeste.cloneNode(true); // true sinaliza para incluir os filhos
// cloneTitulo.style.background = "blue";
// lista.appendChild(cloneTitulo);
// console.log(cloneTitulo);

// // Exercicio
// // Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoMenu = menu.cloneNode(true);
copy.appendChild(novoMenu);


// // Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('#faq');
console.log(faq.children[--faq.children.length]);
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt);

// // Selecione o DD referente ao primeiro DT
console.log(faq.children[1].children[0]);
console.log(primeiroDt.nextElementSibling);

// // Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
// document.querySelector('html').children[1].replaceChild(faq, animais);
faq.innerHTML = animais.innerHTML;

// console.log(document.querySelector('html').children[1])