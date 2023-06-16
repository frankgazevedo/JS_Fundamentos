function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // imprime 'R$ NaN', pois não especificamos o escopo (params) para getPreco(): Object Global? Object 'produto'?

global.preco = 20 // global (node) === window (browser)
global.desc = 0.1 // global (node) === window (browser)
console.log(getPreco()) // imprime 'R$ 18', pois, no caso, getPreco() foi calculado com base no escopo do Object Global

console.log(produto.getPreco()) // imprime 'R$ 3900.65', pois, no caso, getPreco() foi calculado com base no escopo do Object 'produto'

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // imprime 'R$ 39992', pois, no caso, getPreco() foi calculado com base no escopo do Object 'carro'
console.log(getPreco.apply(carro)) // imprime 'R$ 39992', pois, no caso, getPreco() foi calculado com base no escopo do Object 'carro'

// call: o 1º param é escopo/contexto; os demais params são repassados para o Object/Function do escopo/contexto
console.log(getPreco.call(carro, 0.17, '$')) // imprime '$ 46790.64', pois, no caso, getPreco() foi calculado com base no escopo do Object 'carro'

// apply: o 1º param é escopo/contexto; os demais params são repassados para o Object/Function do escopo/contexto
console.log(getPreco.apply(global, [0.17, '$'])) // imprime '$ 21.06', pois, no caso, getPreco() foi calculado com base no escopo do Object Global