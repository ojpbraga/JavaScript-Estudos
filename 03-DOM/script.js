// O que é DOM
// É uma interface que representa documentos HTML e XML, através de objetos. É possível manipular a estrutura, estilo e conteúdo.

console.log(window);

// Window e Document: serão os mais utilizados e boa parte da manipulação é feita através deles.

// Node
// Toda tag HTML é representada pelo objeto Element e por isso herda os seus métodos e propriedades. É um tipo de objeto Node.
const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altira do elemento

titulo.addEventListener('click', () => {
    titulo.style.background = "pink";
}); // ativa a função callback

// Exercício
// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo');
console.log(ativo);

// Retorne a linguagem do navegador
console.log(navigator.language);

// Retorne a largura da janela 
console.log(window.outerWidth);
