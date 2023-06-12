const nome = 'Rebeca'
const concatenacao = 'Olá, ' + nome + "!"
const template = `
    Olá 
    ${nome}!`

console.log(concatenacao, template)

const template2 = `Olá ${nome}!`

console.log(template2)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // função 'elo' (lambda)
console.log(`Ei... ${up('cuidado')}!`) // imprime 'Ei... CUIDADO'. 