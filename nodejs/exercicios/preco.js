/**
 * desenvolver um APP para calcular o preço de venda de um produto em função do preço 
 * de custo e margem de lucro(%)
 * 
 */

//importação do pacote readline-sync
const read = require('readline-sync')


console.log("+-+-+-+-+-+-+-+-+")
console.log("|c|a|l|c|u|l|a|r|")
console.log("+-+-+-+-+-+-+-+-+")



//variavel
let custo, lucro, vendas 

//entrada
custo = Number(read.question("Digite o custo: ").replace(",","."))
lucro = Number(read.question("Digite o lucro: ").replace(",","."))

//Processamento

venda = custo + ((lucro * custo) /100)

//saida

console.clear()
console.log(`total de venda foi ${venda} R$` )


