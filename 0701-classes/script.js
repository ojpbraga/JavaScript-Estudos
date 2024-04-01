// Constructor Function
// Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.

function Button(text, background) {
    this.text = text;
    this.background = background;
}

Button.prototype.element = function() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    document.body.appendChild(buttonElement);
    return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');
blueButton.element();


// Class
// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizando o sistema de protótipos de uma função construtora para criar a classe.

class Button2 {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        document.body.appendChild(buttonElement);
        return buttonElement;
    }
}

const greenButton = new Button2('Comprar', 'green');
greenButton.element();
console.log(greenButton);

// Class vs Constructor Function
class Test {
    constructor(propriedade) {
        this.propriedade = propriedade;
    } 
    metodo1() {}
    metodo2() {}
}

function Test2(propriedade) {
    this.propriedade = propriedade;
}
Test2.prototype.metodo1 = function() {};
Test2.prototype.metodo2 = function() {};

// Constructor 
// O método constructor(args) {} é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o construtor.


// Por default, o retorno do objeto será o this do constructor, porém podemos retornar uma função do objeto.

class Button3 {
    constructor(text, background) {
        this.text = text;
        this.background = background;
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const yellowButton = new Button3('return', 'yellow');
yellowButton.appendTo('body');

// This
// Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this.


class Button4 {
    constructor(text, background) {
        this.text = text;
        this.background = background;
        return this.element();
    }
    element() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        document.body.appendChild(buttonElement);
        return buttonElement;
    }
}


// Propriedades
// Podemos passar qualquer valor dentro de uma propriedade
class Car {
    constructor(options) {
        this.options = options;
    }
}

const blueOptionsCar = {
    backgroundColor: 'blue',
    color: 'blue',
    text: 'Clique',
    borderRadius: '4px'
}

const blueCar = new Car(blueOptionsCar);
console.log(blueCar);


// Static vs Prototype
// Por padrão, todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra static. Assim como [].map é o método de uma array e Array.from() é um método do construtor Array.

class Quadrado {
    constructor(options) {
        this.options = options;
    }
    static createQuadrado(altura, largura, background) {
        const quadradoElement = document.createElement('div');
        quadradoElement.classList.add('quadrado');
        quadradoElement.style.height = altura + 'px';
        quadradoElement.style.width = largura + 'px';
        quadradoElement.style.background = background;
        return quadradoElement;
        // Não é necessário utilizar o this aqui, pois não é um parâmetro do constructor.
    }
}

const quadradoStatic = Quadrado.createQuadrado(40, 40, 'blue');
console.log(quadradoStatic)
document.body.appendChild(quadradoStatic)


// Static
// Você pode utilizar um método static para retornar a própria classe como propriedade já pré definidas.
// Criar um objeto com parâmetros já preenchidos

class Circulo {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
        return this.appendTo('body');
    }
    element() {
        const divElement = document.createElement('div');
        divElement.style.height = this.height + 'px';
        divElement.style.width = this.width + 'px';
        divElement.style.background = this.color;
        divElement.style.borderRadius = '100%';
        return divElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    
    static pinkCircle(height, width) {
        new Circulo(height, width, 'pink');
    }
}

const greenCircle = new Circulo(30, 30, 'green');
Circulo.pinkCircle(40, 50);
