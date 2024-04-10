// Fectory Function
// São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que contructor functions / classes.

// 'use strict'

function createButton(text) {
    function element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return {
        element, // chave com mesmo nome do valor
        text,
    }
}

const btnBlue = createButton('Comprar');
const btnRed = createButton('Vender');

console.log(btnBlue);
btnRed.element();


// Métodos / Variáveis privadas
// Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas

function criarPessoa(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;
     const senhaSecreta = "12354" // Ao utilizar, não terá acesso

    function andar() {
        return `${nomeCompleto} andou`;
    }
    function nadar() {
        return `${nomeCompleto} nadou`;
    }

    return Object.freeze({ // Não poderá mudar os valores
        nome,
        sobrenome,
        andar,
        nadar,
        // senhaSecreta, terá acesso se estiver no return
    })
}

const joao = criarPessoa("Joao", "Mario");
console.log(joao.senhaSecreta);

joao.nome = "Joaquim";
console.log(joao.nome);


// Contructor Function / Factory Function
// Uma fas vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra new. Também é possível fazer isso com uma Constructor Function.

function Pessoa(nome) {

    // this instanceof Pessoa ? console.log("Sim", this) : console.log("Não", this);

    if(!(this instanceof Pessoa)) // ou (!new.target)
        return new Pessoa(nome); // Se não for uma instancia de Pessoa (é window, no caso), ele o transforma em Pessoa utilizando o new.
    this.nome = nome
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`
}

const designer = Pessoa('JP');
const designerI = new Pessoa('JP');
console.log(designer)
console.log(designerI)


// Exemplo Real

function $$(selectedElements) {
    const elements = document.querySelectorAll(selectedElements);
  
    function on(onEvent, callback) {
      elements.forEach(element => {
        element.addEventListener(onEvent, callback);
      });
      return this; // retornar this irá funcionar da mesma forma. Necessário para encadear as funções
    }
  
    function hide() {
      elements.forEach(element => {
        element.style.display = 'none';
      });
      return this;
    }
  
    function show() {
      elements.forEach(element => {
        element.style.display = 'initial';
      });
      return this;
    }
  
    function addClass(className) {
      elements.forEach(element => {
        element.classList.add(className);
      });
      return this;
    }
  
    function removeClass(className) {
      elements.forEach(element => {
        element.classList.add(className);
      });
      return this;
    }
    
    return Object.freeze({
      elements,
      on,
      hide,
      show,
      addClass,
      removeClass,
    });
  }
  
  const buttons = $$('button');
  buttons.hide().show().addClass('ativo');
  console.log(buttons.elements);

  buttons.on('click', (event) => {
    event.target.innerText = "Clicado";
  })
  