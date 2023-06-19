/*
10) ​Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
ou false.
*/

// function declaration
function eDivisivelPorTres (numero){
    if (numero % 3 == 0){
        return true
    }
    return false
}
console.log(eDivisivelPorTres(4)) // imprime 'false'
console.log(eDivisivelPorTres(81)) // imprime 'true'

// Toda Arrow Function é uma function expression
let divisivelPorTres = (numero) => (numero % 3 == 0) ? true : false
console.log(eDivisivelPorTres(5)) // imprime 'false'
console.log(eDivisivelPorTres(27)) // imprime 'true'