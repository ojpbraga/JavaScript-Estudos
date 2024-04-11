// Parâmetros
// Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.

// Arguments
// A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.

function perimetroForma(lado, totalLados = 4) {
    const argArray = Array.from(arguments);
    console.log(arguments);
    console.log(argArray)
    return lado * totalLados;
}

console.log(perimetroForma(10, 2));
console.log(perimetroForma(10));



// Parâmetro Rest
// É possível declararmos um parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
// SEMPRE deve ser o último parâmetro, pois se a função já tiver argumentos, eles são passados primeiro e o resto estará no Rest (Array).

function anunciarGanhadores(premio, ...ganhadores) {
    console.log(Array.from(arguments));
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' ganhou ' + premio)
    })
}

anunciarGanhadores('CARRO','Pedro', 'Marta');


function listArguments(lados, totalLados, ...argumentos) {
    console.log(argumentos); // Array
    console.log(arguments); // Array-like
    argumentos.forEach(i => console.log(i));
    return lados * totalLados
}

listArguments(10, 20, 'Pedro', 'Marta');
console.log(listArguments(10, 20, 'Pedro'));

// Rest vs Arguments
// Rast é um array real e arguments é um objeto que se parece um array (Array-like)


// Operador Spread
// O operador spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes]; // Se não tivesse spread, seria um array dentro de outro array.
console.log(comidas);


// Spread Arguments
// O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
const numeroMaximo = Math.max(4, 5, 43, 32, 1, 9); // 43

const listaNumeros = [3, 24323, 1, 4, 4443, 33]; // 24323
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);


// Rest e Spread
function ganhouUmaMoto(...ganhadores) { // rest, pois aceita vários argumentos
    ganhadores.forEach(ganhador => {
        console.log(ganhador + ' recebeu uma Moto!');
    });
}

const ganhadoresMoto = ['Joao', 'Carlos', 'Jose'];
ganhouUmaMoto(...ganhadoresMoto); // Spread, pois passa item por item da array.


// Transformar em Array
// É possível transformar itens iteráveis em uma array real com o spread.

const btns = document.querySelectorAll('button');
console.log(btns);
const btnsArray = [...btns];
console.log(btnsArray);

const frase = 'String é um array';
const fraseArray = [...frase];


// Exercícios
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'red', color = 'blue') {
  
    const buttonElement = document.createElement('button');

    buttonElement.style.background = background;
    buttonElement.style.color = color;

    return buttonElement;
} 
  
const redButton = createButton();
console.log(redButton);
  
  // Utilize o método push para inserir as frutas ao final de comidas.
const frutinhas = ['Banana', 'Uva', 'Morango'];
const comidinhas = ['Pizza', 'Batata'];

comidinhas.push(...frutinhas);
console.log(comidinhas);
  