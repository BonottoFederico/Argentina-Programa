const readlineSync = require('readline-sync');
let num = Number(readlineSync.question('Ingrese un numero entero: '));
if (num>0 && (num%2)==0) {
    console.log(`El numero es positivo y par`)
} else if (num>0 && (num%2)!=0) {
    console.log("El numero es positivo e impar")
} else if (num<0) {
    console.log("El numero es negativo")
} else if (num==0) {
    console.log("El numero es cero")
} else {
    console.log('Ingrese un numero valido')
}
