const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() { // função anônima
        console.log(i)
    })
}

// Como 'i' é VAR, e VAR não tem escopo de BLOCO, funcs[]() acessa um valor GLOBAL (não LOCAL)
funcs[2]() // imprime 10
funcs[8]() // imprime 10