// Operadores Aritméticos Unários

var frase = 'Teste';
+frase; //NaN
-frase; //NaN

var idade = '15';
+idade; // 28 (number): ele transforma a string em number
-idade; // -28 (number)
console.log(+idade+5); // 20: multiplicação, divisão... Transforma string (sozinho) em number

// Exercício
// Crie expressão NaN
var expressao = 'Isso não é um number';
var expressao2 = 'Nem isso';
console.log(+expressao, -expressao2);

// Somar string 200 e número 50
console.log(+'200'+50)

// Incrementar 5 e retornar novo valor
var num = 5;
console.log(++num);

// Dividir peso por 2
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = numero / 2 + unidade;
console.log(pesoPorDois);

// Operador Lógico de navegação
// O operador ! nega uma operação booleana. Ou seja, !true é igual a false.
// if(!true){} // false
// if(!1){} // false
// if(!underfine){} // true
// if(!!' '){} // true
// if(!!''){} // false

// Operadores de Comparação
// == Comparação não tão restrita
10 == '10'; // true
10 == 10; // true

// === Comparação restrita
10 === '10'; // false
10 === 10; // true

// Diferente de (se for estrito: !==)
10 != 9; // true


// Boolean: verificar automaticamente se é true ou false
var x;
var formado = true;

if(formado) {
    console.log('formado')
    var x = 10;
} else {
    console.log('Não é formado')
}
console.log(x);

var nome = '';
if(nome) {
    console.log(nome)
} else {
    console.log('Não existe')
}

// 0 é valor falso. Se der 0, o resultado é falso. Precisa ser diferente de 0.
if((5-5) && (5+5)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// || Compara se uma expressão ou outra é verdadeira
true || true // true
true || false // true
false || true // true
'Gato'||'Cão' // 'Gato'
(5+5) || (5+5) // 10

console.log((5-5) || (5+5) || (10-2));
console.log((5-5) || (5+5) && (10-2));

// Switch
var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Azul');
        break;
    case 'Rosa':
        console.log('Rosa');
        break;
    case 'Vermelho':
        console.log('Vermelho');
        break;
    default:
        console.log('Nenhuma cor');
}

// Exercício:
// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 49;
var idadeParente = 50;
if(minhaIdade === idadeParente) {
    console.log('Mesma idade!');
} else if (minhaIdade > idadeParente) {
    console.log('Minha idade é maior!');
} else {
    console.log('Minha idade é menor!')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log((5 - 2) && (5 - ' ') && (5 - 2));
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome);
console.log(!!idade);
console.log(!!possuiDoutorado);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { // Considera o falso
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { // Considera o verdadeiro
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Lembrar de utlizar return
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc; // Senão tivesse return, retornaria Underfined
}
console.log(imc(67, 1.7));

// Objetos
var pessoa = {
    nome: 'JP',
    idade: 19,
}
console.log(typeof pessoa);
console.log(pessoa)

// Métodos
// Propriedade que possui uma função no local do seu valor
// O this faz referência ao próprio objeto
// È sempre importante colocar a vígula no final, mesmo que não há mais propriedade ou função
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    // ES6 é possível fazer a function de forma simplificada
    perimetro(lado) {
        return this.lados*lado;
    },
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(3));
console.table(pessoa);
// Exemplo de objeto é a biblioteca Math

// Senão tiver o this, ele vai pegar o valor do height de fora do escopo
var height = 100;
var menu = {
    width: 800,
    height: 60,
    backgroundColor: "#e7e7e7",
    metadeHeight() {
        return height / 2;
    },
}

menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function() {
    console.log('Escondeu');
}
console.log(menu.metadeHeight());
console.log(menu);


// Protótipo e Herança
// Objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
// Verifica se a propriedade foi criada no objeto:
console.log(menu.hasOwnProperty('backgroundColor'));

// Exercícios
// Crie um objeto com os seus dados pessoais
var eu = {
    nome: 'João',
    nomeMeio: 'Pedro',
    idade: 17,
    nomeCompleto() {
        return this.nome + " " + this.nomeMeio;
    }
}
console.log(eu, eu.nomeCompleto());
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeTodo = function() {
    return `${this.nome} ${this.nomeMeio}`;
}
console.log(eu.nomeTodo());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000;
console.log(carro);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cao = {
    nome: 'Dudu',
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'Ua-Ua!';
        }
    }
}
console.log(cao);
console.log(cao.latir('homem'));

// Métodos
// nome.length()
// altura.toString() // Transforma numero em string
// altura.toFixed() // Arredonda valor float


// Selecionando trazendo um objeto do html
// var btn = document.querySelector('.btn');

// esse elemento também possui métodos e propriedade, como:
// btn.addEventListener('click', function());
// btn.classList

// Exercícios
// nomeie 3 propriedades ou métodos de strings
var cachorro = "Spique";
// fixed
// length
// addEventListener

// nomeie 5 propriedades ou métodos de elementos do DOM
// var btn = document.getElementById('btn');
// btn.innerHTML()
// btn.toggleAttribute()
// btn.addEventListener()
// btn.value 
// btn.appendChild

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const botao = document.querySelector('.botao');
// console.log(botao)

botao.addEventListener('click', () => {
    var texto = document.querySelector('input');
    texto.select();

    navigator.clipboard.writeText(texto.value);
    alert("Texto copiad: " + texto.value);
})


// Array
var videoGames =['Switch', 'PS5', 'Xbox'];
console.log(videoGames[0]);
console.log(videoGames[2])

// Métodos
console.log(videoGames.pop()); // Remove o último item
videoGames.push('Nintendo');
console.log(videoGames);
console.log(videoGames.length);

// Loops: OK
var i = 0;
while (i < 10) {
    console.log(i);
    i++
}

var e = 5;
do {
    console.log(e);
} while (e < 5);

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    break;
    if(videoGames[item] === 'Nintendo') {
        console.log(videoGames[item]);
    }
}

// forEach(): OK
var frutas = ['Maça', 'Laranja', 'Pera'];
frutas.forEach((fruta, index, array) => {
    console.log(`${fruta} é uma delícia! Index: ${index}`);
    if(index === array.length - 1) {
        console.log(array);
    }
});

var numero = 0; 
var maximo = 10;
for(; numero < maximo;) {
    console.log(numero);
    numero++;
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilGanhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilGanhou.forEach((ano) => {
    console.log(`Brasil ganhou em ${ano}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if(frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

// Atribuição e Ternário
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Operador Ternário
// Abrevia as condições com if e else
// Não faz sentido utilizar pra boolean
var idade = 20;
diabetes = false;

var podeBeber = idade >= 18 && diabetes === false ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

// Outra forma de fazer o if
if(idade >= 18)
    console.log('Pode')
else
    console.log('Não pode')

// Exercício
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(scroll += 500);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
var resultadoCredito = possuiCasa && possuiCarro;
console.log(resultadoCredito);