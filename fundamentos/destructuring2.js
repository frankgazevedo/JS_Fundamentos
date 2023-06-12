// novo recurso do ECMA Script 2015 (ES6)
// DESTRUCTURE = desestruturar
// Token do destructure = []
// Destructure em Array
const [a] = [10]
console.log(a)

// equivalente a [n1 = 10, IGNORED = 7, n3 = 9, IGNORED = 8, n5 (undefined), n6 = 0 (default)]
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // imprime 10, 

// equivalente a [IGNORED = (undefined, 8, 8), [IGNORED = 9, nota = 6, IGNORED = 8]]
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)