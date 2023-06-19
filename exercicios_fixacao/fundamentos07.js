/*
07) ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores: um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

// function declaration
function resolverBhaskara1 (ax2, bx, c){
    delta = (bx ** 2) - 4 * ax2 * c
    if(delta < 0) {
        return 'Delta é negativo'
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

        return [x1, x2]
    }
}
console.log(resolverBhaskara1(1, 0, -1444)) // imprime '[ 38, -38 ]'

// Toda Arrow Function é uma function expression
let resolverBhaskara2 = (ax2, bx, c) => {
    
    let resultado = [] // inicializando um vetor vazio

    delta = (bx ** 2) - 4 * ax2 * c
    if(delta < 0) {
        return 'Delta é negativo'
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        
        resultado.push(x1) // add x1 ao vetor resultado
        resultado.push(x2) // add x2 ao vetor resultado

        return resultado
    }
}
console.log(resolverBhaskara2(5, 7, 12)) // imprime 'Delta é negativo'
console.log(resolverBhaskara2(2, 7, 5)) // imprime '[ -1, -2.5 ]'