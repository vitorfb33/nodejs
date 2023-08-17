
//importação de modulos
const read = require('readline-sync')

//variavel
let total, desconto, valor, dinheiro, troco

console.log (" oooooooooo ooooooooo  ooooo  oooo ")
console.log (" 888    888 888    88o  888    88   ")
console.log (" 888oooo88  888    888   888  88    ")
console.log (" 888        888    888    88888     ")
console.log (" o888o      o888ooo88      888      ")
console.log("")


//entrada

valor = Number(read.question("Digite o valor total da compra: "))
desconto = Number(read.question("Digite o valor do desconto: "))

//Processamento

total = valor - ((desconto * valor) /100 )

//sainda
console.log(`o valor total foi R$ ${total.toFixed(2)} Reais`) 


//Entrada2
dinheiro = Number(read.question("Digite o valor do dinheiro entregue"))

//processamento2
troco = dinheiro - total

//saida
console.log(`troco de R$ ${troco.toFixed(2)}`)