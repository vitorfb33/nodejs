/**
 * Exemplo do uso do laço for
 */
//importação do pacote readline-sync
const read = require('readline-sync')

let valor 


console.clear()
console.log('tabuada__________________________')
valor = Number(read.question('digite um valor da tabuada: '))

for (let i = 1; i < 11; i++){
    console.log(`${valor} x ${i} = ${valor * i} `)
}

