/*
11) ​As regras para o cálculo dos anos bissextos são as seguintes:

De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.

Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

// function declaration
function eBissexto (ano){
    if(ano <= 0){
        console.log(`${ano} não é bissexto`)
        return false        
    }
    if (ano % 400 == 0){
        console.log(`${ano} é bissexto`)
        return true
    }
    else if (ano % 100 == 0){
        console.log(`${ano} não é bissexto`)
        return false
    }
    else if(ano % 4 == 0){
        console.log(`${ano} é bissexto`)
        return true
    }
    console.log(`${ano} não é bissexto`)
    return false
}
eBissexto(0) // imprime '0 não é bissexto'
eBissexto(4) // imprime '4 é bissexto'
eBissexto(81) // imprime '81 não é bissexto'
eBissexto(100) // imprime '100 não é bissexto'
eBissexto(400) // imprime '400 é bissexto'
eBissexto(800) // imprime '800 é bissexto'
eBissexto(2020) // imprime '2020 é bissexto'
eBissexto(2021) // imprime '2021 não é bissexto'

// Toda Arrow Function é uma function expression
let Bissexto = (ano) => {
    if(ano <= 0){
        return false        
    }
    if (ano % 400 == 0){
        return true
    }
    else if (ano % 100 == 0){
        return false
    }
    else if(ano % 4 == 0){
        return true
    }
    return false
}
console.log(Bissexto(0)) // imprime 'false'
console.log(Bissexto(4)) // imprime 'true'
console.log(Bissexto(81)) // imprime 'false'
console.log(Bissexto(100)) // imprime 'false'
console.log(Bissexto(400)) // imprime 'true'
console.log(Bissexto(800)) // imprime 'true'
console.log(Bissexto(2020)) // imprime 'true'
console.log(Bissexto(2021)) // imprime 'false'