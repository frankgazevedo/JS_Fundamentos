/*
13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

// function declaration
function diaDaSemana (dia){
    switch (dia) {
        case 1:
            console.log('fim de semana')
            break
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6:
            console.log('dia útil')
            break
        case 7:
            console.log('fim de semana')
            break
        default:
            console.log('dia inválido')
    }
}
diaDaSemana(0) // imprime 'dia inválido'
diaDaSemana(1) // imprime 'fim de semana'
diaDaSemana(2) // imprime 'dia útil'
diaDaSemana(3) // imprime 'dia útil'
diaDaSemana(4) // imprime 'dia útil'
diaDaSemana(5) // imprime 'dia útil'
diaDaSemana(6) // imprime 'dia útil'
diaDaSemana(7) // imprime 'fim de semana'
diaDaSemana('a') // imprime 'dia inválido'

// Toda Arrow Function é uma function expression
let classificaDia = (dia) => {
    switch (dia) {
        case 1:
            console.log('fim de semana')
            break
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6:
            console.log('dia útil')
            break
        case 7:
            console.log('fim de semana')
            break
        default:
            console.log('dia inválido')
    }
}
classificaDia(0) // imprime 'dia inválido'
classificaDia(1) // imprime 'fim de semana'
classificaDia(2) // imprime 'dia útil'
classificaDia(3) // imprime 'dia útil'
classificaDia(4) // imprime 'dia útil'
classificaDia(5) // imprime 'dia útil'
classificaDia(6) // imprime 'dia útil'
classificaDia(7) // imprime 'fim de semana'
classificaDia('a') // imprime 'dia inválido'