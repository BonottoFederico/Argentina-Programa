const readlineSync = require('readline-sync');
let num = readlineSync.question('Ingrese un numero del 1 al 12 representando los meses: ');
let meses = [
    {mes:'enero', dias: 31},
    {mes:'febrero', dias: 28},
    {mes:'marzo', dias: 31},
    {mes:'abril', dias: 30},
    {mes:'mayo', dias: 31},
    {mes:'junio', dias: 30},
    {mes:'julio', dias: 31},
    {mes:'agosto', dias: 31},
    {mes:'septiembre', dias: 30},
    {mes:'octubre', dias: 31},
    {mes:'noviembre', dias: 30},
    {mes:'diciembre', dias: 31}
]
if (num > 0 && num < 13 && num%1==0) {
    console.log (`La cantidad de dias del mes de ${meses[(num-1)].mes} es ${meses[(num-1)].dias}.`)
} else {
    console.log(`El numero ingresado no es valido.`)
}
