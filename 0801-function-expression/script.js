// Function Declaration
// São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.

function somar(a, b) {
    return a + b;
}
console.log(somar(4, 2));

// Function Expression
// É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

const plus = function(a, b) {
    return a + b;
}
console.log(plus(4, 2));


// Hoisting
// Function Declarations são completamento definidas no momento do hoisting, já Function Expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.

comHoisting(2, 3); // 5
// semHoisting(2, 3); // Erro

function comHoisting(a, b) {
    return a + b;
}
const semHoisting = function(a, b) {
    return a + b;
}


// Arrow Function
// Podemos criar utilizando arrow functions
const quadrado = a => a * a;
console.log(quadrado(5));

const soma = (a , b) => a + b;
console.log(soma(5, 10));


// Estrutura / Preferência
// É uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

// Sempre que for declarado uma função Declaration, ela entrará dentro do objeto window


// IIFE - Immediately Invoked Function Expression
// Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era través das IIFE's

var instrumento = 'Vioão';

(function() {
    // código isolado do escopo global
    var instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);

// Exercícios
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
var carro = "Caminhão";
(function() {
    var carro = "Moto";
    console.log(carro);
})()
console.log(carro);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

function exemploFunction() {
    console.log("Chama a função que foi passada no parâmetro")
}

active(exemploFunction);
