const escola = "Cod3r"
const nome = 'Frank 34 Azevedo'
const string_ecma = `ECMA`

console.log(escola.charAt(4)) // imprime o caractere 'r'
console.log(escola.charAt(5)) // mesmo fora do índice ("escola" vai de 0 a 4), js consegue dar um retorno: vazio
console.log(nome.charCodeAt(6)) // imprime 51 (reprsentação Unicode do caractere '3')

console.log(escola.indexOf('o')) // imprime o primeiro índice (posição) em que o caracter informado for encontrado; se não houver o caracter indicado, retorna -1
console.log(nome.indexOf('r')) // imprime o primeiro índice (posição) em que o caracter informado for encontrado; se não houver o caracter indicado, retorna -1
console.log(string_ecma.indexOf('C')) // imprime o primeiro índice (posição) em que o caracter informado for encontrado; se não houver o caracter indicado, retorna -1

console.log(escola.substring(1)) // imprime a substring iniciada no índice 1 ('o') até o final da string principal ('r')
console.log(escola.substring(0,3)) // imprime a substring iniciada no índice 0 ('C') até o índice imediatamente anterior ('d') ao índice 3 ('3')

console.log('Escola '.concat(escola).concat("!")) // concatenando Strings

console.log(escola.replace('r', 'R')) // regex que substitui todos os dígitos (\d) pelo caractere 'e' 
console.log(escola.replace(/\d/, 'e')) // regex que substitui todos os dígitos (\d) pelo caractere 'e' 
console.log(escola.replace(/\w/g, 'e')) // regex que substitui todos as letras e dígitos (\w), globalmente (\g), pelo caractere 'e' 

console.log('Ana,Maria,Pedro'.split(',')) // gera um Array a partir do separador (',') indicado
console.log('Ana,Maria,Pedro'.split(/,/)) // gera um Array a partir do separador (regex: /,/) indicado