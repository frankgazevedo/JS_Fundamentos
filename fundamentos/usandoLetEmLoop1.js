// escopo de VAR: GLOBAL e FUNÇÃO
// escopo de LET: GLOBAL, BLOCO e FUNÇÃO
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 'i'NÃO estará disponível fora do for por ser LET (o escopo foi de BLOCO)
console.log('i =', i) // 'i' is not defined