// Forms
// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário. Para isso, precisamos aprender como pegar os valores dos formulários.

// console.log(document.forms)
const contato = document.querySelector('#contato');
// console.log(contato.elements);
// console.log(contato.elements.nome.value);

// Values
// A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup, podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

const form = document.querySelector('form');
function handleKeyUp(event) {
    console.log(event.target.value);
}
// form.addEventListener('keyup', handleKeyUp);
// form.addEventListener('change', handleKeyUp); // Só retorna após o usuário sair do input


// Validação
// O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modificar com setCustomValidity('')

const mensagemErro = document.querySelector('#erro');

function validation(event) {
    const target = event.target;
    console.log(target.checkValidity())
    if(!target.checkValidity()) {
        target.classList.add('invalido');
        contato.nome.setCustomValidity('Nome completo!!!')
        mensagemErro.innerText = target.validationMessage;
    } else {
        target.classList.remove('invalido');
    }
}
form.addEventListener('keyup', validation);


// Select
// const coresSelect = document.querySelector('#cores');
// console.log(coresSelect.options)
// coresSelect.addEventListener('change', (event) => {
//     document.body.style.background = event.target.value;;
// });


// Checkbox
// const identidade = document.querySelector('#identidade');
// identidade.addEventListener('click', (event) => {
//     console.log(event.target.checked)
// })


// Pegando todos os valores
// Ao invés de selecionarmos elemento por exemplo, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.

const dados = {};

function handleChange(event) {
    dados[event.target.name] = event.target.value;
}

contato.addEventListener('change', handleChange);
document.querySelector('#mensagem').addEventListener('change', handleChange); // Foi necessário adicionar o event no textarea também