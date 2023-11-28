function livro(nome, ano, autor) {
     
    const nomeMaiusculo = nome.toUpperCase();
    const lancamento = 2023 - ano;
    const criado = nomeMaiusculo + " por " + autor;

    const objeto = {
        nome: nomeMaiusculo,
        lancamento,
        criado
    };

    return objeto;

}

livro('Ana', 2018, 'hehhel g');
const retorno = livro('Ene', 2017, 'Gesuis');
console.log(retorno)


function livro(nome, ano, autor) {

    const objeto = {
        nome: nome.toUpperCase,
        ano: 2023 - ano,
        criado: criado + ' por ' + autor
    };

    return objeto;

}