function Pessoa() {
    this.idade = 0

    const self = this // armazenando explicitamente a referência (o 'this') da função 'Pessoa'.
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // bind 'resolve' o this explicitamente: this agora referencia o atributo 'idade' da função 'Pessoa'
}

new Pessoa