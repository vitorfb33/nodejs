/**
 * exercicio de fixação - poo 
 * 
*/


class conta{
    constructor(numero, titular, saldo){
        
        
        

        
        //-----------------------------------------------------------------------------------
        let _numero = numero // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getNumero = () => {
            return _numero
        }
        this.setNumero =(novoNumero) => {
            _numero = novoNumero
        }
        //-----------------------------------------------------------------------------------
        let _titular = titular // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getTitular = () => {
            return _titular
        }
        this.setTitular =(novoTitular) => {
            _titular = novoTitular
        }
        //-----------------------------------------------------------------------------------
        let _saldo = saldo // let _idade (encapsular a variavel)
        //metodos get e set (para acessar a variavel idade)
        this.getSaldo = () => {
            return _saldo
        }
        this.setSaldo =(novoSaldo) => {
            _saldo = novoSaldo
        }


    }
    

        // métodos
        exibirSaldo() {
            console.log(`saldo: R$ ${this.getSaldo().toFixed(2)}`)
        }
    
        depositar(valor) {
            this.setSaldo(this.getSaldo() + valor);
            console.log(`Credito de R$ ${valor.toFixed(2)}`)
        }
    
        sacar(valor) {
            // validação
            if (valor <= this.getSaldo()) {
                this.setSaldo(this.getSaldo() - valor)
                console.log(`Debito R$ ${valor.toFixed(2)}`)
            } else {
                console.log("Saque não permitido")
            }
        }
    
        pix(clienteFinal, valor) {
            // Validação
            if (valor <= this.getSaldo()) {
                this.setSaldo(this.getSaldo() - valor)
                clienteFinal.depositar(valor)
                console.log(`Transferência PIX de R$ ${valor.toFixed(2)} realizada com sucesso para ${clienteFinal.getTitular()}!`)
            } else {
                console.log("Transferência PIX não permitida, saldo insuficiente.")
            }
        }
    
        contaCorrente(valor, contaPoupanca) {
            if (valor <= this.getSaldo()) {
                this.setSaldo(this.getSaldo() - valor)
                contaPoupanca.depositar(valor)
                console.log(`Transferência de R$ ${valor.toFixed(2)} realizada com sucesso para a poupança de ${contaPoupanca.getTitular()}!`)
            } else {
                console.log("Transferência não permitida, saldo insuficiente.")
            }
        }
    }
    
    class Poupanca extends conta {
        constructor(numero, titular, saldo) {
           super(numero, titular, saldo)
        }
    
        exibirSaldoPoupanca() {
            console.log(`saldo da Poupança é de R$:${this.getSaldo().toFixed(2)}`)
        }
    }



/**
 * clientes
 */

console.clear()

console.log(" ____              _     ")
console.log("|  _ \\            | |   ")
console.log("| |_) | __ _ _ __ | | __")
console.log("|  _ < / _` | '_ \\| |/ /")
console.log("| |_) | (_| | | | |   < ")
console.log("|____/ \\__,_|_| |_|_|\\_\\")
                        


//instanciar um objeto
let cc1 = new conta (1, "Leandro Ramos", 10000)
console.log(`Cliente: ${cc1.getTitular()} conta ${cc1.getNumero()}`)
cc1.exibirSaldo()
cc1.depositar(5000)
cc1.exibirSaldo()
cc1.sacar(5000)
cc1.exibirSaldo()
let cc1p = new Poupanca (5001, "Leandro Ramos", 1000)
cc1p.exibirSaldoPoupanca()
console.log("------------------------------------------------------------------------------")



console.log(" ____              _     ")
console.log("|  _ \\            | |   ")
console.log("| |_) | __ _ _ __ | | __")
console.log("|  _ < / _` | '_ \\| |/ /")
console.log("| |_) | (_| | | | |   < ")
console.log("|____/ \\__,_|_| |_|_|\\_\\")

let cc2Robson = new conta (2, "Robson Vaamonde", 10000)
let cc2RobsonPoupanca = new Poupanca(5002, "Robson Vaamonde", 10000)
console.log(`Cliente: ${cc2Robson.getTitular()} Conta ${cc2Robson.getNumero()}`)
cc2Robson.contaCorrente(5000, cc2RobsonPoupanca);
cc2RobsonPoupanca.exibirSaldoPoupanca()
cc2Robson.exibirSaldo()



console.log("------------------------------------------------------------------------------")



console.log(" ____              _     ")
console.log("|  _ \\            | |   ")
console.log("| |_) | __ _ _ __ | | __")
console.log("|  _ < / _` | '_ \\| |/ /")
console.log("| |_) | (_| | | | |   < ")
console.log("|____/ \\__,_|_| |_|_|\\_\\")

let cc2Sirlene = new conta (3, "Sirlene Aparecida", 10000)
console.log(`Cliente: ${cc2Sirlene.getTitular()} Conta ${cc2Sirlene.getNumero()}`)
cc2Sirlene.exibirSaldo()
cc1.pix(cc2Sirlene, 1000)
cc2Sirlene.exibirSaldo()
