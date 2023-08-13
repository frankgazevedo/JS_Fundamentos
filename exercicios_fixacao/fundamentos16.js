/*
16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos 
na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

// function declaration
function compraCarro (modelo){
    switch (modelo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}
compraCarro(0) // imprime 'Não trabalhamos com este tipo de automóvel aqui'
compraCarro('hatch') // imprime 'Compra efetuada com sucesso'
compraCarro('sedan') // imprime 'Tem certeza que não prefere este modelo?'
compraCarro('motocicleta') // imprime 'Tem certeza que não prefere este modelo?'
compraCarro('caminhonete') // imprime 'Tem certeza que não prefere este modelo?'
compraCarro('a') // imprime 'Não trabalhamos com este tipo de automóvel aqui'

// Toda Arrow Function é uma function expression
let comprarCarro = (modelo) => {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}
console.log(comprarCarro(0)) // i0mprime 'Não trabalhamos com este tipo de automóvel aqui'
console.log(comprarCarro('hatch')) // imprime 'Compra efetuada com sucesso'
console.log(comprarCarro('sedan')) // imprime 'Tem certeza que não prefere este modelo?'
console.log(comprarCarro('motocicleta')) // imprime 'Tem certeza que não prefere este modelo?'
console.log(comprarCarro('caminhonete')) // imprime 'Tem certeza que não prefere este modelo?'
console.log(comprarCarro('a')) // imprime 'Não trabalhamos com este tipo de automóvel aqui'