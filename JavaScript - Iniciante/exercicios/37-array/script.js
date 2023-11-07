var deuses = ['Aegir', 'Aud', 'Balder'];
console.log(deuses.length);

deuses.forEach( (nome) => {
    // alert(nome);
});

// Utilizando o método map():
// alert("Método Map()");
const map = deuses.map( deus => {
    // alert(deus);
});

// Utilizando o método filter()
// alert("Método Filter()");
const filter = deuses.filter(deus => {
    // return alert(deus);
});

// Utilizando o método redunce
// Refazer
// alert("Método Reduce()");
const reduce = deuses.reduce( deus => {
    // return alert(deus);
});

// 37. E)
deuses.push("Loki", "Odin", "Frey");
console.log(deuses);
console.log(deuses.length);

// 37. F) Ordenando Array
var numbers = [5, 7, 1, 8, 9];

console.log(numbers.sort());
console.log(numbers.reverse());

// Exercício 38
const nomesExibe = document.getElementById("nomes");

deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];
deuses.forEach( deus => {
    nomesExibe.innerHTML = nomesExibe.innerHTML + "<li>" + deus + "</li>";
});

// Exercício 39
const entradaLista = document.getElementById("entrada-lista");
const bntAddLista = document.getElementById("botao-adicionar-lista");
const listaExibe = document.getElementById("lista-exibe");
const elementos = [];

bntAddLista.addEventListener('click', () => {
    
    elementos.push(entradaLista.value);
    
    elementos.forEach( elemento => {
        listaExibe.innerHTML = + "<li>" + elemento + "</li>";
        // for(let i = 0; i <= elementos.length; i++ ){
        //     console.log('if')
        //     listaExibe.innerHTML = "<li>" + elementos[i] + "</li>";
        // }
    });
    
})