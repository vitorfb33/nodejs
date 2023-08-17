let nota1, nota2, media
let nome, disciplina
let Aprovado, reprovado

console.clear
console.log( "  __              ___           __ ")              
console.log(" /\\ \\            /\\_ \\         /\\ \\__  __ ")             
console.log(" \\ \\ \\____    ___\\//\\ \\      __\\ \\ ,_\\/\\_\\    ___ ___ ")  
console.log("  \\ \\ '__`\\  / __`\\\\ \\ \\   /'__`\\ \\ \\/\\/\\ \\ /' __` __`\\ ")
console.log("   \\ \\ \\L\\ \\/\\ \\L\\ \\\\_\\ \\_/\\  __/\\ \\ \\_\\ \\ \\/\\ \\/\\ \\/\\ \\ ")
console.log("    \\ \\_,__/\\ \\____//\\____\\ \\____\\\\ \\__\\\\ \\_\\ \\_\\ \\_\\ \\_\\  ")
console.log("     \\/___/  \\/___/ \\/____/\\/____/ \\/__/ \\/_/\\/_/\\/_/\\/_/  ")
console.log("")


nome = ("Nelson Bergami")
disciplina = ("Matematica")
nota1 = 1
nota2 = 1
media = (nota1 + nota2) / 2 



console.log (`Nome: ${nome}`)
console.log (`Disciplina: ${disciplina}`)
console.log (`nota1: ${nota1}`)
console.log (`Nota2: ${nota2}`)
console.log (`Media: ${media}`)


 if(media >= 6){

    console.log("Aprovado")
 }   

 if(media <= 5){

    console.log("Reprovado")
 }   