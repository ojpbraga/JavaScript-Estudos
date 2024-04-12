// Iterable
// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo. É dentro dele que a função que lida com a iteração será definida. Ex.: Array, String, NodeList, boa parte das Arrays-Like e outros.

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'JavaScript';

// console.log(frutas.__proto__.Symbol(Symbol.iterator))

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));


// for...of
// É possível fazermos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmo.

for(const fruta of frutas) {
    console.log(fruta);
}

for(const char of frase) {
    console.log(char);
}

// Spread e for..of
// Com o loop, podemos manipular cada um dos elementos do objeto iterável

const buttons = document.querySelectorAll('button');

for(const button of buttons) {
    button.style.background = 'blue';
}

console.log(...buttons);


// for...in 
// Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto

const carro = { 
    marca: 'Honda',
    ano: 2018
}

try {
    for(const key of carro) { 
        console.log(key);
    }
} catch(error) {console.log(error)};

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: false // Não é enumerável, ou seja, for...in não consegue ler
    }
})

console.log(carro);

for(const propriedade in carro) {
    //          chave               acessando o value
    console.log(propriedade, carro[propriedade]);
}


// Arrays e for...in
// Uma array é um objeto, porém a chave de cada valor é igual ao seu index.

// frutas // do tipo array
for(const index in frutas) {
    console.log(index, frutas[index]);
}


// Chave e Valor
// Utilizando o for...in podemos retornar todas as chaves e valores de propriedade enumeráveis

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
console.log(btnStyles)

for(const style in btnStyles) { // Retorna só os enumeráveis
    console.log(`${style}: ${btnStyles[style]}`);
}

// Do/While

let i = 0;
do {
    console.log(i++);
} while (i <= 5);

