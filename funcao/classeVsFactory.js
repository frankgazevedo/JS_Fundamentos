class Pessoa { // class é, "por debaixo dos panos", uma function
    constructor(nome) {
        this.nome = nome // variável pública: o this garante que a referência será da variável 'nome' da classe 'Pessoa'
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) // o 'this' pode variar conforme varie o objeto que chame o método falar()
    }
}

const p1 = new Pessoa('João')
p1.falar() // imprime 'Meu nome é João'

// função baseada no Design Pattern 'Factory' // RECOMENDADO
const criarPessoa = nome => {
    return { // um Object é retornado
        falar: () => console.log(`Meu nome é ${nome}`) // o 'this' não variará, independentemente do objeto que chame a função falar()
    }
}

const p2 = criarPessoa('João') // uma nova instância de 'Pessoa' (objeto) está sendo criada
p2.falar() // imprime 'Meu nome é João'

console.log(typeof criarPessoa) // function
console.log(typeof p2) // object