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