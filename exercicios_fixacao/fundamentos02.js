/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

// function declaration
function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}
console.log(classificaTriangulo(2, 2, 2)); // equilátero
console.log(classificaTriangulo(2, 2, 1)); // isóceles
console.log(classificaTriangulo(2, 1, 2)); // isóceles
console.log(classificaTriangulo(1, 2, 2)); // isóceles
console.log(classificaTriangulo(1, 2, 3)); // escaleno

// Toda Arrow Function é uma function expression
let tipoTriangulo = (lado1, lado2, lado3) => {
    if(lado1 == lado2 && lado2 == lado3) return 'Equilátero'
    else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) return 'Isóceles'
    else return 'Escaleno'
}
console.log(tipoTriangulo(2, 2, 2)) // equilátero
console.log(tipoTriangulo(2, 2, 1)) // isóceles
console.log(tipoTriangulo(2, 1, 2)) // isóceles
console.log(tipoTriangulo(1, 2, 2)) // isóceles
console.log(tipoTriangulo(1, 2, 3)) // escaleno