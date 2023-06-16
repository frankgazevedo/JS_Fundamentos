// A função construtora do JS é similar ao Construtor do Java
function Carro(velocidadeMaxima = 200, delta = 5) {
    
    // atributo privado
    let velocidadeAtual = 0 // poderia ser 'const' ou 'var', mas recomenda-se o 'let'

    // metodo público: o this garante que a referência será da função construtora 'Carro'
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo público: o this garante que a referência será da função construtora 'Carro'
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // instancia a function 'Carro'
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // instancia um object 'Carro' (em JS, object é uma coleção chave-valor)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // function
console.log(typeof ferrari) // object