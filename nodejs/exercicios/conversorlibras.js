/**
 * desenvolver um app para converter libras em kg
 */

//importação do pacote readline-sync
const read = require('readline-sync')




console.clear
console.log("  ^    ^    ^    ^    ^    ^    ^    ^    ^    ^  ")
console.log(" /l\\  /i\\  /b\\  /r\\  /a\\  /s\\  /s\\  /-\\  /k\\  /g\\ ")
console.log("<___><___><___><___><___><___><___><___><___><___>")
console.log("")


//Variavel
let libras,kg

//entrada
libras =  Number(read.question("Digite a quantidade em libras: ").replace(",","."))

//Processamento
kg = libras / 2.2046

//Saida
console.clear()
console.log(`Peso em ${kg.toFixed(2)}KG `)