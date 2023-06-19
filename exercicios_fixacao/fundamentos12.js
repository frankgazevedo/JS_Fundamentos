/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

// function declaration
function fatorialSemRecurssividade (numero){
    let fatorial = 1
    for (let i = numero; i != 0; i--){
        fatorial *= i
    }
    return fatorial
}
console.log(fatorialSemRecurssividade(0)) // imprime '1'
console.log(fatorialSemRecurssividade(1)) // imprime '1'
console.log(fatorialSemRecurssividade(2)) // imprime '2'
console.log(fatorialSemRecurssividade(3)) // imprime '6'
console.log(fatorialSemRecurssividade(4)) // imprime '24'
console.log(fatorialSemRecurssividade(5)) // imprime '120'
console.log(fatorialSemRecurssividade(6)) // imprime '720'
console.log(fatorialSemRecurssividade(10)) // imprime '3628800'

// Toda Arrow Function é uma function expression
let fatorialComRecurssividade = (numero) => {
    if(numero == 0){
        return 1
    }
    else {
        return numero *= fatorialComRecurssividade(numero - 1)
    }
}
console.log(fatorialComRecurssividade(0)) // imprime '1'
console.log(fatorialComRecurssividade(1)) // imprime '1'
console.log(fatorialComRecurssividade(2)) // imprime '2'
console.log(fatorialComRecurssividade(3)) // imprime '6'
console.log(fatorialComRecurssividade(4)) // imprime '24'
console.log(fatorialComRecurssividade(5)) // imprime '120'
console.log(fatorialComRecurssividade(6)) // imprime '720'
console.log(fatorialComRecurssividade(10)) // imprime '3628800'