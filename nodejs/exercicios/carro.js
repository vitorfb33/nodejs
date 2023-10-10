/**
 * Carro
 */

const read = require('readline-sync')


// classe modelo (Abstração)
class carro{
    //atributos //constructor dentro da classe modelo cria os atributos
    constructor(ano, cor, nome){
        this.ano = ano
        this.cor = cor
        this.nome = nome
    }

    //ações (métodos)
    criarcarro(){
        console.log("-----------------------------------------")
        console.log("┌──┐")
        console.log("O  O")
        console.log(`ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
        console.log(`Nome do Carro: ${this.nome}`)
    }

    ligar(){
        console.log(`carro ligado`)
    }

    desligar(){
        console.log(`:carro desligado  `)
    }

    acelerar(){
        console.log(`:carro em movimento/acelerando  `)
    }
}

// classe modelo com herança(extends)
class aviao extends carro{
    //atributos
    constructor(ano, cor, nome, envergadura){
        super(ano, cor, nome)//super serve para puxar a classe já feita //this. cria 
        this.envergadura = envergadura
    }


    criaraviao(){
        console.log("======================================")
        console.log("   ┌──┐  ")
        console.log("----------")
        console.log(`ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
        console.log(`Nome do avião: ${this.nome}`)
        console.log(`evergadura do avião: ${this.envergadura}`)
    }

    aterrizar(){
        console.log(`avião aterrisado  `)
    }

    acelerar(){
        console.log(`avião acelerando`)
    }

}












//criação de objetos (Mundo)
console.clear()
                                                      
console.log("===========")
console.log("  CARROS   ")
console.log("===========")


//criando um carro // new cria um novo objeto
//new (novo objeto)
//carro (classe modelo(ano, cor))
const uno1  = new carro (70, "amarelo", "uno")
uno1.criarcarro()
uno1.ligar()


const uno2  = new carro (70, "amarelo", "Uno")
uno2.criarcarro()
uno2.acelerar()

const uno3  = new carro (70, "amarelo", "Uno")
uno3.criarcarro()
uno3.desligar()



const fusca1  = new carro (70, "Azul-bebe", "Fusca")
fusca1.criarcarro()
fusca1.ligar()


const fusca2  = new carro (70, "Azul-bebe", "Fusca")
fusca2.criarcarro()
fusca2.acelerar()


const fusca3  = new carro (70, "Azul-bebe", "Fusca")
fusca3.criarcarro()
fusca3.desligar()


const ferrari1  = new carro (2002, "Vermelho", "Ferrari")
ferrari1.criarcarro()
ferrari1.ligar()


const ferrari2  = new carro (70, "Vermelho", "Ferrari")
ferrari2.criarcarro()
ferrari2.acelerar()



const ferrari3  = new carro (70, "Vermelho", "Ferrari")
ferrari3.criarcarro()
ferrari3.desligar()


const aviao1  = new aviao (2022, "Branco e Vermelho", "774" ,"10 metros")
aviao1.criaraviao()
aviao1.aterrizar()


const aviao2  = new aviao (2022, "Branco e Vermelho", "774" ,"10 metros")
aviao2.criaraviao()
aviao2.aterrizar()
aviao2.acelerar()