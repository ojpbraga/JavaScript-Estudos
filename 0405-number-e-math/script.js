// Number
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

const ano = 2018;
const preco = new Number(99);
console.log(ano, preco)

console.log("--------------------");


// Number.isNaN() e Number.isInteger()
// isNaN() é um método de Number, ou seja, não faz parte do protótipo. isInteger() verifica se o número é integral.

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
console.log(Number.isNaN('Oi'));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.5));

console.log("--------------------");


// Number.parseFloat() e Number.parserInt()
// parseFloat() serve para retornarmos um número a partir de uma string. A string deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal

console.log(Number.parseFloat('99'));
console.log(Number.parseFloat('9.83'));
console.log(Number.parseFloat('n9.83'));
console.log(Number.parseFloat('100 reais'));
console.log(Number.parseInt('100.99 reais'));
console.log(Number.parseInt(' 47.89'));

// Se quisermos mexer com Exadecimal, Octadecimal etc.:
console.log(Number(parseInt(29, 8)))


// n.toFixed(decimais)
// Arredonda o número com base no total de casas decimais do argumento
const valor = 2.99;
console.log(valor.toFixed());

const carro = 1000.45;
console.log(carro.toFixed())

const casa = 105000.58732;
console.log(casa.toFixed(2)); // Mostra os próximos decimais

console.log((44.50).toFixed());


console.log("--------------------");

// n.toString(radix)
// Transforma o número em uma string com base no Radix. Use o 10 para sistema decimal // muito dificil ser usado
const preco2 = 2.99; 
console.log(preco2.toString(10));


// n.toLocaleString(lang, options);
// Formata/Transforma o número de acordo com a lingua e opcoes passadas

const preco3 = 59.49;
console.log(preco3.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $59.49

console.log(preco3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 59,4

console.log(preco3.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})); // R$59.49


// Math
// É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(100));


// Math.abs() Math.ceil() Math.floor() e Math.round()
console.log(Math.abs(-5));
console.log(Math.ceil(2.5));
console.log(Math.floor(2.5));
console.log(Math.round(4.5));
console.log(Math.round(4.4));

// Math.max(), Math.min() e Math.random()
console.log(Math.max(5, 2, 33, 0, 99)); // Retorna o maior número
console.log(Math.min(5, 2, 33, 0, 99)); // Retorna o menor

console.log(Math.random()); // 0.x
console.log(Math.random() * 100); // entre 0 e 100
console.log(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1))+ 32);
// console.log(Math.floor(Math.random() * (min - max + 1)) + min);

// Exercício:
// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (1050 - 2000 + 1)) + 2000);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

let novosNumeros = numeros.split(',');
// let novaLista = [];
// novosNumeros.forEach((numero) => {
//     numero = numero.trim();
//     numero = parseInt(numero);
//     novaLista.push(numero);
// })
// console.log(novaLista);
console.log('Maior número: ', Math.max(...novosNumeros));


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limpaArray(reaisArray) {
    let total = 0;
    reaisArray.forEach((reais) => {
        reais = reais.toUpperCase();
        reais = reais.replace("R$", "");
        reais = reais.trim();
        reais = reais.replace(",", ".")
        reais = parseFloat(reais);
        reais = Math.round(reais);
        // reais = toFixed(2)

        total += reais;

        console.log('Total: ', total.toLocaleString( 'pt-BR', {style: 'currency', currency: 'BRL'}));
    });
}

limpaArray(listaPrecos);
// Seria mais interessante: criar apenas a função que recebe os dados, limpa-los e, logo após, criar um forEach que passe esses valores para a função. No final, some.