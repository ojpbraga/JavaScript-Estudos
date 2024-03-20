// use strict 
// O modo estrito previne que algumas ações consideradas erros. Basta adicionar 'use strict' no topo do arquivo.

'use strict'

nome = 'Ford'; // Erro, variáveç global // Se a variável for const, ela não vaza para as propriedades do window
delete Array.prototype; // erro, não deletável
window.top = 200; // erro, não pode mudar
//const arguments = 3.4; // escrever palavra reservada

// Arquivo normal

// nome = 'Ford'; // Dentro das propriedades do objeto window, estará disponível a variável