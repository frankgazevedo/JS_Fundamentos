// HOIST = IÇAR 
console.log('a =', a) // a = undefined
var a = 2 // a variável será IÇADA (HOISTING). Logo, o 'a' da linha anterior receberá o VAR 'a' dessa linha
console.log('a =', a)

/* um código sem o HOISTING, mas com resultado similar seria assim:
var a;
console.log('a =', a) // a = undefined
a = 2
console.log('a =', a)
*/

// HOISTING não é algo que deve ser utilizado

// HOISTING não funciona com LET
console.log('b =', b)
let b = 2
console.log('b =', b)