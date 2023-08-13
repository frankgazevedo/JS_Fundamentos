/*
14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

// function declaration
function classificaFruta (fruta){
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Erro: informe uma fruta válida')
    }
}
classificaFruta(0) // imprime 'Erro: informe uma fruta válida'
classificaFruta('maçã') // imprime 'Não vendemos essa fruta aqui'
classificaFruta('kiwi') // imprime 'Estamos com escassez de kiwis'
classificaFruta('melancia') // imprime 'Aqui está, são 3 reais o quilo'
classificaFruta('Frank') // imprime 'Erro: informe uma fruta válida'
classificaFruta('a') // imprime 'Erro: informe uma fruta válida'

// Toda Arrow Function é uma function expression
let classificarFruta = (fruta) => {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Erro: informe uma fruta válida'
    }
}
console.log(classificarFruta(0)) // imprime 'Erro: informe uma fruta válida'
console.log(classificarFruta('maçã')) // imprime 'Não vendemos essa fruta aqui'
console.log(classificarFruta('kiwi')) // imprime 'Estamos com escassez de kiwis'
console.log(classificarFruta('melancia')) // imprime 'Aqui está, são 3 reais o quilo'
console.log(classificarFruta('Frank')) // imprime 'Erro: informe uma fruta válida'
console.log(classificarFruta('a')) // imprime 'Erro: informe uma fruta válida'