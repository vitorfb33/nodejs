/**
 * Conversor de temperatura
 * Fahrenheit para Celsius
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//Variaveis
let grauscelsius, fahrenheit



console.clear()
console.log ("===============================")
console.log ("== conversor de temperatura == ")
console.log ("== Fahrenheit para Celsius  == ")
console.log ("===============================")
console.log("")

//Entrada
fahrenheit = Number(read.question("Digite a temperatura em Fahrenheit: "))

//Processamento
grauscelsius = (fahrenheit - 32) / 1.8

//Sainda
console.clear()
console.log(`${grauscelsius.toFixed(2)}  Graus Celsius `)


