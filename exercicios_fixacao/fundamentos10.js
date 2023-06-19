/*
10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

// function declaration
function basquesteStats1 (listaPontos){
    let resultado = [] // inicializando um vetor vazio
    let listaPontuacoes = listaPontos.split(", ")
    let qtdQuebraRecorde = 0
    let indicePiorJogo = 1
    let melhorJogo = listaPontuacoes[0]
    let piorJogo = listaPontuacoes[0]

    // FOR IN com Array
    for (let i in listaPontuacoes) {
        if(parseInt(listaPontuacoes[i]) > parseInt(melhorJogo)){ // desconsidera o primeiro jogo como melhor jogo
            melhorJogo = listaPontuacoes[i]
            qtdQuebraRecorde++
        }
        else if(parseInt(listaPontuacoes[i]) < parseInt(piorJogo)){
            piorJogo = listaPontuacoes[i]
            indicePiorJogo = parseInt(i) + 1; // necessário converter 'i' (String) em Number
        }
    }
    resultado.push(qtdQuebraRecorde) // add a quantidade de vezes que o recorde de maior número de pontos foi batido ao vetor resultado
    resultado.push(indicePiorJogo) // add o índice do pior jogo (quando) ao vetor resultado
    return resultado
}
console.log(basquesteStats1("10, 20, 20, 8, 25, 3, 0, 30, 1")) // imprime '[ 3, 7 ]'

// Toda Arrow Function é uma function expression
let basquesteStats2 = (stringPontuacoes) => {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    
    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) { // desconsidera o primeiro jogo como melhor jogo
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
console.log(basquesteStats2(stringPontuacoes)) // imprime '[ 3, 7 ]'