// Get e Set
// Podemos definir comportamentos diferentes de get e set para um método.

const button = {
    get element() {
        return this._element; // ._ signinifica que é uma propriedade privada, não terá acesso fora desse objeto.
    },
    get tamanho() {
        return this._numero || 100; 
    },
    set tamanho(numero) {
        this._numero = numero * 200;
    }, 
    set element(tipo) {
        this._element = document.createElement(tipo);
    } 
}

button.element = 'button'; // set 
console.log(button.element); // get

button.tamanho = 400;
console.log(button.tamanho); // É necessário ter o método de set para alterar o tamanho.


// Valor Estático
// Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.

const matematica = {
    get PI() {
        return 3.14;
    }
}

matematica.PI = 20;
console.log(matematica.PI);

const quadrado = {
    set lado(numero) {
        return this._numero = numero;
    },
    get lado() {
        return this._numero = this._numero || 0;
    }
}
console.log(quadrado.lado)
quadrado.lado = 40;
console.log(quadrado.lado);


// Set
// Podemos ter um método com set apenas, que modifique outras propriedades do meu objeto.

const frutas = {
    lista: [],
    set nova(fruta) {
        this.lista.push(fruta);
    }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';
console.log(frutas.lista);


// Class
// Assim como em um objeto, as classes podem ter métodos de get e set.

class Button {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        // O set que não deveria criar o button e o get trazer as propriedades?
        const divElement = document.createElement('button');
        divElement.innerText = this.text;
        divElement.style.background = this.color;
        return divElement;
    }
}

const blueButton = new Button('Text', 'blue');
console.log(blueButton.element)
blueButton.element = 30; // Não é possível setar, pois não possui o método set
console.log(blueButton)


// utilizando o set
class Elemento {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    get element() {
        const type = this._elementType || 'div';
        const divElement = document.createElement(type);
        divElement.innerText = this.text;
        divElement.style.background = this.color;
        return divElement;
    }
    set element(type) {
        this._elementType = type;
    }
}

const divBlue = new Elemento('oii', 'blue');
divBlue.element = 'button';
console.log(divBlue.element);
divBlue.element = 'div';
console.log(divBlue.element);