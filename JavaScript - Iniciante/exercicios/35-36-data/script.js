const dataExibir = document.getElementById("data");
const hoje = new Date();

dataExibir.innerText = hoje.getDay() + "/" + hoje.getMonth() + "/" + hoje.getFullYear() + " Próximo mês: " + (hoje.getMonth() + 1);
