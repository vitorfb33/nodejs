/**
*calcular  o valor da hora de serviço de
*um técninco de informatica
*/

//importação do pacote readline-sync
const read = require('readline-sync')

 //variavel
 
 let remuneração, custo, horasMes, horatecnica, estimativa, total
 
 //entrada 1
 remuneração = Number(read.question("Remuneracao mensal pretendida: ").replace(",","."))
 horasMes =  Number(read.question("Carga horario mensal de trabalho: ").replace(",","."))
 custo =  Number(read.question("custo operacional: ").replace(",","."))
 
 //processamento 1
 horatecnica = (remuneração +(remuneração * 0.3)+ custo + (remuneração * 0.2)) / horasMes
 
 //saida 1

 
 //entrada 2
 estimativa =  Number(read.question("Estimativa de hora desse Servico: ").replace(",","."))
 
 //processamento 2
 total = horatecnica * estimativa
 
//saida 2
console.clear()
console.log(`Hora Técnica: ${horatecnica.toFixed(2)}R$`)
console.log(`valor total a ser cobrado do cliente:${total.toFixed(2)}R$`)
