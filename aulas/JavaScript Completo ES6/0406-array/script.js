// Arrays
// Armazenam uma coleção de elementos. Podem ser strings, arrays, number...

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) {console.log(nome, " andou!")}];

console.log(dados[2]('João'));
console.log(dados[1]);
console.log(dados[1][2].cor);

// Construção de Array
const chaves = ['Cha', 'Ves'];

const carros = new Array('Corola', 'Mustang', 'Ferrari');
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[10] = 'Parati');
console.log(carros.length);

// Array.from()
// É um método para transformar array-like objects em uma array.
const li = document.querySelectorAll("li");
console.log(li); // array-like
const arrayLi = Array.from(li);
console.log(arrayLi); // Array

const obj = {
    0: 'Andre',
    1: 'Juse',
    2: 'Aleandro',
    length: 3, // É necessário ter o lenght
}
console.log(obj)
const arrayObj = Array.from(obj);
console.log(arrayObj)

// Array.isArray()
// Verifica se é uma array ou não
console.log(Array.isArray(obj));
console.log(Array.isArray(arrayObj));


// Array.of(), Array() e new Array()
// Verifica se o valor passado é uma array e retorna um valor boolean. A palavra new não é necessariamente para utilizar o construtor Array.
Array.of(10); // [10] Cria array conforme passo os argumentos
Array.of[1, 2, 3, 4]; // [1, 2, 3, 4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1, 2, 3, 4]


// Propriedades e métodos do Prototype
// [].lenght retorna o tamanho da array

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length);

console.log(frutas[0].length);
console.log(frutas[1].length);
console.log(frutas[2].length);
console.log(frutas[2][1].length);


// Métodos Modificadores [].sort()
// Métodos que modificam o array original. Organiza pelo unicode.
const instrumentosMusicais = ['Baixo', 'Violão', 'Guitarra'];
console.log(instrumentosMusicais)
console.log(instrumentosMusicais.sort());

const idades = [1, 23, 0, 2, 10, 83];
idades.sort() // Ele modifica o array original
console.log(idades);


// [].unshift() e [].push()
// unshift() adiciona elementos ao início da array e retorna o lenght da mesma. .push() adiciona elementos ao final da array e retorna o lenght da mesma.
const marcas = ['Ford', 'Fiat', 'VW'];
marcas.unshift('Honda', 'Kia');
console.log(marcas);

marcas.push('Ferrari');
console.log(marcas);
// Se eu colocar o array em uma variável, irá me retornar o tamanho da array
const variavel = marcas.push('Cyth');
console.log(variavel);


// [].shift() e [].pop()
// shift() remove o primeiro elemento da array e retorna o mesmo. pop() remove o último elemento da array e retorna o mesmo.
console.log(marcas);

// marcas.shift();
console.log(marcas.shift());
console.log(marcas);

// marcas.pop();
console.log(marcas.pop());
console.log(marcas);

// [].reverse()
// inverte a ordem da array e retorna uma nova array
console.log(marcas.reverse());
console.log(marcas);


// [].splice()
// .splice(index, remover, item 1, item 2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

const streaming = ['Netflix', 'HBO', 'Globo', 'Star'];
streaming.splice(1, 0, 'Disney+'); 
streaming.splice(5, 0, 'Paramount');
console.log(streaming);

streaming.splice(3, 2, 'Ferrari');
console.log(streaming.splice(1, 1, 'Wizard')); // retorna o item removido
console.log(streaming);