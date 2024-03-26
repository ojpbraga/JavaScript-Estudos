// JSon
// JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.

// Valores: podem ser string, boolean, arrays, objetos e null.

// {
//     "id": 1,
//     "faculdade": true, 
//     pertences: [
//         "lapis",
//         "caneta",
//         "caderno"
//     ],

// }

// Arrays e Objetos
// É comum possuirmos arrays com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array.

fetch('./dados.json').then(r => r.json()).then(json => {
    console.log(json);
    console.log(json[0]);
    console.log(json[0].aula);

    json.forEach(materia => {
        console.log(materia.aula);
    });
})


// JSON.parser e JSON.string
// JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringfy() irá transformar um objeto JavaScript em uma string no formato JSON.

// JSON.parse()
fetch('./dados.json').then(r => r.text()).then(jsonText => {
    jsonFinal = JSON.parse(jsonText); // string para json
    console.log(jsonText)
    console.log(jsonFinal);
})
// JSON.string
const configuracao = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 JavaScript",
}
const stringConfig = JSON.stringify(configuracao);
console.log(stringConfig);

// Para otimizar o localStorage, podemos:
localStorage.config = stringConfig;
console.log(localStorage.config);

const retornoConfig = JSON.parse(localStorage.config);
console.log(retornoConfig);