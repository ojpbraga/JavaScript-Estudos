// new Date()
// O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do PC.

const agora = new Date();
console.log(agora)

console.log(agora.getDate());
console.log(agora.getDay());
console.log(agora.getMonth());
console.log(agora.getFullYear());
console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getTime());
console.log(agora.getUTCHours() - 3); // Brasília


const futuro = new Date('Dec 25 2024 23:59')
console.log(futuro);

// getTime()
// Método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.

console.log(agora.getTime())
console.log(futuro.getTime())

function transformarDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
}
function transformarHoras(tempo) {
    return tempo / (60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

const horasAgora = transformarHoras(agora.getTime());
const horasFuturo = transformarHoras(futuro.getTime());

console.log('Faltam dias: ' + (diasFuturo-diasAgora));
console.log('Faltam horas: ' + (horasFuturo - horasAgora));