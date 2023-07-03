const readlineSync = require('readline-sync');
const jugadas = [`piedra`, `papel`, `tijeras`]
let victoriasJugador = 0
let victoriasComputadora = 0
function jugar (numJuego) {
function obtenerJugadaComputadora() {
    let indice = Math.floor(Math.random() * 3)
    let jugadaComputadora = jugadas[indice]
    return jugadaComputadora
}

function obtenerJugadaUsuario() {
    let jugadaUsuario = readlineSync.question('Ingrese piedra, papel o tijeras:').toLowerCase()
    while (!jugadas.includes(jugadaUsuario)) {
    console.log(`Opcion invalida. Intentelo nuevamente.`)
    jugadaUsuario = readlineSync.question('Ingrese piedra, papel o tijeras:').toLowerCase();
}
return jugadaUsuario
}

function determinarGanador(jusuario, jcompu) {
    switch (jusuario) {
        case jugadas[0]:
            if(jcompu==jugadas[0]) {
                return (`Empate`)
            } else if (jcompu== jugadas[1]) {
                victoriasComputadora++
                return(`Gana la computadora`)
            } else {
                victoriasJugador++
                return(`Gana el usuario`);
            }
            break;
        case jugadas[1]:
            if(jcompu==jugadas[0]) {
                victoriasJugador++
                return(`Gana el usuario`)
            } else if (jcompu== jugadas[1]) {
                return(`Empate`)
            } else {
                victoriasComputadora++
                return(`Gana la computadora`);
            }
            break;
        case jugadas[2]:
            if(jcompu==jugadas[0]) {
                victoriasComputadora++
                return(`Gana la computadora`)
            } else if (jcompu== jugadas[1]) {
                victoriasJugador++
                return(`Gana el usuario`)
            } else {
                return(`Empate`);
            }
            break;
    }
}

let jcompu = obtenerJugadaComputadora()
let jusuario = obtenerJugadaUsuario()
let resultado = determinarGanador (jusuario, jcompu)
console.log(`Juego ${numJuego}: 
La computadora eligio: ${jcompu}. 
El usuario eligio: ${jusuario}.
El resultado fue: ${resultado}.`)
}
let  cantidadjuegos = Number(readlineSync.question (`Cuantas veces desea jugar? (entre 1 y 3):`))
while (cantidadjuegos <= 0 || cantidadjuegos > 3 || isNaN(cantidadjuegos) || cantidadjuegos%1 != 0) {
    console.log(`Ingrese un numero valido.`)
    cantidadjuegos = Number(readlineSync.question (`Cuantas veces desea jugar? (entre 1 y 3):`))
}

for (let index = 0; index < cantidadjuegos; index++) {
    jugar(index+1)
}
if (victoriasJugador > victoriasComputadora) {
    console.log(`El jugador gana ${victoriasJugador} a ${victoriasComputadora}`)
} else if (victoriasJugador < victoriasComputadora) {
    console.log(`El jugador pierde ${victoriasJugador} a ${victoriasComputadora}`)
} else {
console.log (`Ha sido un empate ${victoriasJugador} a ${victoriasComputadora}`)
}

/* 1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
2. Crea una función llamada obtenerJugadaComputadora que generará un número
aleatorio entre 0 y 2 para representar las opciones:
- 0 para "piedra",
- 1 para "papel" y
- 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.

Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
numércios y los strings “piedra”, “papel” y “tijeras.
Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
random.
3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
valor por consola.
4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
variable.
b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
c) Invoca la función determinarGanador pasando como argumentos las jugadas de
la computadora y del usuario. Almacena el resultado en una variable.

6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
resultado:
La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
El resultado fue: [Empate | Gana la computadora | Gana el usuario].
NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
tres párrafos.
EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
código para su correcta utilización.
EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
juego, es decir:
● Una jugada: gana el ganador de esa única jugada.
● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
el usuario gane una jugada y la computadora la otra.
● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc. */