// Destructuring
// Permite a destruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis

const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4
}

const {marca, ano, cor} = carro;

console.log(marca);
console.log(ano);
console.log(cor); // Passando algo que não existe


// Destructing Objects
// A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos.

const cliente = {
    nome: "João",
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.fisicas.cadernos);

// const {livros, videos} = cliente.compras.digitais;
// const {livros, videos} = cliente; // underfined, precisar estar no mesmo nível que o objeto

// console.log(livros);
// console.log(videos);


// Nesting
// É possível aninhar uma desestruturação dentro de outra
//                        Dentro de x desestruture
const {digitais, fisicas, digitais:{livros, videos}} = cliente.compras;

console.log(fisicas);
console.log(livros);
console.log(videos);


// Nome das Variáveis
// É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

// Valor Inicial
// Casi a propriedade não exista o valor padrão dela será underfined. É possível modificar este valor no momento da desestruturação

const proprietario = {
    nome: 'Maria',
    imoveis: 10,
    // email: 'gg@hh.com' // este valor prevalece
}

const {nome: nomeProprietario, imoveis: casasAluguel, email = 'mariahdudu@exemple.com'} = proprietario;
console.log(nomeProprietario);
console.log(casasAluguel);
console.log(email);


// Destructing Arrays
// Para desestruturar array's, você deve colocar as variáveis entre [] colchetes.

const frutas = ['Banana', 'Uva', 'Morango'];
// Nome não precisa ser igual, pois a referência é com números e não keys
const [primeira, segunda, terceira] = frutas;
console.log(primeira);
console.log(segunda);


// Declaração de Variáveis
// Podemos declarar uma sequência de variáveis.

const primeiro = 'Item 1';
const segundo = 'Item 2';
const terceiro = 'Item 3';
// ou
const [primeiroItem, segundoItem, terceiroItem] = ['item 1', 'item 2', 'item 3'];


// Argumento Desestruturado
// Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.
function handleKeybord(event) {
    console.log(event.key); // Se é um objeto, podemos desestruturar
}
// Com Destructuring
function handleKeybord({key, keyCode}) {
    console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeybord);


// Exercícios
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, color, margin} = btnStyles;
console.log(backgroundColor, color, margin);


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(bobCor);
