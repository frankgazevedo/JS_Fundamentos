// {} cria um Objeto
// [] cria um Array
const prod1 = {} // em JS, objeto é uma coleção chave-valor
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

// Objeto é diferente de JSON
'{ "nome": "Camisa Polo", "preco": 79.90}' // Isso é um JSON (texto)

console.log(prod2)