// Array
// Apresenta uma lista de dados
const lista = ["JavaScript", 20, true];
console.log(lista);

const nome = lista[0];
console.log(nome)


// Loops
//   declara varável (let); quando o loop para; o que ocorre com o index quando o loop for ativado

const body = document.querySelector("body");
for (let index = 0; index < lista.length; index++) {
    // console.log(lista[index]);
    body.innerHTML += "<li>" + lista[index] + "</li>";
}

console.log("//////////////////////");

// forEach
// Função executada para cada item da Array
function adicionarBody(item) {
    console.log(item);
    body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);

console.log("//////////////////////");

// querySelectorAll
// Seleciona todos os elementos que suprirem a condição do argumento e retorna uma array-like (objeto que se parece com um array)
const arrayLike = document.querySelectorAll("nav a");
console.log(arrayLike);

//            transformando em uma array normal
const arrayNormal = Array.from(document.querySelectorAll("nav a"));
console.log(arrayNormal);

// Agora será possível utilizar o pop
const ultimoLink = arrayNormal.pop();
console.log(ultimoLink);


// Array-like 

function logHref(item) {
    const href = item.href;
    console.log(href);
}
arrayLike.forEach(logHref);

console.log(arrayLike[arrayLike.length - 1]);



// Propriedades e Métodos 

// Remove o último item da array:
arrayNormal.pop(); // Ou
const ultimo = arrayNormal.pop();

console.log(arrayNormal); // Ou
console.log(ultimo);

// Remover o primeiro:
arrayNormal.shift();

// Adicionar item novo:
arrayNormal.push("PHP");