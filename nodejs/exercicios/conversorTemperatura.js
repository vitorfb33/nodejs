/**
 * Conversor de temperatura
 * Fahrenheit para Celsius
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//variavel
let fahrenheit, grauscelsius

//entrada
fahrenheit = Number(read.question("Digite a temperatura em Fahrenheit: "))

//Processamento

grauscelsius= (fahrenheit - 32) / 1.8

//Saida

console.clear()
console.log(`${grauscelsius.toFixed(2)}  Graus Celsius `)