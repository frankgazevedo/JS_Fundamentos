// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // parâmetros: 2 e Undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // apenas os dois primeiros parâmetros são utilizados; o resto será ignorado
imprimirSoma() // undefined + undefinde = NaN

// Funcao com retorno
function soma(a, b = 1) { // o parâmetro 'b' está DEFINIDO, por DEFAULT
    return a + b
}

console.log(soma(2, 3)) // 2 + 3
console.log(soma(2)) // 2 + 1 (DEFINIDO por DEFAULT)
console.log(soma()) // undefined + 1 (DEFINIDO por DEFAULT) = NaN