/**
 * 
 */

const read = require('readline-sync')

//Variavel
let comprimento,  altura, largura, volume

//Entrada
comprimento = Number(read.question("Digite o comprimento do aquario em centimetros: ").replace(",","."))
largura = Number(read.question("Digite a largura do comprimento do aquario: ").replace(",","."))
altura = Number(read.question("Digite a altura do aquario em centimetros: ").replace(",","."))

//Processamento

volume = ((comprimento * largura)* altura)/1000

//Saida
console.log(`Volume: ${volume.toFixed(2)}L`)

