// escopo de VAR: GLOBAL
let numero = 1
{
    // escopo de LET: BLOCO de código {}
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// escopo de VAR: GLOBAL e FUNÇÃO
// escopo de LET: GLOBAL, BLOCO e FUNÇÃO