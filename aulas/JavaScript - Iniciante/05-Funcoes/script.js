// Funções 
// As funções são blocos de código que podem ser executados. A exercução pode acontecer em diferentes cenários e diversas vezes.

function logCurso() {
    const nome = 'JavaScript';
    console.log(nome);
}
logCurso();



function logCurse(neme) {
    console.log(neme)
}
logCurse('JeveScripte');


function logCase(name, clock) {
    console.log(name, clock);
}
logCase('Jave', 22, "hores"); 

// Return - Toda a função retorna um valor (tipo de dado). Se o retorno não for utilizado a palavra return, o valor retornado será undefined.
// Pode retornar um objeto também
function logCurso(nome, horas) {
    console.log(nome, horas);
    // return nome;
    return {
        nomeTeste: nome,
        horasTeste: horas
    };
}

logCurso('JavaScript', '20');
const retorno = logCurso('Javascript', '60')
console.log(retorno);

console.log(retorno.horasTeste);


// Posso retornar como um objeto
function retornaObjeto(name, clock) {
    console.log(name, clock, "horas");
    return{
        nomeTeste: name,
        clockTeste: clock
    };
}
retornaObjeto(retorno);


const nome2 = "JavaScript";
function acessoCurso(){
    // const horas = 40;
    console.log(nome2);
}
// Nn mostrar, pq está fora do escopo da função
// console.log(horas);


function acessoCurso2(nome1){
    // Ele dará prioridade ao que está dentro da função
    const nome2 = "HTML";
    const horas = 40;
    console.log(nome2);
    return nome2;
}
// Nn mostrar, pq está fora do escopo da função
const nomeDentroFuncao = acessoCurso2();
console.log(nomeDentroFuncao);
console.log(nome2);

