// novo recurso do ECMA Script 2015 (ES6)
// DESTRUCTURE = desestruturar
// Token do destructure = []
// Destructure em Object
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // = console.log(rand({ max: 50, min: 40 })) 
console.log(rand({ min: 955 }))
console.log(rand({})) // {} = empty object
console.log(rand()) // essa linha dá erro, pois não passamos o object para a function