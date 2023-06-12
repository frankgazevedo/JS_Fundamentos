const peso1 = 1.0; // mesmo com o '.0', temos um Integer
const peso2 = Number('2.0'); // mesmo com o '.0', temos um Integer
const peso3 = 1.1; // com qualquer número diferente de 0 após o '.', não temos um Integer 
const peso4 = Number('2.1'); // com qualquer número diferente de 0 após o '.', não temos um Integer


console.log (peso1, peso2)
console.log(Number.isInteger(peso1)) // true
console.log(Number.isInteger(peso2)) // true
console.log(Number.isInteger(peso3)) // false
console.log(Number.isInteger(peso4)) // false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("Média: " + media)
console.log("Média (2f): " + media.toFixed(2))
console.log(media.toString()) // media em representação String (decimal)
console.log(media.toString(2)) // media em representação String (binária)
console.log(media.toString(8)) // media em representação String (octal)
console.log(media.toString(16)) // media em representação String (hexadecimal)

console.log("Number é: " + typeof Number) // Number é uma FUNÇÃO (tudo é função em JS)

// Operações extranhas com Number
console.log(7 / 0 ) // retorna o tipo INFINITY (em outras linguagens, como C/C++ e Java, o resultado é NaN (Not a Number))
console.log("10.2" / 2) // retorna o valor da divisão. JS consegue transformar a String "10.2" num Number
console.log("Show" * 2 ) // retorna um NaN (Not a Number)
console.log(0.1 + 0.7) // Não retorna o valor exato (0.8), em razão da especificação seguida por JS
// console.log(10.toString()) // Não funciona
console.log((10.25).toString()) // Funciona

console.log(Math.PI)
console.log("Math é: " + typeof Math)