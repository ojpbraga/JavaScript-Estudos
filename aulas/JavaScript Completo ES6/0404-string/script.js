// String
// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

const comida = 'Pizza'; // string
console.log(comida);

const liquido = new String('Agua'); // Objeto
console.log(liquido);

// str.lenght
// Quantidade de caracteres
console.log(comida.length);
console.log(comida[0]);
console.log(comida[1]);
console.log(comida[comida.length - 1]);

// str.charAt(n)
// Retorna o caracter de acordo com o index de (n)
const linguagem = 'Javascript';

console.log(linguagem.charAt(0));
console.log(linguagem.charAt(1));

// Diferença:
console.log(linguagem.length);
console.log(linguagem.charAt(linguagem.length));

// str.concat(str2, str3, ...)
// Concatena as string e retorna o resultado
const frase = comida.concat(linguagem, '!!', 'Eii');
console.log(frase)

// str.includes(search, position)
// Procura dentro da string(frase) outra string(palavra). Case sensitive.

const fruta = 'banana';
const listaFrutas = 'Melancia, pera, banana, limao';

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

// Posição: a partir de qual index deverá ser proucurado
console.log(listaFrutas.includes(fruta, 14));


// str.endsWith(search) e str.startsWith(search)
// Procura pela string exata dentro de outra string
fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true

console.log(fruta.startsWith('ba')); // false, porque é case sensitive
console.log(fruta.endsWith('na')); // true


// str.slice(star, end)
// Corta a string de acordo com os valores de start e end

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedores';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));
console.log(transacao1.slice(5));
console.log(transacao1.slice(5, 9));
console.log(transacao1.slice(0, -2));
console.log(transacao1.slice(-5));

// str.substring(start, end)
// Corta a string de acordo com os valores de start e end. Não funcionar com os valores negativos como o slice.

console.log(linguagem.substring(3, 5));
console.log(linguagem.substring(0, 4));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-3));

// str.indexOf(search) e str.lastIndexOf(search)
// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastindexOf ele retorna o último resultado.

console.log(fruta.indexOf('B'));
console.log (fruta.indexOf('n'));
console.log(fruta.lastIndexOf('n'));
console.log(fruta.lastIndexOf('na'));

// str.padStar(n, str) e str.padEnd(n, str)
// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passam n = 10, ela passará a ter 10 caracteres.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
})

console.log(listaPrecos[0].padStart(20, "-"));

// str.repeat(n)
// Repete a string (n) vezes
const fraseRepetir = 'tá';
console.log(fraseRepetir.repeat(5));

// str.replace(regexp|substr, newsstr|function)
// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisa Bonés Calças Bermudar Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);
// Ex.:
console.log(listaItens.replace('Camisa', 'Chinelo'))

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // R$ 1200.43
console.log(preco);


// str.split(padrao)
// Divide a string de acordo com o padrão passado e retorna uma array.
listaItens;
const arrayItens = listaItens.split(', '); // retorna array com itens da lista
console.log(arrayItens);

const listaSingular = listaItens.split('s, ');
console.log(listaSingular);
console.log(listaItens.split('l'));
console.log(listaItens.split(''));

// Muito comum:
let htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
htmlText = htmlText.split('div');

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join('a'));
console.log(frutasArray.join(', '));

// O que posso fazer: (tranformando a div em section)
const novoHtml = htmlText.join('section');
console.log(novoHtml);


// str.toLowerCase() e str.toUpperCase()
// Transforma em letra maiúscula e minúscula.

// str.trim(), str.trimStart() e str.trimEnd()
// Remove espaço em branco do início ou final de uma string

const valor = ' R$ 23.00 ';
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());


// Exercícios
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

let transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  transacoes.forEach((item) => {
    console.log(item.descricao);
    if(item.descricao.search('Taxa')) {
        console.log('tem taxa');
        console.log(item.descricao.search('Taxa'))
    }
  })
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  // Retorne o último caracter da frase
  const fraseExercicio = 'Melhor do ano!';
  
  // Retorne o total de taxas
transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  