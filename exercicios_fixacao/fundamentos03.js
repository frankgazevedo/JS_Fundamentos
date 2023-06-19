/*
03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

// function declaration
function power (base, expoente){
    //Método antigo:
    let resultado = Math.pow(base, expoente)

    return resultado
}
console.log(power(2, 3))

// Toda Arrow Function é uma function expression
let exponenciacao = (base, expoente) => base ** expoente // método atual
console.log(exponenciacao(2, 3))