/**
 * Estudo das estruturas de controle while | do while
 */


const read = require('readline-sync')

//variavel
let x = 1
let y = 1



//processamento

while (x < 11){
    console.log("teste da estrutura while")
    x++
}

read.question("pressione a tecla [enter] para continuar")
console.clear()

do {
    console.log("teste da estrutura do-while")
    y++
} while (y < 11)
