export default function initAnimaNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');
        
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100);
            let start = 0;
            const timer = setInterval(() => {
                start = start + incremento;
                numero.innerText = start;
                if(start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 25 * Math.random())
        })
    
    }
    
    function handleMutation(mutation) {
       if(mutation[0].target.classList.contains('ativo')) {
        obsever.disconnect(); // Vai acontecer apenas uma vez
        animaNumeros();
       }
    }
    
    const observerTarget = document.querySelector('.numeros'); // O que será observado
    const obsever = new MutationObserver(handleMutation);
    obsever.observe(observerTarget, {attributes: true}); // Método para observar

}
