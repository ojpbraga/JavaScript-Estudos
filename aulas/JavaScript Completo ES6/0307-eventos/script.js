// Eventos
// Adiciona uma função ao elemento, esta chamada de callback, que será atividade que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

img.addEventListener('click', () => {
    console.log('Clicou');
});

// Callback
// É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.

// Event
// O primeiro parâmetro  do callback é referente ao evento que ocorreu. Geralmente usa e como nome do parâmetro
function callback(event) {
    console.log('Clicou');
    console.log(event);
}

img.addEventListener('click', callback);
img.addEventListener('click', callback()); // underfined, pois está sendo ativado
img.addEventListener('click', () => {
    console.log('Clicou');
});
img.addEventListener('clicou', () => {
    console.log('Clicou');
});

// Propriedades do Event
const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    console.log(event.currentTarget); // Representa o elemento ao qual o ouvinte (animaisLista) está associado. Quando quero me referir especificamente ao elemento pai
    console.log(event.target); // Onde o clique correu, elemento que foi clicado
    console.log(event.type); // Tipo de evento (ex.: click)
}

animaisLista.addEventListener('click', executarCallback);


// event.preventDefault()
// Previne o comportamento padrão do evento no browser. No caso do link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(e) {
    // Se eu clicasse no link, iria me mandar para outra página, mas por conta desse método, isso não ocorrerá.
    e.preventDefault();
    console.log('Clicou link externo');

    console.log(this);
    console.log(this.getAttribute('href')); // Posso usar os mesmo métodos de elementos
    console.log(e.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);


// This
// A palavra chave this é uma palavra que faz referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que o addEventListener foi adicionado.

// Diferentes Eventos
// Existem outros eventos como: click, resize, keydown, keyup, mouseenter e mais. Também podemos usar window e document também.

const h1 = document.querySelector('h1');

function hedleEvent(e) {
    // console.log(e.type, e);
}

h1.addEventListener('click', hedleEvent);
h1.addEventListener('mouseenter', hedleEvent);
h1.addEventListener('mousemove', hedleEvent);

window.addEventListener('scroll', hedleEvent);
window.addEventListener('resize', hedleEvent); // Redimensionar janela
window.addEventListener('keydown', hedleEvent);

// Keybord 
let digitado;
window.addEventListener('keydown', (e)=> {
    console.log(e.key);
    console.log(digitado += e.key);
    if(e.key === 'f' ) {
        document.body.classList.toggle('fullscreen');
    } else if (e.key === 'a') {
        document.body.style.background = 'blue';
    }
});

//  ------------------------------------------

// forEach e Eventos
// O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos para adicionar a cada um deles.

const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach((img) => {
    img.addEventListener('click', (e) => {
        console.log(e.currentTarget.getAttribute('src'));
    });
});

// Exercícios 
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInterno = document.querySelectorAll('a[href^="#"]');
console.log(linksInterno);
linksInterno.forEach((link) => {
    console.log(link.classList.contains('ativo'));
    link.addEventListener('click', (e) => {
        for(let i = 0; i < linksInterno.length; i++) {
            if(linksInterno[i].classList.contains('ativo')) {
                linksInterno[i].classList.remove('ativo');
            }
        }
        console.log(e.target);
        console.log(link.classList.add('ativo'));
    });
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelector('body');
console.log(body);

body.addEventListener('click', (e) => {
    console.log(e.target);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

body.addEventListener('click', (e) => {
    e.target.remove();
});


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keyup', (e) => {
    if(e.key === 't') {
        body.style.fontSize = "2rem";
    }
});
