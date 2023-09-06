/**
 * ELEITOR - Obrigatoriedade de Votar
 */

const read = require('readline-sync')


//variaveis
let idade


//entrada
idade = Number(read.question("Digite a sua idade:"))

//processamento

if (idade < 16) {
    console.log("Proibido Votar")
} else if (idade > 17 && idade < 70  ) {
    console.log("Voto obrigatorio")
} else {
    console.log("Voto facultativo")
}


