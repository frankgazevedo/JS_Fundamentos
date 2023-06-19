/*
08) ​Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todos as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).Obs.: O primeiro jogo não conta como novo recorde do melhor.

Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
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