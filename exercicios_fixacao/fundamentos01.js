/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

// function declaration
function operacoes(x, y) {
    
    // funciona adequadamente
    console.log('\nx + y: ' + (x + y), '\nx - y: ' + (x - y), '\nx * y: ' + (x * y), '\nx / y: ' + (x / y))

    // Não funciona adequadamente
    /* console.log('\nx + y: ' + x + y, '\nx - y: ' + x - y, '\nx * y: ' + x * y, '\nx / y: ' + x / y) */
}
operacoes(9, 3)

// function declaration
function calcularOperacoes (operador1, operador2) {
    // imprime numbers
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}
calcularOperacoes(1, 2)


// function expression
let math_op = function (x, y) {
    console.log('\nx + y: ' + (x + y), '\nx - y: ' + (x - y), '\nx * y: ' + (x * y), '\nx / y: ' + (x / y))
}
math_op(10, 5) // a chamada a uma FUNCTION EXPRESSION só pode ocorrer após a sua declaração

// named function expression
const op = function op(x, y) {
    console.log('\nx + y: ' + (x + y), '\nx - y: ' + (x - y), '\nx * y: ' + (x * y), '\nx / y: ' + (x / y))
}
op(3, 4) // a chamada a uma NAMED FUNCTION EXPRESSION só pode ocorrer após a sua declaração

// Toda Arrow Function é uma function expression
const calc = (x, y) => console.log('\nx + y: ' + (x + y), '\nx - y: ' + (x - y), '\nx * y: ' + (x * y), '\nx / y: ' + (x / y))
calc(4, 3)