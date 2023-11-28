const botao = document.querySelector(".botao");

function mostrar() {
    // Sempre selecionar o elemento primeiro
    const texto = document.querySelector(".texto");

    // Adicionamos um objeto que possui métodos dentro dele: (passar apenas o nome da classe)
    // Ele está adicionando a classe ativar (que contém um style no css) na classe texto (tag p)
    // Também possui o .remove
    // texto.classList.add("ativar");

    // toggle: adicionar, caso exista ou remover, caso não exista
    texto.classList.toggle("ativar");

}

botao.addEventListener("click", mostrar);