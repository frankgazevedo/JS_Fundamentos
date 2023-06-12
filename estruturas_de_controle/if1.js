function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // parâmetro: undefined // imprime false
seForVerdadeEuFalo(null) // parâmetro: null // imprime false
seForVerdadeEuFalo(undefined) // parâmetro: undefined // imprime false
seForVerdadeEuFalo(NaN) // parâmetro: NaN // imprime false
seForVerdadeEuFalo('') // parâmetro: string vazia '' // imprime false
seForVerdadeEuFalo(0) // parâmetro: number 0 // imprime false
seForVerdadeEuFalo(-1) // parâmetro: number != 0 // imprime true
seForVerdadeEuFalo(' ') // parâmetro: string não vazia ' ' // imprime true
seForVerdadeEuFalo('?') // parâmetro: string não vazia (qualquer que seja) // imprime true
seForVerdadeEuFalo([]) // parâmetro: array vazio [] // imprime true
seForVerdadeEuFalo([1, 2]) // parâmetro: array não vazio // imprime true
seForVerdadeEuFalo({}) // parâmetro: object vazio (ou não) // imprime true