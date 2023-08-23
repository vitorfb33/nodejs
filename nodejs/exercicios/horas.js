/**
*calcular  o valor da hora de serviço de
*um técninco de informatica
*/

//variavel
let remuneracao, custo, investimento, horas
const reserva = 30

//entrada
remuneracao = Number(read.question("Digite a remuneração: ").replace(",","."))
reserva 
custo = Number(read.question("Digite o custo: ").replace(",","."))
investimento = Number(read.question("Digite o investimento(%): ").replace(",","."))
horas

//Processamento

horas = (remuneracao +(((remuneracao * reserva)/100) + (custo +(remuneracao * investimento)/ 100)))
horas = horas / 160
//saida

console.clear()
console.log(`valor da hora de serviço ${horas.toFixed(2)} R$`)
