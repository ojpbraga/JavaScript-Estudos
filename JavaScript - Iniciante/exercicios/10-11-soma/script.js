const soma1 = document.getElementById("soma1");
const soma2 = document.getElementById("soma2");
const bntSoma = document.getElementById("bnt-soma");
const resultado = document.getElementById("resultado-soma");
console.log(soma1, soma2, bntSoma);
console.log(soma1.value);

bntSoma.addEventListener('click', () => {
    console.log(soma1.value);
    if (soma1.value && soma2.value != "") {
        resultado.innerText = Number(soma1.value) + Number(soma2.value);
    } else {
        resultado.innerText = "Os dois campos precisam estar preenchidos!";
    }
    
    // Comentário

})