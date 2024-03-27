// API
// Application
// Um servidor, aplicativo, objeto JS ou qualquer coisa que intereja através de comandos. Ao digitar uma url, estamos utilizando a API do browser para se comunicar com a API do servidor.

// Programming
// Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado geralmente é o mesmo..

// Interface
// A interface são os comandos criados para permitir a interação com a aplicação. Ex.: 'VIOLAO'.toLowerCase() é um método que faz parte da interface do objeto String. A interação com a interface retorna um efeito/resposta.

// Exemplos de APIs

// GitHub

// https://api.github.com/users/origamid

// https://api.github.com/users/origamid/followers

// Array / Element

// [].map();

// [].filter();

// Element.classList;

// Element.attributes;

// Tempo

// https://www.metaweather.com/api/location/455825/

// https://github.com/toddmotto/public-apis

// HTTP
// Hypertext Transfer Protocol é o protocolo utilizado para enviarmos/recebermos arquivos e dados da web.

fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(r => r.json()).then(pokemon => console.log(pokemon))

// url e method
// Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
    method: 'POST', //método de postagem
    body: '{"title": "JavaScript"}', // O que vai ser enviado
    headers: {
        "Content-Type": "application/json; charset=utf-8", // Tipo de dado
    }
}
// Caso eu faça o post, não é necessário o then, pois estou mandando informação

fetch(url, options).then(r => r.json()).then(resposta => console.log(resposta));

// GET
// Puxa informação

// POST
// Utilizado para criar posts, usuários

// PUT
// Atualizar informações

// DELETE
// Deletar uma informação

// HEAD 
// Puxa apenas os headers. É uma requisição mais leve pois não puxa o body
const urlHead = 'https://jsonplaceholder.typicode.com/posts/';
const optionsHead = {
    method: 'HEAD',
}

fetch(urlHead, optionsHead).then(r => {
    console.log(r.headers.get('Content-Type'));
    r.headers.forEach(header => {
        console.log(header);
    })
})

// HEADERS
// São formas do servidor e browser informarem o que é cada tipo de dado, informar que o dado é html, json, cache, etc.

// Cache-control
// Tempo em segundos que o arquivo deve ficar

// Content-Type
// Tipo de conteúdo.

// Lista de Headers
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers


// CORS
// Cross-Origin Resouce Sharing, gerencia como deve ser o compartilhamento de recursos entre diferentes origens.
// É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.
// Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.
// CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não inviolável.

fetch('www.google.com')
.then(r => r.json())
.then(texto => console.log(texto)) // Erro, pois é bloqueado. A não ser que eu utilize um plugin (Allow-Control-Allow-Origin)

// Utilizando o plugin, tenta pegar esses dados e adicionar dentro do html pra ver o do google

const url2 = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';