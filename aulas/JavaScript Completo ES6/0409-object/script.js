// Object
// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
const carro = {
    marca: 'Ford',
    ano: 2018,
}

const pessoa = new Object({
    nome: 'João',
    idade: 18,
})

// Métodos de Object
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const veiculo = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return this.marca + ' Acelerou!';
    },
    buzinar() {
        return this.marca + ' Buzinou!';
    }
}

// console.log(veiculo.init('Ford');

const honda = Object.create(veiculo); // Possui todas as propriedades de veiculo
honda.init('Honda');
console.log(honda);
console.log(honda.acelerar());

const ferrari = Object.create(veiculo).init('Ferrari');
console.log(ferrari.acelerar());


// Object.assing()
// Object.assing(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assing irá modificar o objeto alvo.
const funcaoAotomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

// Object.assign(moto, funcaoAotomovel); // Não vai para o prototype
Object.assign(moto, funcaoAotomovel, carro); // Recebe tanto os métodos de automovél e carro
console.log(moto);


// Object.defineProperties()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades
// Adiciona propriedades imutáveis

const motoHome = {
    capacete: true,
}

Object.defineProperties(motoHome, {
    rodas: {
        value: 2,
        configurable: false, // Impede deletar e mudar o valor
        writable: true, // consegue mudar o valor
        enumerable: false, // torna enumaravel 
    },
})

motoHome.rodas = 5;
delete moto.rodas; // deletar propriedades (neste caso não funcionará)
delete motoHome.capacete;
console.log(motoHome);


// get e set
// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao adicionarmos uma propriedade obj.propriedade a função get é ativada e ao setarmos obj.propriedade = 'valor' a função de set é atividade

const casa = {
    trancada: true,
};

Object.defineProperties(casa, {
    entradas: {
        enumerable: true,
        get() { // pega a informação
            // return 2;
            return this._entradas; // "._" para não dar conflito
        },
        set(valor) { // inclui a informação
            this._entradas = valor * 4 + ' Total de entradas'; // Precisamos colocar em uma variavel que get possui acesso
        },
    },
})

console.log(casa)
console.log(casa.entradas);
// casa.entradas = 4; // set
console.log(casa.entradas);


// Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto, com as suas derivadas configurações.

console.log(Object.getOwnPropertyDescriptors(Array));
// Métodos e propriedades de Array

console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// Lista com métodos e propriedades do protótipo de Array

console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'));
// Puxa de uma única propriedade

console.log(Object.getOwnPropertyDescriptors(window));
console.log(Object.getOwnPropertyDescriptors(casa));


// Object.keys(obj), Object.values(obj) e Object.entries(obj)
// Object.values(obj) retorna uma array com as chaves de todas as propriedades diretas e enumaráveis do objeto.
// Object.values(obj) retorna uma array com os valores do objeto
// Object.entries(obj) retorna uma array com arrays contendo a chave e valor

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const automovel = {
    marca: 'Ford',
    ano: 2018,
}

console.log(Object.keys(carro)); // retorna as chaves "marca" e "ano"

console.log(Object.values(carro)); // retorna os valores do objeto

console.log(Object.entries(carro)); // retorna a chave e o valor

// Alguns métodos quando utilizado o getOwnPropertyDescriptors não aparecerão, porque encontram-se com enumerable: false

// Ex.:
console.log(Object.keys(casa)); // ['trancada', '_entradas']

// Depois de adicionado enumerable na propriedade:
console.log(Object.keys(casa)); // ['trancada', 'entradas', '_entradas']

console.log(Object.values(casa));

console.log(Object.entries(casa));


// Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

console.log(Object.getOwnPropertyNames(Array)); // Propriedades diretas do objeto
// ['length', 'name', 'prototype', 'isArray', 'from', 'of', 'fromAsync']
// Retorna os não enumeráveis também, diferente dos keys

console.log(Object.getOwnPropertyNames(Array.prototype));
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const ford = {
    marca: 'Ford',
    ano: 2018,
} 

console.log(Object.getOwnPropertyNames(ford));


// Object.getPrototypeOf() e Object.is()
// Object.getPrototypeOf() retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

const frutas = ['Banana', 'Pêra'];

console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype); // É o mesmo retorno
console.log(Object.getPrototypeOf(' '));

const frutas1 = ['Banana', 'Pêra'];
const novaFruta = frutas1;
const frutas2 = ['Banana', 'Pêra'];

console.log(Object.is(frutas1, frutas2)); // false, pois não são o mesmo objeto, ou seja, se eu modificar uma das arrays, a outra não será alterada
console.log(Object.is(frutas1, novaFruta));


// Object.freeze(), Object.seal(), Object.preventExtensions()
// Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.

console.log(carro);

Object.preventExtensions(carro);
carro.portas = 4;
delete carro.marca;

Object.seal(carro); // Não pode deletar, nem adicionar
carro.portas = 4;
delete carro.ano;

Object.freeze(carro);
carro.marca = 'Honda';
console.log(carro);

console.log(Object.isFrozen(carro)); 
console.log(Object.isExtensible(carro));
console.log(Object.isSealed(carro)); // Só é extensivel, quando não se previne a extensão


// Propriedades e Métodos do Protótipo
// Já que tudo em JS é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.

const mercado = ['Banana', 'Uva'];
console.log(mercado.constructor);
console.log(''.constructor);

console.log(mercado.hasOwnProperty('map')); // false, pois é uma propriedade de Array.prototype, não é enumerável


// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
// Verifica se o objeto possui a propriedade. Verifica a propriedade direta do objeto e não a do prototype (não enumeráveis). O {}.propertyisEnumerable() verifica se a propriedade é enumerável.

console.log(mercado);

console.log(mercado.hasOwnProperty('map'));
console.log(Array.hasOwnProperty('map'));
console.log(Array.prototype.hasOwnProperty('map'));

console.log(Array.prototype.propertyIsEnumerable('map'));
console.log(window.propertyIsEnumerable('innerHeight'));


// {}.isPrototype(valor);
// Verifica se é protótipo do valor passado
console.log(Array.prototype.isPrototypeOf(mercado));
console.log(String.prototype.isPrototypeOf('S'))


// {}.toString
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor)

console.log(mercado);
console.log(mercado.toString());
console.log(typeof mercado);
console.log(Object.prototype.toString.call(mercado));

const frase = 'Uma string';
console.log(frase.toString());
console.log(typeof frase);
console.log(Object.prototype.toString.call(frase));

const carroLuxo = {marca: 'Ford'};
console.log(carroLuxo.toString());
console.log(typeof carroLuxo);
console.log(Object.prototype.toString.call(carroLuxo));
