/**
 * estudo das funções 
 * Calculadora
 */

const read = require('readline-sync')

console.clear()
console.log("calculadora\n") // \n quebra de linha 

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Porcentagem ")
let opcao = Number(read.question("Digite a opcao desejada: ").replace(",", "."))
//melhorando a experiência do usuario (validação)
if(opcao < 1 || opcao > 5){

    console.log("opcao invalida")
    process.exit([0]) // encerra o aplicativo no console
} 
console.clear()
let num1 = Number(read.question("Digite o primeiro valor: ").replace(",", "."))
let num2 = Number(read.question("Digite o segundo valor: ").replace(",", "."))

switch (opcao) {
    case 1:
        //executar a função somar
        somar(num1, num2)
        break

    case 2:
        //executar a função Subtrair
        subtrair(num1, num2)
        break

    case 3:
        //executar a função Multiplicar
        multiplicar(num1, num2)
        break


    case 4:
        //executar a função Dividir
        dividir(num1, num2)
        break

    case 5:
        //executar a função Dividir
        porcentagem(num1, num2)
        break

    
        console.log("Opcao invalida")
        break
}

//função somar 
// observação funções não atribuidas a variaveis pode ser declarada no fim do codigo, funções atribuidas e arrow function precisam ser declaradas no inicio do codigo

function somar(num1, num2) {
    return console.log(`A soma de ${num1} + ${num2} = ${num1 + num2} `)
}

function subtrair(num1, num2) {
    return console.log(`A Subtracao de ${num1} - ${num2} = ${num1 - num2} `)
}

function multiplicar(num1, num2) {
    return console.log(`A Multiplicacao de ${num1} * ${num2} = ${num1 * num2} `)
}

function dividir(num1, num2) {
    if (num1 === 0 || num2 === 0 ){
    console.log("não pode dividir por zero")
    process.exit([0])
    }
    else{
    return console.log(`A Divisao de ${num1} / ${num2} = ${num1 / num2}  `)
    }
}

function porcentagem(num1, num2) {
    return console.log(` %${num1} de ${num2} = ${(num1 * num2)/100} `)
}