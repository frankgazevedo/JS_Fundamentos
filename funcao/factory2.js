// função baseada no Design Pattern 'Factory'
function criarProduto(nome, preco) {
    return { // um Object é retornado
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49)) // uma nova instância de 'Produto' (objeto) está sendo criada
console.log(criarProduto('iPad', 1199.49)) // uma nova instância de 'Produto' (objeto) está sendo criada