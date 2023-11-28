const cpf = document.getElementById("cpf");
const pontuacao = document.getElementById("pontuacao");
const semPontuacao = document.getElementById("sem-pontuacao");

function escreve() {
    console.log(cpf.value);

    pontuacao.innerText = cpf.value;
    semPontuacao.innerText = cpf.value;

    // Tentar refazer código de forma mais dinâmica
    if (cpf.value[0] != undefined) {
        pontuacao.innerText = cpf.value[0];
    }

    for (let index = 1; index <= 2; index++) {
        if (cpf.value[index] != undefined) {
            pontuacao.innerText = pontuacao.innerText + cpf.value[index];
        }
    }

    if (cpf.value[2] != undefined) {
        pontuacao.innerText = pontuacao.innerText + ".";
    }

    for (let index = 3; index <= 5; index++) {
        if (cpf.value[index] != undefined) {
            pontuacao.innerText = pontuacao.innerText + cpf.value[index];
        }
    }

    if (cpf.value[5] != undefined) {
        pontuacao.innerText = pontuacao.innerText + ".";
    }

    for (let index = 6; index <= 8; index++) {
        if (cpf.value[index] != undefined) {
            pontuacao.innerText = pontuacao.innerText + cpf.value[index];
        }
    }

    if (cpf.value[8] != undefined) {
        pontuacao.innerText = pontuacao.innerText + "-";
    }

    for (let index = 9; index <= 10; index++) {
        if (cpf.value[index] != undefined) {
            pontuacao.innerText = pontuacao.innerText + cpf.value[index];
        }
    }

}

cpf.addEventListener('keyup', escreve);