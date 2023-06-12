const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Como 'i' é LET, e LET tem escopo de BLOCO, funcs[]() acessa um valor LOCAL (não GLOBAL)
// Decorrência do conceito de CLOSURE
// CLOSURE: capacidade de uma função de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico
funcs[2]() // imprime 2
funcs[6]() // imprime 6
funcs[8]() // imprime 8