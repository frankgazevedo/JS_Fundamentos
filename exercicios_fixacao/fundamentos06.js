/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

// function declaration
function aplicacaoJurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)
}
console.log(aplicacaoJurosSimples(1200, 0.02, 14)) // imprime '1536'

// Toda Arrow Function é uma function expression
let aplicacaoJurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
console.log(aplicacaoJurosCompostos(620, 0.015, 24)) // imprime '886.2917433959934'

aplicacaoJurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => (capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao).toFixed(2).toString().replace('.', ',')
console.log(aplicacaoJurosCompostos(620, 15/1000, 24)) // imprime '886.29'