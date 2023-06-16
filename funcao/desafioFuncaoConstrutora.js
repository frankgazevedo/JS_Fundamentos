function Pessoa(nome) {

    // variável pública: o this garante que a referência será da variável 'nome' da classe 'Pessoa'
    this.nome = nome
    
    // metodo público: o this garante que a referência será da função construtora 'Pessoa'
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João') // uma nova instância de 'Pessoa' (objeto) está sendo criada
p1.falar() // imprime 'Meu nome é João'
console.log(p1.nome) // imprime 'João'