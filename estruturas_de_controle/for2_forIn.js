const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// FOR IN
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// FOR IN com object
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) // string template
}

// FOR IN com object
for(let atributo in pessoa) {
    console.log(atributo + "= " + pessoa[atributo])
}