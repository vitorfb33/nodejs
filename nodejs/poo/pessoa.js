/**
 * POO estudo do encapsulamento
 */



//Classe modelo
class Pessoa {
    //atributos
    constructor(nome, idade) {
        this.nome = nome // variavel publica
        //-----------------------------------------------------------------------------------
        let _idade = idade // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getIdade = () => {
            return _idade
        }
        this.setIdade =(novaIdade) => {
            _idade = novaIdade
        }
        //-----------------------------------------------------------------------------------

    }
    //metodos (ações)
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.getIdade()} anos.`)
    }
}
console.clear()
/** instanciar(criar) objetos ***/

const pessoa1 = new Pessoa("José", 55)
pessoa1.apresentar()
pessoa1.setIdade(56)
pessoa1.apresentar()



