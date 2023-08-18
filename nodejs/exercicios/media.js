/**
 * App para calcular a media de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//Variaveis
let nome, disciplina
let nota1, nota2, media
let aprovado, Reprovado

console.clear()
console.log( "  __              ___           __ ")              
console.log(" /\\ \\            /\\_ \\         /\\ \\__  __ ")             
console.log(" \\ \\ \\____    ___\\//\\ \\      __\\ \\ ,_\\/\\_\\    ___ ___ ")  
console.log("  \\ \\ '__`\\  / __`\\\\ \\ \\   /'__`\\ \\ \\/\\/\\ \\ /' __` __`\\ ")
console.log("   \\ \\ \\L\\ \\/\\ \\L\\ \\\\_\\ \\_/\\  __/\\ \\ \\_\\ \\ \\/\\ \\/\\ \\/\\ \\ ")
console.log("    \\ \\_,__/\\ \\____//\\____\\ \\____\\\\ \\__\\\\ \\_\\ \\_\\ \\_\\ \\_\\  ")
console.log("     \\/___/  \\/___/ \\/____/\\/____/ \\/__/ \\/_/\\/_/\\/_/\\/_/  ")
console.log("")


//Entrada
nome = read.question("Digite o seu nome: ")
disciplina = read.question("Digite a disciplina: ")
nota1 = Number(read.question("Digite a nota 1: ").replace(",","."))
nota2 = Number(read.question("Digite a nota 2: ").replace(",","."))

//processamento
media = (nota1 + nota2) / 2

//Saida
console.clear()
console.log("---------------------------------")
console.log("Ficha do Aluno")
console.log(`nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`nota 1: ${nota1}`)
console.log(`nota 2: ${nota2}`)
console.log(`media final: ${media}`)
console.log("---------------------------------")
if(media >= 6){

console.log ("aprovado")

}

if(media <= 5 ){

    console.log("Reprovado")
}

