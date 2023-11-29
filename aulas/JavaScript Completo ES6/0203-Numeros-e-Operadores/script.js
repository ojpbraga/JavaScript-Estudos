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
console.log(pesoPorDois)