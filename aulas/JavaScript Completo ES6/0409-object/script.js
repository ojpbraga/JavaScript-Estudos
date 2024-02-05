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
casa.entradas = 4; // set
console.log(casa.entradas);