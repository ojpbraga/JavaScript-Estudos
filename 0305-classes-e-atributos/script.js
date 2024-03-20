// ClassList 
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');
const animais = document.querySelector('.animais');

console.log(menu.classList);

// Adicionando classe:
menu.classList.add('ativo', 'teste');
// Removendo classes:
menu.classList.remove('azul');
// Adicionar/remover:
menu.classList.toggle('azul');
// Verificando true ou false
if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
} else {
    menu.classList('nao-possui-azul');
}

console.log(menu.classList);

// Remove e adiciona classes (antigo):
menu.className = 'apenas';
// Adicionando (concatenando) (antigo):
menu.className += ' vermelho';

console.log(menu.classList);

// Atributos
// Retorna um array com os atributos dos elementos:

console.log(animais.attributes);
console.log(animais.attributes.id)
// Como é um array, consigo chamar o atributo através do index:
console.log(animais.attributes[2]);
// Quando há variaveis que possuem hifem
console.log(animais.attributes['data-texto']);

console.log(animais.attributes);


// Métodos
// Retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');
console.log(img.src);
const srcImg = img.getAttribute('src');
console.log(srcImg);

// Adicionando atributo:
img.setAttribute('atributo', 'conteudo do atributo');

// Verificando se tem atributo:
console.log(img.hasAttribute('alt'));
console.log(img.hasAttribute('src'));
img.removeAttribute('src');

// getAttribute e setAttribute
// Métodos que retornam ou definem de acordo com o atributo selecionado
img.getAttribute('src'); // Valor do src
img.setAttribute('alt', 'Texto Alternativo'); // mudo alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// Read Only vs Writable
// Propriedades que não a mudança de seus valores, essas são consideradas Read Only

// Exemplo de Read Only:
animais.attributes = 'class="ativo"'; // não funciona, read-only

const carro = {
    portas: 4,
    andar: (km) => {
        console.log(`Carro andou ${km}`);
    },
}
carro.andar(32);
carro.portas = 20;
console.log(carro.portas);

// Exercício
// Adicione a classe ativo a todos os itens do menu
menu.classList.add('ativo');
console.log(menu.classList);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.classList.remove('ativo');
// menu.classList.add('ativo');
console.log(menu.classList);

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
const verificacao = [];
imgs.forEach((img) => {
    console.log(img.hasAttribute('alt'));
    verificacao.push(img.hasAttribute('alt'));
});
console.log(verificacao);
// Modifique o href do link externo no menu
menu.setAttribute('href', 'www.google.com');
console.log(menu.attributes);
// Forma correta:
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');