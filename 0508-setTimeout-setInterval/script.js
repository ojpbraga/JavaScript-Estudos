// setTimeout()
// setTimeout(callback, tempo, arg1, arg2...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será exacutado exatamente após o tempo, pois o callback entra na fila e espera pela call Stack estar vazia.

function espera(texto) {
    console.log(texto);
}

setTimeout(espera, 1000, 'Depois de 1s');

setTimeout((tempo) => {
    console.log(tempo);
}, 2000, 'Depois de 2s');


// Loops e setTimeout
// Um loop é executado rapidamente, em milisegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionado à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

// for(let i = 0; i < 20; i++) {
//     // Todos os setTimeout criados, vão contar o mesmo 300 milisegundos juntos. Para resolver, multiplicamos o tempo * i
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)
// }


// This e Window
// setTimeout é um método do objeto window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.
const btnWindow = document.querySelector('#btn-window');

function handleClick() {
    setTimeout(function() {
        console.log(this)
        this.classList.add('active'); // Erro, pois this está fazendo referência ao objeto Window
    }, 1000)
}
btnWindow.addEventListener('click', handleClick);

// Usando a aeroFunction
const btnThis = document.querySelector('#btn-this');

function handleClickThis() {
    setTimeout(() => {
        console.log(this)
        this.classList.add('active'); // 
    }, 1000)
}
btnThis.addEventListener('click', handleClickThis);


// setInterval
// setInterval(callback, tempo, arg1, arg2...), irá ativar o callback toda vez que a quantidade de tempo passar
function loop(texto) {
    // console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
    // console.log(i++);
}, 0);

// clearInterval
// clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.
const contarAte10 = setInterval(callback, 1000);

let e = 0;
function callback() {
    // console.log(e++);
    if(e > 10) {
        clearInterval(contarAte10);
    }
}

let c = 0;
const meuLoop = setInterval(() => {
    // console.log(c++);
    if(c > 10) {
        clearInterval(meuLoop);
    }
}, 1000)


// Exercícios
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
setInterval(() => {
    // document.body.classList.toggle("active");
}, 200);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const bntIniciar = document.querySelector('#iniciar');
const bntPausar = document.querySelector('#pausar');
const mostrarTempo = document.querySelector('p');

let r = 0;

function initCronometro() {
    cronometro = setInterval(() => mostrarTempo.innerText = r++, 1000);
    bntIniciar.disabled = true;
}

function pausarCronometro() {
    clearInterval(cronometro);
    bntIniciar.disabled = false;
}

function resertarCronometro() {
    console.log('reset')
    r = 0;
}

bntIniciar.addEventListener('click', initCronometro);
bntPausar.addEventListener('click', pausarCronometro);
bntPausar.addEventListener('dblclick', resertarCronometro);

