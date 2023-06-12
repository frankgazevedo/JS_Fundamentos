// escopo de VAR: GLOBAL e FUNÇÃO
// escopo de LET: GLOBAL, BLOCO e FUNÇÃO
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// 'i' estará disponível fora do for por ser VAR
console.log('i =', i) // i = 10