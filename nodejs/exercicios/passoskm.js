/**
 * conversor de passos em km 
 */

const read = require('readline-sync')

//variavel
let passos, km


//entrada
passos = Number(read.question("Digite o passos dados ").replace(",","."))

//processamento

km = passos * 0.762 / 1000

//saida
console.clear()
console.log(`O seus passos em foram: ${km.toFixed(3)}`)
