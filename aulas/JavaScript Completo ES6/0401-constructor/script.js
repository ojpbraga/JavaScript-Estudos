// Objetos
// Criar um objeto, definir uma variável e iniciar a definição do seu valor com chaves. Mas se necessário criar um novo objeto igual?

const carro = {
    marca: 'Marca',
    preco: 'preco',
}

// Não queremos isso:
const carro2 = {
    marca: 'Honda',
    preco: '2000',
}

var honda = carro;
honda.marca = 'Honda';
honda.preco = 2000;
console.log(honda);

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 10000;
console.log(fiat);
// Dessa forma estamos modificando o objeto, não o clonando. Observe:
console.log(honda);
console.log(fiat);
console.log('-------------------------------')


// Constructor Functions
// São responsáveis por construir novos objetos. Obs.: primeira letra é maiúscula

// new
// É responsável por criar um novo objeto baseado na função que passamos a frente.

function Carro() {
    this.marca = 'Marca';
    this.preco = 2000;
}

var honda = new Carro();
console.log(honda); //Objeto do tipo Carro

const Chevrolet = new Carro();
Chevrolet.marca = 'Chevrolet';
console.log(Chevrolet);

function Animal(nome, especie) {
    this.nome = nome;
    this.especie = especie;
}
const elefante = new Animal('Elefante', 'Girafa');
console.log(elefante);


// This
// faz referência ao próprio objeto construído com a constructor function

function contaBancaria(nome, deposito) {
    const taxa = 5;
    const rendendo = deposito * taxa;
    this.nome = nome;
    this.deposito = rendendo;
}

const Eduardo = new contaBancaria('Eduardo', 1000);
console.log(Eduardo)


// Exemplo real de um objeto
// Quando mudamos a propriedade seletor, o objeto irá passar a selecionar o novo seletor em seus métodos.

// const Dom = {
//     seletor: 'li',
//     element() {
//         console.log(this.seletor); // Porém queremos selecionar um elemento, fazemos assim:
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//         return elementoSelecionado;
//     }
// }

// Dom.element();
// // Dom.ativar();

// Dom.seletor = 'ul';
// // Dom.ativar();

function Dom(seletor) {
    this.seletor = seletor;
    this.element = function() {
        return document.querySelector(seletor);

    }
    this.ativar = function(classe) {
        return this.element().classList.add(classe);
    }
}

const li = new Dom('li');
console.log(li);
console.log(li.element());
li.ativar('reat');

const ul = new Dom('ul');
console.log(ul);

const lastLi = new Dom('li:last-child');
console.log(lastLi.element());
lastLi.ativar('ativo');

// Exercícios
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = function() {
        console.log(this.nome + ' andou!');
    }
  }
  const joao = new Pessoa('João', 20);
  const maria = new Pessoa('Maria', 25);
  const bruno = new Pessoa('Bruno', 15);
  console.log(joao, maria, bruno);
  joao.andar();
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos  

  function Manipulation(element) {
    this.element = element;
    this.element = function() {
        const elements = document.querySelectorAll(element);
        console.log(elements);
        return elements;
    }
    this.addClass = function(classe) {
        this.element().forEach((el) => {
            el.classList.add(classe);
        });
    }
    this.removeClass = function(classe) {
        this.element().forEach((el) => {
            el.classList.remove(classe);
        });
    }
  }
 
const lista = new Manipulation('li');
console.log(lista);

lista.element();
lista.addClass('testezinho');
lista.removeClass('testezinho');

const uls = new Manipulation('ul');
uls.addClass('ativar-ul');