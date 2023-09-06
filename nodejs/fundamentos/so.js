/**
 * exemplo de uso da istrutura switch case 
 */

const read = require('readline-sync')

let opcao

console.clear()
console.log("Sistema operacional")
console.log("")
console.log("1. Windows")
console.log("2. Linux")
console.log("3. Mac")

opcao = Number(read.question("Escolha um sistema "))

switch(opcao){
    case 1:
        console.clear()
        console.log("carregando o Windows..............")
console.log("                ....iilllllllllllll")
console.log("    ....iillll  lllllllllllllllllll")
console.log("iillllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("")    
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("llllllllllllll  lllllllllllllllllll")
console.log("`^^^^^^lllllll  lllllllllllllllllll")
console.log("      ````^^^^  ^^lllllllllllllllll")
console.log("                     ````^^^^^^llll")
        break

        case 2:
        console.clear()
        console.log("carregando o Linux.........")
        break

        case 3:
        console.clear()
        console.log("carregando o Mac..............")
        break

        default: 
        console.log("Opcão em invalida")
        break
}