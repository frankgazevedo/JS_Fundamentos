let valor // variável definida mas não inicializada
console.log(valor)

// console.log(valor2) // variável não definida

valor = null // ausência de valor => a variável não aponta para nenhum objeto/referência/endereço de memória
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // deleta o atributo 'preco' do Objeto 'produto'
console.log(produto)

produto.preco = null // sem preço válido // isso é diferente de undefined // NULL é a forma adequada
console.log(!!produto.preco)
console.log(produto)