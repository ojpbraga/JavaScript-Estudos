function Livro(nome, ano, autor){
    const objeto = {
        nome: nome.toUpperCase(),
        ano: 2050 - ano,
        frase: nome + ' por ' + autor
    }
    return objeto;
}

const retorno = Livro('O Senhor dos aneis', 1954, 'J. R. R');

console.log(retorno);