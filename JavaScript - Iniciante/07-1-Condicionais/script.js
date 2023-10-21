// Condicionais:
// Verificação se uma expressão é verdadeira ou falsa. Quando passamos um valor nos parênteses após o if é como se usássemos a função Boolean() nele
if (true) {
    console.log("Teste");
} else {
    console.log("Esse executa");
}


// Qualquer string que queremos verificar se algo dentro ou não, utilizamos o Boolean
const condicao = Boolean(" ");
console.log(condicao);

// Ele também aceita número, tanto negativos quanto positivos, porém o 0, null, underfine é false
const num = 0;
console.log(Boolean(num));

// Pode ser verificado caso um elemento existe ou não
const elemento = document.querySelector("body");
console.log(Boolean(elemento));
// Caso aquele elemento não exista, retornará false
const elemento2 = document.querySelector("p");
console.log(Boolean(elemento2));

function teste(event){}
if (elemento) {
    // Só consigo adicionar um evento caso o elemento exista
    elemento.addEventListener('click', teste);
}



// Operadores Lógicos
// Verificar mais de uma condição com o || (ou) e && (e)
if (elemento || document.querySelector("body")) {
    console.log("Teste");
}

// Não roda, porque temos apenas uma das condições true
if (document.querySelector("img") && document.querySelector("body")) {
    console.log("Teste");
}



// Operadores de Comparação
// Podemos comparar tipos de dados, retorna valor booleano

'JavaScript' === 'javascript'; // false
'20' === 20; // false

// Se é diferente:
30 !== 20; // true
document.querySelector('.texto') !== null; // false

// Comparar números:
10 > 5; // true
20 < 10; // false
// >= e <=


// Verificando o valor dentro de um elemento
const texto = document.querySelector("p");
const conteudo = texto.innerText;
if (conteudo.toUpperCase() === "HTML"){
    console.log("Executar código");
}
