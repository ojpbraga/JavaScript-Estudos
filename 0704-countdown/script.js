import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("25 December 2024 00:00:00 GMT-0300");
const tempoParaOAnoNovo = new Countdown("31 December 2024 00:00:00 GMT-0300");

console.log(tempoParaONatal);
setInterval(() => {
    console.log(tempoParaOAnoNovo.total);

}, 1000)

console.log(tempoParaONatal._futureDate)
console.log(tempoParaONatal._timeStampDiff);
console.log(tempoParaONatal.days);
console.log(tempoParaONatal.hours);
console.log(tempoParaONatal.total);
