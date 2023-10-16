// Objetos - é a forma de mantermos dados associados e organizados. Ele é criado por {}. Tudo é objeto.

const nome = 'Senhor dos Aneis';
const ano = 1954;
const auto = 'J. R, R.';

const nomeFilme = "Lalaland";
const anoFilme = 2003;
const diretorFilme = "Olivia";

const livro = {
    nome: 'O Senhor dos Aneis',
    ano: 1954,
    autor: 'J. J. R Tacking'
}

const filme = {
    nome: 'O Senhor dos Aneis',
    ano: 2001,
    diretor: 'J. R. R'
}

console.log(livro);
console.log(2023 - livro.ano);
console.log(livro.nome + ' ' + filme.diretor)
console.log(livro.nome === filme.nome)

const texto = document.querySelector('p');
console.log(texto.innerHTML);
console.log(texto.clientHeight);
console.log(livro.autor.toUpperCase())
console.log(filme.diretor.toLowerCase())

const decimal = 122.99;
console.log(Number(decimal.toFixed()) + 3);
console.log(3);

const total = decimal.toFixed().length.toFixed().length;

console .log(total);