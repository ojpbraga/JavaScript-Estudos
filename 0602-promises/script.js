// new Promise()
// Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

// resolve()
// Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

// reject()
// Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma.Podemos indicar no console um erro, informando que a promise foi rejeitada.

const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
        resolve({nome: 'Joao', idade: 18,});
    } else {
        reject(Error('Ocorreu na promessa'));
    }
});
// console.log(promessa);

// then()
// Promises possui o método then() do seu protótipo. O callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.
// Ele espera a promessa ser reslvida para depois executar algo

promessa.then((resolve) => {
    console.log(resolve); // Retorna o que está dentro da função resolve da promessa, como string, objeto, array
});

const retorno = promessa.then(resolve => resolve.profissao = 'Dev FrontEnd')
.then((resolve) => console.log(resolve));

// Assíncrono
// As promises só fazem sentido quando utilizamos um código assíncrono dentro dela.

const assincrono = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
        setTimeout(() => {
         resolve('Depois de 1s');
        }, 1000)
    } else {
        reject(Error('Erro no assincrono'));
    }
})

assincrono.then((resolve) => {
    console.log(resolve);
})

// then().then()
// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.

const exThen = new Promise((resolve, reject) => {
    reject('Etapa 1');
});

exThen.then(resolve => {
    console.log(resolve);
    return 'Etapa 2';
})
.then(resolve => {
    console.log(resolve);
    return 'Etapa 3';
})
.then(r => r + 4)
.then(r => {
    console.log(r);
})
.catch((rejeitada) => {
    console.log('CATCH '+ rejeitada)
})

// catch()
// O método catch() do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma for rejeitada.
// Também pode ser passado como segundo argumento do then:

const exCatch = new Promise((accepted, rejected) => {
    rejected(Error('Um erro'));
})
.then((resolved) => {
    console.log(resolved);
}, (reject) => {
    console.log(reject);
})

// finally()
// Executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independendo do resultado, se for resolvida ou rejeitada. Não recebe parâmetro.

const exFinally = new Promise((accepted, rejected) => {
    rejected(Error('Um erro'));
})
.then((resolved) => {
    console.log(resolved);
})
.catch((reject) => {
    console.log(reject);
})
.finally(() => {
    console.log('Acabou!!!')
})


// Promise.all()
// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A resposta é uma array com as respostas de cada promise

// Promise.race()
// Retornará uma nova promise assim que a primeira for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida. Ou seja, assim que a primeira promise for resolvida, o race vai rodar.

const login = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Login Efetuado');
    }, 1000);
});
const dados = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);
const primeiroCarregado = Promise.race([login, dados]);

console.log(tudoCarregado);

tudoCarregado.then(respostas => console.log(respostas));
primeiroCarregado.then(respostas => console.log('Primeiro carregado: ' + respostas));

tudoCarregado.then((resolve) => {
    console.log(resolve);
})