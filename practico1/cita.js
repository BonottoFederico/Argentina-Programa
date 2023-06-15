let cita = 'Tres tristes tigres comen trigo en un trigal';
let substring = 'tigres comen trigo';

let tamañoDeCita = cita.length;
console.log('El tamaño de la cita es: %i', tamañoDeCita);

let indice = cita.indexOf(substring);
console.log('El indice del substring es: %i', indice);

let citaRevisada = cita.slice(0, 13 ) + substring;
console.log(citaRevisada);
