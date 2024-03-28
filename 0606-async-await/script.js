// async / await
// A palavra chave async indica que a função possui partes assícronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte do ES8.

async function puxarDados() {
    const dadosResponse = await fetch('./dados.json'); // await sempre que esperar algo ocorrer, sempre vai na frente de promessas
    console.log(dadosResponse);
    const dadosJSON = await dadosResponse.json();
    // Se estivesse sem o await, retornaria uma promessa também, mas utilizando o mesmo, retorna o resultado da promessa

    document.body.innerText = dadosJSON.aula;
}
puxarDados();


// then vs async
// A diferença é uma sintaxe mais limpa
function iniciarFetch() {
    fetch('./dados.json')
    .then(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
        document.body.innerText = dadosJSON.aula;
    })
}
iniciarFetch();

async function iniciarAsync() {
    const dadosResponse	= await fetch('./dados.json');
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.aula;
}
iniciarAsync();


// Try / Catch
// Para lidarmos com erros nas promises, podemos utilizar o try e carch na função.
async function tryCatch() {
    try {
        const dadosResponse	= await fetch('./dadoos.json');
        const dadosJSON = await dadosResponse.json();
        document.body.innerText = dadosJSON.aula;
    } catch(erro) {
        console.log(erro); // Ele vai tentar fazer o try, caso dê algum erro, ele vai fazer o catch
        console.log('Erro!!!');
    }
}
tryCatch();


// Iniciar Fetch ao Mesmo Tempo
// Não precisamos esperar um fetch para começar outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
// Ou seja, como pegar duas apis ao mesmo tempo

async function doisFetch() {
    const dadosResponse = fetch('./dados.json');
    const clientesResponse = fetch('./clientes.json');

    // Ele espera o que está dentro da expressão () ocorrer primeiro
    const dadosJSON = await (await dadosResponse).json();
    const clientesJSON = await (await clientesResponse).json();

    console.log(dadosJSON);
    console.log(clientesJSON);
}
doisFetch();


// Promise
// O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.
// await sempre espera uma promise

async function asyncSemPromise() {
    // Console não irá esperar
    await setTimeout(() => console.log('Depois 1s'), 1000); // setTimeout não é uma promise.
    console.log('Acabou!');
}
asyncSemPromise();

async function iniciarAsync() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('Depois de 1s');
            resolve()
        }, 1000)
    });
    console.log('Acabou!');
}

