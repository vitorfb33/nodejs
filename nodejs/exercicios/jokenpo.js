/**
 * jokenpo
 */

//importação do pacote readline-sync
const read = require('readline-sync')



let jogador, computador, pedra, papel, tesoura

console.clear()
console.log("JOKENPO")
console.log("_______")
console.log("1. pedra")
console.log("2. papel")
console.log("3. tesoura")


jogador = Number(read.question("escolha um numero de 1 ate 3: "))

switch (jogador) {
    case 1:
        console.clear()
        console.log("1: pedra")
        console.log("")
        break

    case 2:
        console.clear()
        console.log("2: papel")
        console.log("")
        break

    case 3:
        console.clear()
        console.log("3: tesoura")
        console.log("")
        break

    default:
        console.log("Opcão em invalida")
        break


}



computador = Math.floor(Math.random() * 3 + 1 )

read.question("Pressione tecla [Enter] para fazer a comparacao: ")

console.log("1: pedra")
console.log("2: papel")
console.log("3: tesoura")
console.log("")
console.log(`escolha do jogador ${jogador}`)
console.log(`escolha do computador ${computador}`)

read.question("Pressione tecla [Enter] para ver o resultado: ")
console.clear()

if (jogador === computador) {

    console.clear()
    console.log("Empate")

}else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {

    
    console.log("Vitoria do jogador")

} else {


    console.log("Vitoria do computador")
}