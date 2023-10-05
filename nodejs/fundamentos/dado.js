/**
 * jogo do dados
 */

const read = require("readline-sync")

let face
let escolha = "s"
do {
    console.clear()
    console.log("-------jogo do dado")
    read.question("Pressione tecla [Enter] para lancar o dado: ")

    face = Math.floor(Math.random() * 6 + 1)

    switch (face) {
        case 0:
            console.log(" _____")
            console.log("|     |")
            console.log("|  0  |")
            console.log("|_____|")
            console.log("")
            break
        case 1:
            console.log(" _______")
            console.log("|       |")
            console.log("|   0   |")
            console.log("|_______|")
            console.log("")
            break
        case 2:
            console.log(" _______")
            console.log("|o      |")
            console.log("|       |")
            console.log("|______o|")
            console.log("")
            break
        case 3:
            console.log(" ______")
            console.log("|O     |")
            console.log("|  O   |")
            console.log("|_____O|")
            console.log("")
            break
        case 4:
            console.log(" ______")
            console.log("|O    O|")
            console.log("|      |")
            console.log("|O____O|")
            console.log("")
            break
        case 5:
            console.log(" _______")
            console.log("|O     O|")
            console.log("|   O   |")
            console.log("|O_____O|")
            console.log("")
            break
        case 6:
            console.log(" ______")
            console.log("|O    O|")
            console.log("|O    O|")
            console.log("|O____O|")
            console.log("")
            break
    }
    escolha = read.question("deseja jogar novamente(s/n)")
} while (escolha === "s")
