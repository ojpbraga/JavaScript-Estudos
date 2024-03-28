// History
// É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.

window.history;
// window.history.back(); // vai para página anterior
// window.history.forward(); // vai para próxima página

// pushState();
// A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).

// Em obj, podemos enviar um objeto com dados, mas seu uso é restrito por isso geralmente utilizamos o null. O title ainda é ignorado por alguns browsers, também utilizamos o null. O url que é a parte mais importante

// Modificando a url
// window.history.pushState(null, null, 'teste.html')


// popState
// O evento popState pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.
// o pushState precisa estar ativado para a função funcionar.

// window.history.pushState(null, null, 'sobre.html')

window.addEventListener('popstate', () => {
    console.log('Voltou');
})

// Fetch e History
// Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api, conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

const links = document.querySelectorAll('a');

async function fetchPage(url) {
    document.querySelector('.content').innerHTML = 'Carregando';
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText);
    
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;
    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

window.addEventListener('popstate', () => {
    console.log(window.location.href);
    fetchPage(window.location.href);
})

links.forEach(link => {
    link.addEventListener('click', handleClick);
})

// async function fetchPage(url) {
//     const pageResponse = await fetch(url);
//     const pageJSON = await pageResponse.text();
//     window.history.pushState(null, null, url);
// }