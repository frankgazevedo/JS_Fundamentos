let a = 3 // variável LOCAL (não GLOBAL). Logo, ela não é exportada por module.exports (node)
console.log(a) // imorime 3

console.log(this.a) // imprime undefined
console.log(global.a) // imprime undefined

// global (node) === window (browser)
global.b = 123
console.log(global.b) // imprime 123

this.c = 456
console.log(this.c) // imprime 456
// module.exports (node) === this
console.log(module.exports.c) // imprime 456
console.log(module.exports === this) // imprime true

this.d = false
this.e = 'teste'
console.log(module.exports) // imprime o object { c: 456, d: false, e: 'teste' }

module.exports = { f: 456, g: false, h: 'teste' }
console.log(module.exports) // imprime o object { f: 456, g: false, h: 'teste' } 
                            // forçamos a atualização das 'chaves': de 'c, d, e' para 'f, g, h'

// criando um variavel maluca: sem var e let!
abc = 3 // nao faça isso em casa!!!
console.log(global.abc)
