const h1 = document.querySelector('h1');

console.log(Object.prototype.toString.call(h1));

console.log(h1.dataset);

// Dataset
// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave/valor, com todos os atributos do elemento html que começam com data-

const div = document.querySelector('div');
const div1 = document.querySelector('[data-cor]');
const div2 = document.querySelector('[data-cor="Azul"]');

console.log(div.dataset);
console.log(div.dataset.cor);
div.dataset.height = 1000;
console.log(div.dataset);
delete div.dataset.height;

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
})

// Data vs Class
// A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

// Nomeclatura
// Por padrão o JS não aceita traço. Então qualquer traço será removido e a letraa seguinte transformada em maiúscula.

// Ex.: data-anima-scroll -> animaScroll
// Quando se é adicionado um novo data através do JS com mais de uma palavra, automaticamente é adicionado o traço
div.dataset.totalHeight = 1000;
console.log(div);

// Exercícios
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes. // Não feito.

// Modules
// Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

// <script type="module" src="js/script.js"></script>

// arquivo scroll-suave.js
// export defoult function scrollSuave(){}

// arquivo script.js
// import scrollSuave from './scroll-suave.js';
// scrollSuave();