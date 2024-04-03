// Subclass
// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.

class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log(`Empinou com ${this.rodas} rodas`);
    }
    acelerar() {
        console.log('Acelerou rápido')
    }
}

const honda = new Moto(2);
honda.empinar();
honda.acelerar();
const civic = new Veiculo(4);
// civic.empinar(); // Erro


// Super
// É possível utilizarmos a palavra super para falarmos com a classe pai e acessarmos os seus métodos e propriedade

class Barco {
    constructor(velocidade, combustivel) {
        this.velocidade = velocidade;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log(`Acelerou para ${this.velocidade*2}`);
    }
}

class Embarcacao extends Barco {
    constructor(velocidade, combustivel, qtdPessoas) {
        super(velocidade, combustivel);
        this.qtdPessoas = qtdPessoas;
    }
    acelerar() {
        super.acelerar(); // Vai chamar o método do pai
        console.log('Muito');
    }
}

const GG = new Embarcacao(10, 'Carvão', 15);
console.log(GG);
GG.acelerar();


// Super e Constructor
// Podemos utilizar o super para estendermos o método constructor.