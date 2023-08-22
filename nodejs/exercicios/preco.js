/**
 * desenvolver um APP para calcular o preço de venda de um produto em função do preço 
 * de custo e margem de lucro(%)
 * 
 */

//importação do pacote readline-sync
const read = require('readline-sync')

console.clear
console.log("+-+-+-+-+-+-+-+-+")
console.log("|c|a|l|c|u|l|a|r|")
console.log("  |P|r|e|ç|o|    ")
console.log("+-+-+-+-+-+-+-+-+")
console.log("")


//variavel
let custo, lucro, vendas 

//entrada
custo = Number(read.question("Digite o custo: ").replace(",","."))
lucro = Number(read.question("Digite a margem de lucro(%): ").replace(",","."))

//Processamento

venda = custo + ((lucro * custo) /100)

//saida

console.clear()
console.log(`Preço de venda foi ${venda.toFixed(2)} R$`)


