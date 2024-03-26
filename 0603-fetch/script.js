// Fetch API
// Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response. 
// É necessário estar em um servidor (liveServer), pois a requisição é HTTP e não arquivos.

// O fetch retorna uma promise
console.log(fetch('./arquivo.txt'));

// Response
// O objeto Response possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
const conteudo = document.querySelector('.conteudo');

fetch('./arquivo.txt').then(function(response) {
    return response.text() // Response HTTP (objeto)
})
.then((body) => {
    console.log(body);
    // conteudo.innerText = body;
});


// .json()
// Um tipo de formato de dados muito utilizado em JS, pelo fato dele possuir a mesma sintaxe que a de um objeto js .json() transforma um corpo em json em um objeto JS.

const cep = fetch('https://viacep.com.br/ws/01001000/json/')
cep.then(r => r.json())
.then(resolve => {
    console.log(resolve);
    console.log(resolve.bairro);
    console.log(resolve.localidade);
    conteudo.innerText = resolve.bairro;
})

// .text()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, cssx js e mais.


fetch('./style.css').then(r => r.text()).then(r => {
    const styleElement = document.createElement('style');
    console.log(r)
    styleElement.innerHTML = r;
    conteudo.appendChild(styleElement)
});

// HTML e .text() 
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai, podemos manipular esses dados como um DOM qualquer.

const div = document.createElement('div');

const sobre = fetch('./sobre.html')
.then(r => r.text())
.then((html) => {
    div.innerHTML = html;
    const titulo = div.querySelector('h1');
    document.body.appendChild(titulo);
    console.log(titulo);
})

// .blob()
// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens, por exemplo. O blob gera um URl único.

const imagem = fetch('./imagem.png');
imagem.then(r => r.blob()).then(imagem => {
    console.log(imagem)
    const blobUrl = URL.createObjectURL(imagem);
    console.log(blobUrl);
    // const imagemDom = document.querySelector('img');
    // imagemDom.setAttribute('src', blobUrl);
    imagemDom.src = blobUrl;
})


// .clone()
// Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores

const cep2 = fetch('https://viacep.com.br/ws/01001000/json/')
.then(r => {
    // r.text(); // body só pode ser transformado uma vez
    // r.json(); Error, para resolver, clonamos
    r2 = r.clone();
    r.text().then((texto) => {
        console.log(texto);
    })
    r2.json().then(texto => {
        console.log(texto)
    })
})
.then((body) => {
    console.log(body)
})

// .headers
// É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles. Retorna dados do site, quanto tempo o cache dura, tipo de arquivo, publico ou não

imagem.then(response => {;
    response.headers.forEach(console.log)
})


// .status e .ok
// Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false sem sucesso

const imagem2 = fetch('./imagem2.pj');

imagem.then(response => {;
    console.log(response.status);
})

imagem2.then(response => {;
    if(response.status === 404) {
        console.log('Página não existe');
    }
})

// .url e .type
// .url retorna o url da requisição .type retorna o tipo da resposta

imagem.then(response => {;
    console.log(response.url);
})

imagem.then(response => {;
    console.log(response.type);
})
cep.then(response => {;
    console.log(response.type);
})
fetch('www.google.com').then(r => console.log(r.type));

// type
// basic: fazendo requisições dentro do próprio servidor
// cors: requisição em outro servidor, porém permitida

// Exercícios

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btn-cep');

function buscarCep(event) {
    event.preventDefault();
    const mostrarCep = document.createElement('div');
    const cep = inputCep.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.json())
    .then(r => {
        const keys = Object.keys(r);
        keys.forEach((name) => {
            mostrarCep.innerHTML += `<p>${name}: ${r[`${name}`]}</p>`;
        })
        
        salvarLocal(r);
        document.body.appendChild(mostrarCep);
    })
}

function salvarLocal(r) {
    const keys = Object.keys(r);
    keys.forEach((name) => {
        localStorage[name] = r[`${name}`];
    })
}

// Obs.: salvar no localStorage e mostrar na tela, deveriam estar em funções diferentes
btnCep.addEventListener('click', buscarCep);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

fetch('https://blockchain.info/ticker').then(r => r.json()).then(r => {
    const mostrarBitcoin = document.createElement('div');

    function showBitcoin() {
        const btcBrl =  r.BRL.buy;
        mostrarBitcoin.innerHTML = `Valor de compra Bitcoin R$${btcBrl.toString().replace('.', ',')}`;
        document.body.appendChild(mostrarBitcoin);
    }

    showBitcoin();
    setInterval(showBitcoin, 30000);
})

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnPiadas = document.querySelector('#btn-piadas');
const paragrafoPiadas = document.querySelector('.piadas'); 

function novaPiada() {
    fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())
    .then(r => {
        paragrafoPiadas.innerHTML = r.value;
    })
}
novaPiada();
btnPiadas.addEventListener('click', novaPiada);