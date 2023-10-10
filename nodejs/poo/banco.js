/**
 * exercicio de fixação - poo 
 * 
*/


class conta{
    constructor(numero, titular, saldo){
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }
    //metodos
    exibirSaldo(){
        console.log(`saldo: R$ ${this.saldo.toFixed(2)}`)
    }
    depositar(valor) {
        this.saldo += valor //+= soma o valor 1
        console.log(`Credito de R$ ${valor.toFixed(2)}`)
    }
    sacar(valor)/*aqui pode colocar o pix*/ {
        //validação
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Debito R$ ${valor.toFixed(2)}`)
        }else {
            console.log("Saque não permitido")

        }
    }
}

class Poupanca  extends conta{
    constructor(numero, titular, saldo){
       super (numero, titular, saldo)
       
    }
    exibirSaldoPoupanca(){
        console.log(`saldo da Poupança é de R$:${this.saldo.toFixed(2)}`)
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
console.log(`Cliente: ${cc1.titular} conta ${cc1.numero}`)
cc1.exibirSaldo()
cc1.depositar(5000)
cc1.exibirSaldo()
cc1.sacar(8000)
cc1.exibirSaldo()
let cc1p = new Poupanca (5001, "Leandro Ramos", 1000)
cc1p.exibirSaldoPoupanca()