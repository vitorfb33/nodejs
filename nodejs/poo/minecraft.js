/**
 * Poo - Fundamentos da programação Orientada a objetos
 * Exemplo do jogo minecraft
 */ 

// classe modelo (Abstração)
class Bloco{
    //atributos //constructor dentro da classe modelo cria os atributos
    constructor(resistencia, textura){
        this.resistencia = resistencia
        this.textura = textura
    }
    //ações (métodos)
    criarBloco(){
        console.log("-----------------------------------------")
        console.log("┌──┐")
        console.log("└──┘")
        console.log(`Bloco de: ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    construir(){
        console.log(`Bloco de ${this.textura} colocado `)
    }

    minerar(){
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}
// classe modelo com herança(extends)
class Enxada extends Bloco{
    //atributos
    constructor(resistencia, textura, conquista){
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
        if (this,this.conquista === true){
            console.log("☀ conquista obtida!")
        }
    }

    //Polimorfismo
    minerar(){
        console.log("♰ dano atribuido!")
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
const bloco1  = new Bloco(1, "terra")
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

const enxada1 = new  Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()


//criando uma enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()


const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar()
