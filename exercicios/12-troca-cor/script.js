const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");
const corpo = document.querySelector("body");



verde.addEventListener('click', () => {
    corpo.style.background = "green";
});

vermelho.addEventListener('click', () => {
    corpo.style.background = "red";
})