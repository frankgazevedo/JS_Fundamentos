/* JS carrega primeiro as FUNCTION DECLARATION.
Portanto, a linha abaixo será executada normalmente, 
ainda que a função 'soma' seja declarada apenas após
a sua chamada. 
*/
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // a chamada a uma FUNCTION EXPRESSION só pode ocorrer após a sua declaração

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // a chamada a uma NAMED FUNCTION EXPRESSION só pode ocorrer após a sua declaração