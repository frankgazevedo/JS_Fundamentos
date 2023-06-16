function soma() {
    let soma = 0
    for (i in arguments) { // ARGUMENTS = array interno de uma função que armazena todos os parâmetros passados para a função
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // imprime 0
console.log(soma(1)) // imprime 1
console.log(soma(1.1, 2.2, 3.3)) // imprime 6.6

console.log(soma(1.1, 2.2, "Teste")) // imprime 3.3000000000000003Teste (concatena as strings)
console.log(soma('a', 'b', 'c')) // imprime 0abc (concatena as strings)