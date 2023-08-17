/**
 * Porcentagem regra de 3 (calculo)
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//variavel
let x, y ,valor 
console.clear()
console.log ("===============================")
console.log ("== procentagem regra de 3   == ")
console.log ("===============================")
console.log ("===============================")
console.log("")


//entrada
x = Number(read.question("Digite um numero: ").replace(",",".")) 
y = Number(read.question("Digite um numero: ").replace(",","."))


//procecamento 
valor = (x * y) / 100

//saida 
console.clear()
console.log(`${x} % de ${y} = ${valor} `)

