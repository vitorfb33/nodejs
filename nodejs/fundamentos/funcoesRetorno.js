/**
 * Estudo das funções
 * Funções com parametros e retorno
 */

// sintaxe comum
function somar(num1, num2){
    return (console.log(num1 + num2))
}

//para executar a função, devemos passar dois valores
somar ( 2, 5 )


//função atribuida
let somarAtribuida = function (num1, num2){
    return (console.log(num1 + num2))
}

somarAtribuida (5 ,5)
                                                                // 3 formas de fazer funções

//arrow function

let somaAF = (num1, num2) =>{
    return (console.log(num1 + num2))
}

somaAF (10, 10 )