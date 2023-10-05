/**
 * Poo - Fundamentos da programação Orientada a objetos
 * Exemplo do jogo minecraft
 */

// classe modelo (Abstração)
class Bloco {
    //atributos //constructor dentro da classe modelo cria os atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    //ações (métodos)
    criarBloco() {
        console.log("-----------------------------------------")
        console.log("┌──┐")
        console.log("└──┘")
        console.log(`Bloco de: ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado `)
    }

    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}
// classe modelo com herança(extends)
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)//super serve para puxar a classe já feita //this. cria 
        this.conquista = conquista
    }

    //metodos
    criarEnxada() {
        console.log("-----------------------------------------")
        console.log(" _")
        console.log("/ ◝")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Enxada de ${this.resistencia}`)
    }
    arar() {
        console.log("._._._._. Terra arada!")
        if (this, this.conquista === true) {
            console.log("☀ conquista obtida!")
        }
    }


    //Polimorfismo
    minerar() {
        console.log("♰ dano atribuido!")
    }
}

class Espada extends Bloco {
    //atributos
    constructor(resistencia, textura) {
        super(resistencia, textura)
    }

    criarEspada() {
        console.log("-----------------------------------------")
        console.log("|")
        console.log("=")
        console.log("'")
        console.log(`Espada de ${this.textura}`)
        console.log(`Resistençia da Espada ${this.resistencia}`)
    }

    //Polimorfismo
    minerar() {
        console.log("♰ dano atribuido!")
    }
}

class VaraDePesca extends Bloco{
    //Atributos
    constructor(resistencia, textura, pesca){
        super(resistencia, textura)
        this.pesca = pesca
    }

    criarvara() {
        console.log("-----------------------------------------")
        console.log(" /◝")
        console.log("/   ◝")
        console.log("      *")
        console.log(`Vara de pesca de ${this.textura}`)
        console.log(`Resistencia da Vara de Pesca ${this.resistencia}`)
    }
    pescar() {
        console.log("~~~~~~~~~~~ Pesca concluida!")
        if (this, this.pesca === true) {
            console.log("☀ conquista obtida Pesca!")
        }
    }

}



//criação de objetos (Mundo)
console.clear()

console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")


//criando um bloco de terra // new cria um novo objeto
//new (novo objeto)
//bloco (classe modelo(resistencia, textura))
const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

//criando um bloco de madeira
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBloco()
bloco2.construir()

//criando um bloco de pedra
const bloco3 = new Bloco(5, "pedra")
bloco3.criarBloco()
bloco3.minerar()


// criando um bloco de areia
const bloco4 = new Bloco(3, "areia")
bloco4.criarBloco()



//criando uma enxada de madeira

const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()


//criando uma enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//criando uma enxada de diamante
const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar()


//Criando uma Espada de madeira
const espada1 = new Espada(2, "Madeira")
espada1.criarEspada()

//Criando uma Espada de ferro
const espada2 = new Espada(5, "ferro")
espada2.criarEspada()
espada2.minerar()

//Criando uma Espada de Diamante
const espada3 = new Espada(10, "Diamante")
espada3.criarEspada()
espada3.minerar()


//Criando uma vara de pesca de madeira
const pesca1 = new VaraDePesca(2, "Madeira")
pesca1.criarvara()

//criando uma vara de pesca de ferro
const pesca2 = new VaraDePesca(5, "Ferro", true)
pesca2.criarvara()
pesca2.pescar()
