// Manipulação de DOM
// selecionamos o primeiro elemento encontrado com base no argumento passado. O argumento é similar aos seletores CSS: document.querySelector('.class tag');
  const nav = document.querySelector('nav');
  const produtos = document.querySelector('.produtos')

  console.log(nav);
  console.log(produtos);

//   Existem os métodos e afins. Se eu quiser apenas o texto:
console.log(produtos.innerHTML);
console.log(produtos.href);

// Funções. Função de remover:
produtos.remove()

// Posso modificar o estilo também:
nav.style.background = "pink";
nav.style.padding = "1rem";

// Se eu quiser adicionar uma classe:
nav.classList.add('ativo');