// Metodos
// É uma função dentro de um objeto.

// Criação do objeto
const curso = {
    // Propriedade:
    nome: 'Josephina',

    // Criando a método (função dentro do objeto):
    complementar() {
        console.log('Pessoa real');
    }
}
console.log(curso.nome);
curso.complementar();



// Eventos
// Funções que serão executadas caso um evento ocorra.
const ativar = document.querySelector('.ativar');

// Comentário utilizado para documentar o que é/tem a função:
/**
 * 
 * @param {MouseEvent} evento 
 */
// Agora, quando eu adicionar o ponto (evento.) ele me dará diferentes propriedade da interface

//        Passando parâmetro
function ativarAoClicar(evento) {
    console.log(evento);
    console.log(evento.x);
    console.log(evento.y);
    console.log(evento.timeStamp);
    // Não precisar ter que acessar variável que está fora do corpo da função
    console.log(evento.currentTarget);
}

// Três argumentos: tipo de evento, função
ativar.addEventListener('click', ativarAoClicar);