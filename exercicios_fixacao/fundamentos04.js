/*
04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

// function declaration
function divisao (dividendo, divisor) {
    console.log("Resultado (divisão real): " + dividendo/divisor);
    console.log("Resultado (divisão inteira): " + Math.floor(dividendo/divisor));
    console.log(`Resto (divisão inteira): ${dividendo % divisor}`)
}
divisao(5, 2)

// Toda Arrow Function é uma function expression
let div = (dividendo, divisor) => {
    console.log("Resultado (divisão real): " + dividendo/divisor);
    console.log("Resultado (divisão inteira): " + Math.floor(dividendo/divisor));
    console.log(`Resto (divisão inteira): ${dividendo % divisor}`)
}
div(5, 2)