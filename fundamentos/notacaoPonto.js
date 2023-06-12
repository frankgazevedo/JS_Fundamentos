console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome) // imprime 'Bola'
obj1['nome'] = 'Bola2' // notação equivalente à "obj1.nome = 'Bola'" // Não recomendada
console.log(obj1.nome) // imprime 'Bola2'

function Obj(nome) {
    // o THIS fornece comportamento similar ao PUBLIC de Java
    this.nome = nome
    this.exec = function() { // função anônima
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()