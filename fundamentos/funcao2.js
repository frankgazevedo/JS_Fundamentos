// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) { // função ANÔNIMA
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // 2 parâmetros, mas em apenas uma sentença de código (a - b)
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) // apenas 1 parâmetro 
imprimir2('Legal!!!')