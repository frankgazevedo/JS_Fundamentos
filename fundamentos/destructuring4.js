// novo recurso do ECMA Script 2015 (ES6)
// DESTRUCTURE = desestruturar
// Token do destructure = []
// Destructure em Array
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([])) // [] = empty array
console.log(rand()) // essa linha dá erro, pois não passamos um array para a function