function obtenerJugadaComputadora() {
    let opciones = [`piedra`, `papel`, `tijeras`]
    let indice = Math.floor(Math.random() * 3)
    let jugadaComputadora = opciones[indice]
    return jugadaComputadora
}

const readlineSync = require('readline-sync');
function obtenerJugadaUsuario() {
const opciones = [`piedra`, `papel`, `tijeras` ]
    let jugadaUsuario = readlineSync.question('Ingrese piedra, papel o tijeras:').toLowerCase()
    while (!opciones.includes(jugadaUsuario)) {
    console.log(`Opcion invalida. Intentelo nuevamente.`)
    jugadaUsuario = readlineSync.question('Ingrese piedra, papel o tijeras:').toLowerCase();
}
return jugadaUsuario
}

function determinarGanador(jusuario, jcompu) {
    switch (jusuario) {
        case `piedra`:
            if(jcompu==`piedra`) {
                return (`Empate`)
            } else if (jcompu== `papel`) {
                return(`Gana la computadora`)
            } else {
                return(`Gana el usuario`);
            }
            break;
        case `papel`:
            if(jcompu==`piedra`) {
                return(`Gana el usuario`)
            } else if (jcompu== `papel`) {
                return(`Empate`)
            } else {
                return(`Gana la computadora`);
            }
            break;
        case `tijeras`:
            if(jcompu==`piedra`) {
                return(`Gana la computadora`)
            } else if (jcompu== `papel`) {
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
console.log(`La computadora eligio: ${jcompu}. El usuario eligio: ${jusuario}.
El resultado fue: ${resultado}.`)

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