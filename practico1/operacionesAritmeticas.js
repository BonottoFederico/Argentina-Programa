let a = 1, b = 3, c = 15, d = 4;
let suma = a + b;
let resta = c - d;
let resultadoFinal = suma * resta;
let esPar = (resultadoFinal % 2) === 0;   

console.log('Mis variables iniciales fueron: %i, %i, %i, %i. La respuesta a verificar si el resultado final es par es: %s', a, b, c, d, esPar)