/**
 * Estudo das funções
 * Funções simples sem parametros ou retorno
 */

// observação funções não atribuidas a variaveis pode ser declarada no fim do codigo, funções atribuidas e arrow function precisam ser declaradas no inicio do codigo

//função simples
function hello() {
    console.log("hello function")
}

//para executar uma função basta escrever o nome da função junto com os parenteses
hello()

// funções atribuidas / a uma variavel
const hello2 = function(){
        console.log("hello function atribuida")
}

hello2()



//função atribuida simplificada  (arrow function) / => é igual function

const hello3 = () => {
    console.log("hello arrow atribuida")
}
hello3()

console.log(typeof(hello3))