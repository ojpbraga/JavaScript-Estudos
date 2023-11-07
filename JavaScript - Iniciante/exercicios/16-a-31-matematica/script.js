const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const exibe = document.getElementById("bnt");

const somaExibir = document.getElementById("soma");
const restoExibe = document.getElementById("resto");
const imparParExibe = document.getElementById("impar-par");
const multiplicacaoExibe = document.getElementById("multiplicacao");
const porcentagemExibe = document.getElementById("porcentagem");
const idadeExibe = document.getElementById("idade");
const repeticao = document.getElementById("repeticao");
const tabuadaExibe = document.getElementById("tabuada");

// Exercício 16 e 17
function soma(valor1, valor2) {
    if (valor1 && valor2 != "") {
        somaExibir.innerText = valor1 + valor2;
    } else {
        somaExibir.innerText = 0;
    }
}

// Exercício 18
function resto(valor1, valor2) {
    restoExibe.innerText = valor1 % valor2;
}

// Exercício 19
function imparPar(valor1) {
    // Retornando apenas a parte inteira
    valor1 = Math.trunc(valor1);
    if (valor1 % 2 === 0) {
        imparParExibe.innerText = "Par";
    } else if (valor1 % 2 === 1) {
        imparParExibe.innerText = "impar";
        }
}

// Exercício 20
function multiplicacao(valor1, valor2) {
    multiplicacaoExibe.innerText = valor1 * valor2;
}

// Exercício 21
function porcentagem(valor1) {
    porcentagemExibe.innerText = (5/100)*valor1;
}

// Exercício 22
function idade(valor1) {
    let dataAtual = new Date().getFullYear();
    valor1 = dataAtual - valor1;
    if (valor1 => 18) {
        idadeExibe.innerText = "Maior de idade!";
    } else {
        idadeExibe.innerText = "Menor de idade!";
    }

}

// Exercício 23
repeticao.innerText = "Repetição";

// Exercício 24
for (let index = 0; index <= 1; index++) {
    repeticao.innerText = repeticao.innerText + " " + "Repetição";
}

// Exercício 25
for (let index = 0; index <= 20; index++) {
    repeticao.innerText = repeticao.innerText + " " + "Repetição";
}

// Exercício 26
const listaRepeticao = ['ForEach 1', 'ForEach 2', 'ForEach 3', 'ForEach 4', 'ForEach 5'];
listaRepeticao.forEach( (item) => {
    repeticao.innerText = repeticao.innerText + " " + item;
})

// Exercício 27
var contador = 0;
while (contador <= 20) {
    repeticao.innerText = repeticao.innerText + " " + "While";
    contador++;
}

// Exercício 28
var i = 0;
do {
    repeticao.innerText = repeticao.innerText + " " + "doWhile";
    i++;
} while (i <= 4);

// Exercício 29
for (let index = 0; index <= 10; index++) {
    repeticao.innerText = repeticao.innerText + " " + index;
}

// Exercício 30
repeticao.innerText = repeticao.innerText + " " + "Pares:"
for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
        repeticao.innerText = repeticao.innerText + " " + index;
    }
}

// Exercício 31
for (let cont1 = 1; cont1 <= 10; cont1++){
    for (let cont2 = 1; cont2 <= 10; cont2++) {
        tabuadaExibe.innerText = tabuadaExibe.innerText + "\n" + cont1 + " * " + cont2+ " = " + cont1 * cont2;
    }
}

exibe.addEventListener('click', () => {
    soma(Number(num1.value), Number(num2.value));

    resto(Number(num1.value), Number(num2.value));

    imparPar(Number(num1.value));

    multiplicacao(Number(num1.value), Number(num2.value));

    porcentagem(Number(num1.value));

    idade(Number(num1.value));
    
})