/**
 * erro porcentual
 */

const read = require('readline-sync')

//variaveis
let erro, observador, verdadeiro

//entrada
observador = Number(read.question("valor observado: ").replace(",","."))
verdadeiro = Number(read.question("valor real: ").replace(",","."))

//processamento

erro =  ( observador - verdadeiro) * 100 / verdadeiro 



// saida
console.clear()
console.log(`margem de erro: ${erro}%`)
