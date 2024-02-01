// Function
// Toda função é criada com o construcor Function e por isso herda as suas propriedades e métodos
function areaQuadrado(lado) {
    return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado *4'); // Nunca criaremos assim
console.log(perimetroQuadrado(5));

// Propriedades
// .lenght retorna o total de argumentos (parâmetros) da função
// .name retorna uma string com o nome da função
function somar(n1, n2) {
    return n1 + n2 + ' ';
}
console.log(somar(3, 3));
console.log(somar(3, 3).charAt(0)); // retornando um array
console.log(somar.length);
console.log(somar.name);


// function.call()
// Executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
    marca: 'Ford',
    ano: 2018
}

window.marca = 'FG'; // Teste: não faça
window.ano = 2029; // Ao invés de underfined, a função retorna esse valores, pois o this pertence ao objeto window

function descricaoCarro(velocidade) {
    console.log(this) // faz referência ao window
    console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
}

console.log(descricaoCarro());
console.log(descricaoCarro.call());
console.log(descricaoCarro.call(carro));

// Conseguimos substituir o call com um novo objeto
descricaoCarro.call({marca: 'Fiat', ano: 2040}, 1000);


// Teste
// function darOi(nome) {
//     console.log('Oi ' + nome);
// }
// darOi.call({}, 'JP'); // Posso passar um novo valor de this


// this
// This faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência de método ao this utilizando o call()
const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
    console.log(item);
});

carros.forEach.call(carros, (item) => {
    console.log(item);
});

const frutas = ['Banana', 'Pêra', 'Uva'];
// Substituímos o this do forEach(carros) com o .call(frutas...
carros.forEach.call(frutas, (item) => {
    console.log(item);
}); // Retorna frutas

frutas.forEach.call(carros, (item) => {
    console.log(item);
}); // Retorna carros

// Exemplo real:
// O objeto atribuído a lista será substituído pelo primeiro argumento de call()
function Dom(seletor) {
    this.element = document.querySelector(seletor);
    console.log(this.element)
};

// se quiser adicionar uma nova função a construtora (via prototype)
Dom.prototype.ativo = function(classe) {
    console.log(this);
    this.element.classList.add(classe);
}; //Fazemos dessa forma, pois estamos atribuindo uma nova função a propriedade prototype.

const ul = new Dom("ul");
console.log(ul);
ul.ativo('ativar');
console.log(ul);

// Para utilizarmos o call, precisaremos criar um novo objeto parecido sempre.
const li = {
    element: document.querySelector('li')
};
//       elemento, classe/parâmetro da função
// ul.ativo.call(li, 'ativo');

// Como utilizaremos / muito comum:
Dom.prototype.ativo.call(li, 'ativar');


// Array e call
// É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array (array-like)
Array.prototype.mostreThis = function() {
    console.log(this);
}

const mercado = ['Biscoito', 'Pão', 'Doce'];
mercado.mostreThis();

Array.prototype.pop.call(mercado); // Remove Doce
mercado.pop(); // faz a mesma coisa


// Array-like
// HTMLCollection, NodeList e demais objetos do DOM, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.
const listasHtml = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(listasHtml, (item) => {
    return item.classList.contains('ativar');
});
console.log(filtro);

// Array-like: objetos que se parecam com array. Ex.:
const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    3: 'Item 4',
    length: 4, // Precisa ter
}
// Ou seja, qualquer objeto que tenha esse formato, eu posso utilizar os métodos do prototype de array.
// Poderia ter transformado a listasHtml em array (array.from()) e utilizar os próprios métodos de array (filter), porém utilizamos o método que está no prototype de array, usando o call().


// function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
const numeros = [3, 4, 6, 1, 34, 44, 32];

console.log(Math.max(numeros)); // Não funciona pois Math.max é um método de array-like
console.log(Math.max.apply(null, numeros)); // Substitui cada item da array por um argumento
console.log(Math.max.call(null, 3, 4, 6, 1, 34, 44, 32));

// Podemos passar null para o valor de this, caso a função não utilize o objeto principal para funcionar.


// function.bind()
// Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this
console.log(listasHtml);

const filtrarListas = Array.prototype.filter.bind(listasHtml, (item) => {
    return item.classList.contains('ativar');
});
console.log(filtrarListas());

// Ex.:
const $ = document.querySelectorAll.bind(document);
console.log($('li')); // retorna a função em um novo contexto de this

const $1 = document.querySelectorAll.bind(document, 'ul'); // Neste caso, um argumento foi passado
console.log($1()); // retorna a função em um novo contexto de this


// Argumentos e Bind
// Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.
const veiculo = {
    marca: 'Ford',
    ano: 2028,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}
console.log(veiculo.acelerar(100, 20));

const honda = {
    marca: 'Honda',
};
const acelerarHonda = veiculo.acelerar.bind(honda);
const acelerarHondaTeste = veiculo.acelerar.bind(honda, 100, 20);
console.log(acelerarHonda(200, 10));
console.log(acelerarHondaTeste());


// Argumentos Comuns
// Podemos passar argumentos padrões para uma função e retornar uma nova função

function imc(altura, peso) {
    return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

console.log(imc(1.80, 70));
console.log(imc180(70));


// Exercício
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const qtdLetras = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    item = item.textContent.length;
    return acumulador + item;
}, 0);
console.log(qtdLetras);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novosElementos(tag, classe, conteudo) {
    // document.querySelector('body').innerHTML += document.querySelector('body').innerHTML = `<${tag} class="${classe}">${conteudo}</${tag}>`;

    // return document.querySelector('body');

    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
    
}
novosElementos('h1', 'teste', 'OIII');
console.log(novosElementos('h2', 'teste', 'OI'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novoH1 = novosElementos.bind(null, 'h1', 'titulo');
novoH1('Dinâmico');
console.log(novoH1('Jão'));