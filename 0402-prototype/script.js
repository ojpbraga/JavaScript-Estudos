// Prototype
// a propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function teste() {
    return 1+1;
}

console.log(teste.prototype);

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        return 'Andou pelo objeto';
    }
}

console.log(Pessoa.prototype)

const andre = new Pessoa('André', 28);
console.log(andre.prototype); // Porque André é um objeto e não uma função


// funcao.prototype
// É possível adicionar novas propriedades e métodos ao objeto prototype.
Pessoa.prototype.andar = function() {
    return 'Andou';
}
Pessoa.prototype.nadar = function() {
    return 'Nadou!';
}

console.log(Pessoa.prototype);
// Os métodos também são acessados através da construção do objeto.
console.log(andre.andar()); // Primeiro ele verifaca o objeto e depois o prototypo

// Acesso ao Protótipo
// O objeto criado utilizando o construtor, possui aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade e funções

// proto
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente. Não muito usado.
// Acessam o mesmo método, mas proto não terá acesso ao this.
// andre.__proto__.andar()

// Herança de protótipo
// O objeto possio acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
console.log(Object.prototype);
console.log(Pessoa.prototype);

// Construtores Nativos
// Objetos, funções, números, strings e outros são tipos de dados criados utilizando connstrutores. Esse construtores possuem um protótipo com proprieades e métodos, que poderão ser acessados pelo tipo de dado.

const pais = 'Brasil';
console.log(pais);
const cidade = new String('Rio');
console.log(cidade);
// Ver o que está no index:
console.log(pais.charAt(0));
console.log(pais.charAt(1));
console.log(cidade.charAt(0));
console.log(cidade.charAt(1));

console.log(String.prototype);

// É comum acessar a função do protótipo
// Existe o método Array.from();
console.log(String.prototype.toLocaleLowerCase());

const listaAnimais = ['Cachorro', 'Gato', 'Capivara'];
console.log(listaAnimais);

// Transformando em Array
const lista = document.querySelectorAll("li");
console.log(lista)
console.log(Array.prototype.slice.call(lista));


// Métodos do objeto vs Protótipo
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

console.log(Array.from(lista)); // Atual // criado com construtor array // Não possui método from do prototipy

// Retorna uma lista com os métodos e proprieades:
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log('----------------------');
console.log(Object.getOwnPropertyNames(andre));
console.log(Object.getOwnPropertyNames(Pessoa.prototype));

// dado.constructor.name retorna o nome do construtor

// Apenas os métodos do protótipo são herdados
console.log([1, 2, 3].slice()); // existe
// console.log([1, 2, 3].from()); // não existe // erro

// Entenda o que está sendo retornado
const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

console.log(typeof Carro); // métodos de objeto
console.log(typeof Carro.marca); // métodos de string, não tem acesso aos métodos de objeto
// Ex.:
console.log(Carro.marca.toLocaleUpperCase());

// No caso de funções: métodos do valor que retornar a função
console.log(typeof Carro.andar()); // boolean

Carro.andar; // conseguimos acessar métodos e propriedades do construtor function, quando não ativamos a função:
console.log(Carro.andar.constructor.name);
console.log(Carro.andar().constructor.name);

// Exercícios
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + " " + this.sobrenome;
}

const jao = new Pessoa('João', 'Pedro', 20);
console.log(jao.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype)); // com D maiusculo é a função construtora, com minusculo é o objeto construido por ele

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
li.click(); // underfined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
console.log(li.hidden.constructor.name); // boolean
const teste2 = li.hidden.constructor.name;
console.log(teste2.constructor.name); // string