/**
 * calculo da área  e perimetro de um retangulo
 */

const read = require('readline-sync')

//Variaveis
let base,altura,area,perimetro

console.clear()
console.log("Retangulo")
console.log("")
console.log(" _______________________")
console.log("|                       |")
console.log("|                       | Altura")
console.log("|_______________________|")
console.log("          Base          ")

//entrada
altura = Number(read.question("Digite o valor da altura").replace(",","."))
base = Number(read.question("Digite o valor da base").replace(",","."))

//Processamento1

area = base * altura

//Processamento2

perimetro = base + altura + base + altura

//Saida 1

console.log(`Área do retângulo: ${area.toFixed(2)} metros quadrados`)

//Saida 2

console.log(`Perimetro do retângulo: ${perimetro.toFixed(2)} metros`)