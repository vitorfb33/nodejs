/**
 * Conversor de milhas para kilometros
 */

//importação do pacote readline-sync
const read = require('readline-sync')




console.log("+-+-+-+-+-+-+-+-+-+")
console.log("|c|o|n|v|e|r|s|o|r|")
console.log("+-+-+-+-+-+-+-+-+-+")

//Variavel
let km, milhas

//Entrada
milhas = Number(read.question("Coloque a quantidade de milhas para ser convertida: ").replace(",","."))

//Processamento

km = milhas * 1.609344

//Saida
console.clear()
console.log(`${km.toFixed(2)}KM `)
