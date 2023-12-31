// estrategia 1 para gerar valor padrão
function soma1(a, b, c) { // estratégia muito utilizada ainda
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

// soma1(0, 0, 0) = 3 -> Motivo: 0 (false) || 1 (true) = 1 (true)
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // estratégia mais segura para se trabalhar com numbers
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ECMA Script 2015 (ES6)
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))