// novo recurso do ECMA Script 2015 (ES6)
// DESTRUCTURE = desestruturar
// Token do destructure = []
// Destructure em Object
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Tire/desestruture d(o) objeto 'pessoa' os atributos 'nome' e 'idade'
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa // essa destructure dará erro, pois não temos o objeto aninhado 'conta'
console.log(ag, num)