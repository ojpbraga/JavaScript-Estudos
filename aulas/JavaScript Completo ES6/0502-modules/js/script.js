// Modules
// Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

// <script type="module" src="js/script.js"></script>

// arquivo scroll-suave.js
// export defoult function scrollSuave(){}

// arquivo script.js
// import scrollSuave from './scroll-suave.js';
// scrollSuave();

import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();


// Named Exports
// Você pode exportar mais de um valor. Quando for importar, utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

// arquivo scroll.js
// export function scrollSuave(){}
// export function scrollAnimacao(){}

// arquivo script.js
// import { scrollSuave, scrollAnimacao } from './scroll.js';
// scrollSuave();
// scrollAnimacao();

import { teste1, teste2 } from "./modules/teste.js";

teste1();
teste2();

// Importe todos os valores de um objeto
import * as teste from './modules/teste.js';

console.log(teste, teste1());
teste.teste1();
teste.teste2();


// Valores do Export
// Podemos exportar objetos, classes, números, strings e mais.

// arquivo configuracao.js
// export function scrollSuave() {};
// export const ano = 2000;
// export const obj = {nome: 'Alemão'};
// eport class Carro {};

// arquivo script.js
// import * as conf from './configuracao.js';
// conf.obj;
// conf.ano;

console.log(teste.senha);

// Características
// Strict Mode - 'use strict' por padrão nos arquivos

// Variáveis ficam no module apenas
// Não vazam para o escopo do globo
// console.log(esseNome); // Erro, só vem o que for exportado

// This fora de um objeto faz referência a underfined
// Ao invés de fazer referência ao window, pois é um arquivo type="module"
console.log(this);

// Assíncrono: carrega o arquivo que for mais fácil primeiro, mas executa na ordem correta