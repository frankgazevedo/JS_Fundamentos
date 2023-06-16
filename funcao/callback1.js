const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// callback: passar uma função para outra função sempre que um EVENTO ocorrer
// mas qual é o EVENTO nesse caso? O loop (forEach), sempre que um NOVO ELEMENTO é encontrado no ARRAY
fabricantes.forEach(imprimir) // forEach() JS ≃ forEach() STREAM API do Java 
                                // nessa linha ocorre o REGISTRO da callback 'imprimir'

fabricantes.forEach(function(a){ // forEach() JS ≃ forEach() STREAM API do Java 
                                    // nessa linha ocorre o REGISTRO da callback 'function(a)'
    console.log(a)
})

// há um retorno implícito
fabricantes.forEach(fabricante => console.log(fabricante)) // forEach() JS ≃ forEach() STREAM API do Java 
                                                            // nessa linha ocorre o REGISTRO da callback (a Arrow Function)