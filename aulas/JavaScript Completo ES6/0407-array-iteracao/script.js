// [].forEach()
// .forEach(callback(itematual, index, array)) a função callback é executada para cada item da array. Ela possui três argumentos. O último argumento modifica a array principal

const carros = ['Ford', 'Fiat', 'Honda'];
const cloneCarros = carros.slice();
carros.forEach(function(item, index, array) {
    console.log(item.toLocaleUpperCase()); // Não altera a array original
});

// Com Arrow Function
carros.forEach((item, index, array) => {
    // Modificando o array:
    array[index] = 'Teste';
    console.log(item, index, array);
});
// Método sempre retorna undefined


// Arrow Function
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));


// Modificar a Array Original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
// (linha 12)
// Observação: É melhor usar o map para isso.


// [].map()
// .map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração

const marcas = ['Vivara', 'Nike', 'Polishop'];
const newMarcas = marcas.map((item, index, array) => {
    console.log(item, index, array);
    return 'Marca ' + item; 
});
console.log(newMarcas);

const numeros = [22, 33, 44, 55, 66];
const numerosMultiplicados = numeros.map((numero) => {
    return numero*2;
});
console.log(numerosMultiplicados);


const retornoForEach = carros.forEach(function(item, index, array) {
    console.log(item.toLocaleUpperCase()); // Não 
});

const retornoMap = marcas.map((item) => {
    return 'Marca ' + item; 
});

console.log(retornoForEach);
console.log(retornoMap);

// Valor Retornado
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.
const novoTeste = numeros.map((item) => {
    const soma = item + item;
})
console.log(novoTeste);


// Arrow Function e [].map()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após o fat arrow =>.
const valores = [1.99, 2.49, 5];
const valoresX3 = valores.map(item => item * 3);
console.log(valoresX3);


// Diferença: .map() e .forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e pode iterar novamente estes valores.


// [].map() com objetos
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 15
    },
    {
        nome: 'JS',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

const nomeAulas = aulas.map(aula => aula.nome);
console.log(nomeAulas);

// const functionNomeAulas = function(aula) {
//     return aula.nome
// }
const functionNomeAulas = ((aula) => aula.nome);
const arrayNomeAula = aulas.map(functionNomeAulas);
console.log(arrayNomeAula);


// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas na verdade é apenas o retorno da iteração anterior.

const classes = [10, 25, 30];
const total = classes.reduce((acumulador, itemaAtual) => {
    return acumulador + itemaAtual;
})
console.log(total);

const total2 = classes.reduce((acumulador, aulas) => acumulador + aulas)
console.log(total2);

// testes:
const teste = [10, 20, 30];
const testeReduce = teste.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index, array);
    return acumulador + item;
}, 30); // O valor que vai iniciar. Se não passar nenhum valor inicial, ele vai pular a primeira iteração e começar a partir da segunda, transformará o acumulador no valor da primeira iteração, ou seja, o 10.
console.log(testeReduce);
// undefined 30 2 (3) [10, 20, 30] // Sem return
// Precisa utiliar o return

// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nos seguintes, retorna o valor da anterior.

const minutos = [10, 20, 30];

// 1
let acumulador = 20;
let item = 5;
console.log(minutos.reduce((acumulador, item) => {
    return 0 + 10;
}, 0));
// 2
console.log(minutos.reduce((acumulador, item) => {
    return 10 + 25;
}, 0));
// 3
console.log(minutos.reduce((acumulador, item) => {
    return 10 + 35;
}, 0));

// Descobrir qual é o maior valor com reduce
const numbers = [10, 25, 60, 5, 100];
const maiorValor = numbers.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);
// const maiorValor = numbers.reduce((anterior, atual) => {
//     if(anterior > atual) {
//         return anterior;
//     } else {
//         return atual;
//     }
// }, 0);

console.log(maiorValor);


