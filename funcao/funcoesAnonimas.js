const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // o param 'operacao' possui um valor default: a função soma
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // a função 'soma' é um param default implícito
imprimirResultado(3, 4, soma) // passando explicitamente a função 'soma' como param 
imprimirResultado(3, 4, function (x, y) { // passando uma função anônima como param
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // passando uma Arrow Function como param

const pessoa = { // criando uma função dentro de um objeto
    falar: function () { // similar à 'falar() {'}
        console.log('Opa')
    }
}

pessoa.falar()