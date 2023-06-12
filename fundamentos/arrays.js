// em JS, Arrays são estruturas dinâmicas e heterogênas (em Java, é o contrário)
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // imprime UNDEFINED

valores[4] = 10 // Add 10 ao índice/posição 4
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // push: add items in the end of Array
console.log(valores)

console.log(valores.pop()) // pop: retira o último elemento do Array
delete valores[0] // Deleta o elemento de índice/posição 0
console.log(valores)

console.log(typeof valores)