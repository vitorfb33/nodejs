/**
 * gasolina vs etanol
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//importação do pacote colors
const colors = require("colors")

//variavel
let gasolina, etanol, resultado


console.clear
console.log("======================")
console.log("= gasolina x entanol =")
console.log("======================")
console.log("")

//entrada
etanol = Number(read.question("quanto de gasolina: ").replace(",","."))
gasolina = Number(read.question("quanto de etanol: ").replace(",","."))

//processamento

resultado = gasolina/etanol

//saida
 if ( resultado <= 0.7    ){
    console.log("Abastecer com alcool".green)
} else {
    console.log("Abastecer com gasolina".red)
}

