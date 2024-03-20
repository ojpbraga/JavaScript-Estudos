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

//  [].copyWithin() REVISAR
// .copyWhithin()(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do início até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como início o 0 e final o valor total da array.

console.log(['item1', 'item 2', 'item 3', 'item 4', 'item 5'].copyWithin(2, 0, 2));


// [].fill()
// .fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
console.log(['item1', 'item 2', 'item 3', 'item 4'].fill('Banana', 1, 3));
console.log(['item1', 'item 2', 'item 3', 'item 4'].fill('Banana'));


// Métodos de acesso [].concat()
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada .concat() irá concatenar a array com o valor passado.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);


// [].includes(), [].indexOf e [].lastIndexOf()
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css'));
console.log(linguagens.includes('ruby'));
console.log(linguagens.indexOf('python'));
console.log(linguagens.indexOf('js'));
console.log(linguagens.lastIndexOf('js'));


// [].join()
// .join() junta a array em uma string única
console.log(linguagens.join()); // html,css,js,php...
console.log(linguagens.join('')); // htmlcssjsphp...
console.log(linguagens.join(' ')); // html css js php...
console.log(linguagens.join('-_-')) // html-_-css-_-js-_-php

let htmlString = '<h2>Título</h2>';
htmlString = htmlString.split('h2');
console.log(htmlString);
htmlString = htmlString.join('h1');
console.log(htmlString);


// [].slice()
// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor final.
// linguagens;
console.log(linguagens);
console.log(linguagens.slice(3));
console.log(linguagens.slice(1, 4));

// Muito comum  CLONAR ARRAY UTILIZANDO SLICE
// se clonar direto (clone = linguagens), estaremos fazendo uma referência a array linguagens original, ou seja, os métodos atribuídos ao clone, modificaram a array original. Quando utilizamos o slice (clone = linguagens.clice()), estaremos clonando o resultado do método, ou seja, a array original não sofrerá alteração.
const cloneLinguagens = linguagens.slice();
linguagens.pop();
console.log(linguagens);
console.log(cloneLinguagens);


// Exercícios
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiraComida = comidas.shift();
console.log(primeiraComida);
console.log(comidas)

const ultimaComida = comidas.pop();
console.log(ultimaComida);
console.log(comidas);

// comidas.splice(comidas.length, 0, 'Arroz');
comidas.push('Arroz');
console.log(comidas);

// comidas.splice(0, 0, 'Peixa', 'Batata');
comidas.unshift('Peixe', 'Batata');
console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort().reverse();
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));
console.log(estudantes);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html)

const automoveis = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneAutomoveis = automoveis.slice();
automoveis.pop();
console.log(automoveis);
console.log(cloneAutomoveis);