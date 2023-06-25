const readlineSync = require('readline-sync');
let num = readlineSync.question('Ingrese un numero: ');
if (num> 0) {
    console.log('El numero es positivo')
}
else if (num==0) {
    console.log ('El numero es cero')
}
else if (num<0) {
    console.log('El numero es negativo')
}