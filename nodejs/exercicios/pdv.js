/**
 * PDV - ponto de vendas
 */

//importação de modulos
const read = require('readline-sync')

//variaveis
let total, desconto, valor, dinheiro, troco

console.log (" oooooooooo ooooooooo  ooooo  oooo ")
console.log (" 888    888 888    88o  888    88   ")
console.log (" 888oooo88  888    888   888  88    ")
console.log (" 888        888    888    88888     ")
console.log (" o888o      o888ooo88      888      ")
console.log("")

//entrada
valor = Number(read.question("digite o valor total da compra: "))
desconto = Number(read.question("digite o valor do desconto: "))

//processamento

total = valor - ((desconto * valor) /100 ) 
troco = dinheiro - total

//saida 
console.log(`total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("___________________________________________________-")

//entrada 2
dinheiro = Number(read.question("digite o valor pago em dinheiro"))

//processamento 2
troco = dinheiro - total

//saida 2
console.log(`Troco R$ ${troco.toFixed(2)}`)

