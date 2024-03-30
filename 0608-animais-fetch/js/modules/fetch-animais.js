import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {

    async function fetchNumeros() {
        const animaisResponse = await fetch('./animaisapi.json');
        const animaisJSON = await animaisResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid')
        animaisJSON.forEach(animal => {
            const divAnimal = createAnimal(animal);
            numerosGrid.appendChild(divAnimal);
        })
    }

    function createAnimal(animal) {
       const div = document.createElement('div');
       div.classList.add('numero-animal');

        // Essas propriedades vieram do index
       div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
       
       return div;
    }

    fetchNumeros();
    // Animação ocorrer após os dados já estiverem na página
    initAnimaNumeros();

}
