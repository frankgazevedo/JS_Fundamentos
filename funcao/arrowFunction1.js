// function expression
let dobro = function (a) {
    return 2 * a
}
console.log(dobro(Math.PI))

// Toda Arrow Function é uma function expression
dobro = (a) => {
    return 2 * a // retorno EXPLÍCITP
}
console.log(dobro(Math.PI))

// Toda Arrow Function é uma function expression
dobro = a => 2 * a // retorno IMPLÍCITO
console.log(dobro(Math.PI))

// function expression
let ola = function () {
    return 'Olá'
}
console.log(ola())

// Toda Arrow Function é uma function expression
ola = () => 'Olá' // retorno IMPLÍCITO
console.log(ola())

// Toda Arrow Function é uma function expression
ola = _ => 'Olá' // possui um param // retorno IMPLÍCITO
console.log(ola())