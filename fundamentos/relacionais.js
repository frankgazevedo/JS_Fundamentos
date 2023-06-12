console.log('01)', '1' == 1) // compara os valores // imprime true
console.log('02)', '1' === 1) // '===' = 'estritamente igual' // compara os valores E os tipos // imprime false
console.log('03)', '3' != 3) // imprime false
console.log('04)', '3' !== 3) // '!==' = 'estritamente diferente' // compara os valores E os tipos // imprime true

console.log('05)', 3 < 2) // imprime false
console.log('06)', 3 > 2) // imprime true
console.log('07)', 3 <= 2) // imprime false
console.log('08)', 3 >= 2) // imprime true

const d1 = new Date(0) // 0 = 01.01.1970
const d2 = new Date(0) // 0 = 01.01.1970
console.log('09)', d1 === d2) // compara referências (endereços de memória) // imprime false
console.log('10)', d1 == d2) // compara referências (endereços de memória) // imprime false
console.log('11)', d1.getTime() === d2.getTime()) // compara estritamente os valores // imprime true

console.log('12)', undefined == null) // imprime true
console.log('13)', undefined === null) // imprime false
